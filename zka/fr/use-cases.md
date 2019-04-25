<!--{section^1:data-breadcrumb="7 questions"}-->

<!--{.interleaf data-background-image="/img/unsplash/784361.jpg"}-->
<!-- Photo by Camylla Battani on Unsplash -->

## <svg class="icon"><use xlink:href="/img/icons.svg#dots-two-vertical"></svg> 7 questions sur l'impact de ZKA

(la 3^e^ va vous surprendre)

===
<!--{.xx-large}-->

1/ **Migrer** une base de code existante

===
<!--{.xx-large}-->

2/ Appliquer ZKA au **Big Data**

===
<!--{.xx-large}-->

3/ **Perte** des clefs

===
<!--{.xx-large}-->

4/ Gestion des **metadonnées** sur le serveur

===
<!--{.xx-large}-->

5/ **Compromission** du serveur

===
<!--{.xx-large}-->

6/ **Export** des clefs

===
<!--{.xx-large}-->

7/ Badge de **récupération**

===
<!--{.medium}-->

À l'initialisation {.large}

- Le badge contient :
  - un certificat _sans mot de passe_
  - deux paires de clefs
  - un jeton TOTP
- La paire de chiffrement est installée dans le client lors du rattachement {.fragment .fade-up}
- Les données sont doublement chiffrées avec la clef public du dispositif {.fragment .fade-up}
- Le jeton TOTP est synchronisé sur l'app cliente {.fragment .fade-up}



===
<!--{.medium}-->

Au déchiffrrement {.large}

- Le badge :
  1. conçoit un mot de passe symétrique en DH avec le client
  2. envoie un payload signé qui contient le jeton TOTP et le certificat intermédiaire
- Le client :
  1. vérifie le payload et le déchiffre
  2. vérifie le jeton TOTP
  3. déchiffre les contenus avec le certificat intermédiaire
