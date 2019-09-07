use std::fmt;
use crypto::digest::Digest;
use crypto::sha2::Sha256;
use rand::prelude::*;

use wasm_bindgen::prelude::*;

#[macro_use]
extern crate serde_derive;

#[derive(Serialize, Deserialize)]
pub struct Node {
    id: String,
    parent: String,
    nonce: String,
    records: Vec<Record>
}

impl Node {
    fn generate_nonce(&mut self) {
        let mut rng = thread_rng();
        self.nonce = (0..32)
            .map(|_| {
                format!("{}", rng.gen_range(0, 9))
            })
            .collect();
    }

    fn generate_id(&mut self) {
        let mut sha = Sha256::new();
        sha.input_str(&format!("{}{}{}",
            &self.parent,
            &self.nonce,
            &self.records_to_string()
        ));
        self.id = sha.result_str();
    }

    fn records_to_string(&self) -> String {
        self.records.iter().map(|r| format!("{}", r)).collect::<String>()
    }

    fn mine(&mut self, limit: &usize, prefix: &str) -> bool {
        let mut rng = thread_rng();

        self.records.shuffle(&mut rng);
        
        self.generate_nonce();
        self.generate_id();
        
        self.id[..*limit].eq(prefix)
    }
}

#[derive(Serialize, Deserialize)]
pub struct Record {
    id: String,
    email: String,
    ip_address: String,
    last_name: String,
    first_name: String,
    password: String,
    desc: String,
}

impl fmt::Display for Record {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{};{};{};{};{};{};{};",
            self.id,
            self.email,
            self.ip_address,
            self.last_name,
            self.first_name,
            self.password,
            self.desc
        )
    }
}

#[wasm_bindgen]
pub struct Stats(pub f64, pub usize);

#[wasm_bindgen(module = "/bridge.js")]
extern "C" {
    fn updateState(state: JsValue);
}

#[wasm_bindgen]
pub fn compute(nodes: &JsValue, limit: usize) -> Stats {
    let mut nodes: Vec<Node> = nodes.into_serde().unwrap();
    
    let prefix: &str = &"00000"[..limit];

    let mut rounds = 0;

    let window = web_sys::window().expect("should have a window in this context");
    let performance = window
        .performance()
        .expect("performance should be available");
    let t = performance.now();

    let mut parent = String::from("-");
    for node in nodes.iter_mut() {
        node.parent = parent;
        loop {
            rounds += 1;
            if node.mine(&limit, &prefix) {
                break
            }
        }
        parent = node.id.clone();
    }

    updateState(JsValue::from_serde(&nodes).unwrap());
    Stats(performance.now() - t, rounds)
}
