extern crate serde_json;
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;
use sha2::{Sha256, Digest};
use rand::prelude::*;
use rand::thread_rng;

#[macro_use]
extern crate serde_derive;

#[derive(Serialize, Deserialize)]
#[derive(Hash)]
#[derive(Debug)]
pub struct Record {
    id: String,
    email: String,
    ip_address: String,
    last_name: String,
    first_name: String,
    password: String,
    desc: String,
}

impl Record {
    fn join(&self) -> String {
        format!("{};{};{};{};{};{};{};",
            self.id.to_string(),
            self.email.to_string(),
            self.ip_address.to_string(),
            self.last_name.to_string(),
            self.first_name.to_string(),
            self.password.to_string(),
            self.desc.to_string(),
        )
    }
}

#[derive(Serialize, Deserialize)]
#[derive(Hash)]
#[derive(Debug)]
pub struct Node {
    id: String,
    parent: String,
    nonce: String,
    records: Vec<Record>,
}

#[wasm_bindgen]
pub fn compute(js_objects: &JsValue, js_limit: &JsValue) -> JsValue {

    let _limit: usize = js_limit.into_serde().unwrap();
    let _prefix: String = (0.._limit).map(|_| "0").collect();

    let mut _parent = "0".to_string();

    let mut _nodes: Vec<Node> = js_objects.into_serde().unwrap();

    for node in _nodes.iter_mut() {
        node.parent = _parent.to_string();

        let mut _id: String;
        let mut _nonce: String;

        loop {
            let mut rng = thread_rng();

            _nonce = (0..32)
                .map(|_| {
                    rng
                        .gen_range(0, 9)
                        .to_string()
                })
                .collect();

            &mut node.records.shuffle(&mut rng);
            let _values: String = node.records.iter_mut().map(|r| r.join()).collect();

            let sha = Sha256::new()
                .chain(&_parent)
                .chain(&_nonce)
                .chain(&_values)
                .result();

            _id = format!("{:x}", sha);

            if _id[.._limit] == _prefix {
                break;
            }
        }

        _parent = _id.to_string();
        node.id = _id.to_string();
        node.nonce = _nonce;
    }

    JsValue::from_serde(&_nodes).unwrap()
}
