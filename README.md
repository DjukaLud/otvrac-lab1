# **Hrvatski nogometni klubovi - labos 1** #
                                  
## Metapodaci: ##

* **naslov** : Hrvatski nogometni klubovi
* **opis skupa podataka** : Skup podataka sadrži informacije o 15 najuspješnijih hrvatskih nogometnih klubova aktualne 22./23. sezone. U obzir se uzimaju dvije najmoćnije hrvatske nogometne lige: _SuperSport hrvatska nogometna liga_ te _Prva nogomenta liga_ (prije poznatije kao Prva i Druga HNL). Za svaki klub, zasebno u tablicama navedeno je i nekoliko reprezentativnih odabranih igrača, glavni trener/menadžer te najosnovniji podaci o navedenim osobama.
* **ključne riječi** : nogomet, nogometni klub, igrač, trener, stadion
* **datum izrade skupa podataka** : 31.10.2022.
* **datum objave skupa podataka** : 1.11.2022.
* **licencija** : Creative Commons Zero v1.0 Universal
* **opis licencije** : _No Copyright, The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law. You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. See Other Information below._ (https://creativecommons.org/publicdomain/zero/1.0/)

* **naziv autora** : Luka Đud
* **verzija skupa podataka** : 1.0
* **jezik** : hrvatski
* **opis atributa** : 
    * idKluba - cijeli broj, primarni ključ tablice 'Nogometni_klub'
    * nazivTim - podatak tipa string proizvoljne veličine, označava puni službeni naziv nogometnog kluba
    * datumOsn - podatak tipa date, prikazuje datum osnivanja kluba
    * liga - string, naziv nogometne lige kojoj trenutno pripada klub
    * sjedište - string, označava naziv mjesta gdje se nalazi sjedište kluba
    * stadion - string, službeni naziv stadiona gdje klub igra domaće utakmice i održava treninge
    * glavni sponzor - string, ne mora nužno postojati, generalni sponzor kluba, najveći sudionik u financiranju kluba
    * idTrener - cijeli broj, primarni ključ tablice 'Trener'
    * imeTrener - string, naziv glavnog trenera kluba
    * prezimeTrener - string, prezime glavnog trenera kluba
    * idIgrač - cijeli broj, primarni ključ u tablici 'Igrač'
    * imeIgrač - string, ime igrača koji je službeno član navedenog kluba
    * prezimeIgrač - string, prezime igrača
    * dob - integer, starost igrača  