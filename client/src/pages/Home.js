import React from "react";
import styled from "styled-components";
import "../components/App.css";
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from "../components/LogoutButton";
import { Refresh } from "../utils/fetch";

const Home = (props) => {
  
  const {isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (<>
      <div class="zaglavlje">
        <LogoutButton/>
        <form><button class="button2" formaction="/profile">Korisnički profil</button></form>
        <button class="button2" value="Osvježi preslike" onClick={() => Refresh()}>Osvježi preslike</button>
        <h1>Hrvatski nogometni klubovi</h1>
        <center><a href="/datatable"><img class="logo" src="../img/lopta.png" alt="lopta"/></a></center>
      </div>
      <div class="container">
        <div class="opis">
          <h2>Općenito o podacima:</h2>
          <br/>
          <p>Skup podataka sadrži informacije o 15 najuspješnijih hrvatskih nogometnih klubova aktualne 22./23. sezone. U obzir se uzimaju dvije najmoćnije hrvatske nogometne lige: SuperSport hrvatska nogometna liga te Prva nogomenta liga (prije poznatije kao Prva i Druga HNL). Za svaki klub navedeno je i nekoliko reprezentativnih odabranih igrača, glavni trener/menadžer te najosnovniji podaci o navedenim osobama. </p>
          <br/>
          <ul>
            <li><b>datum izrade skupa podataka:</b> 31.10.2022.</li>
            <li><b>datum objave skupa podataka:</b> 1.11.2022.</li>
            <li><b>licencija:</b> Creative Commons Zero v1.0 Universal</li>
            <li><b>opis licencije:</b> No Copyright, The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law. You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. <a href="https://creativecommons.org/publicdomain/zero/1.0/">(https://creativecommons.org/publicdomain/zero/1.0/)</a></li>
            <li><b>jezik:</b> hrvatski</li>
          </ul>
        </div>
        <div class="atributi">
          <ul>
            <li><b>idKluba</b>- cijeli broj, primarni ključ tablice 'nogometni_klub'</li>
            <li><b>nazivTim</b> - podatak tipa string proizvoljne veličine, označava puni službeni naziv nogometnog kluba</li>
            <li><b>datumOsn</b> - podatak tipa date, prikazuje datum osnivanja kluba</li>
            <li><b>liga</b> - string, naziv nogometne lige kojoj trenutno pripada klub</li>
            <li><b>sjedište</b> - string, označava naziv mjesta gdje se nalazi sjedište kluba</li>
            <li><b>stadion</b> - string, službeni naziv stadiona gdje klub igra domaće utakmice i održava treninge</li>
            <li><b>glavni sponzor</b> - string, ne mora nužno postojati, generalni sponzor kluba, najveći sudionik u financiranju kluba</li>
            <li><b>idTrener</b> - cijeli broj, primarni ključ tablice 'Trener'</li>
            <li><b>imeTrener</b> - string, naziv glavnog trenera kluba</li>
            <li><b>prezimeTrener</b> - string, prezime glavnog trenera kluba</li>
            <li><b>idIgrač</b> - cijeli broj, primarni ključ u tablici 'Igrač'</li>
            <li><b>imeIgrač</b> - string, ime igrača koji je službeno član navedenog kluba</li>
            <li><b>prezimeIgrač</b> - string, prezime igrača</li>
            <li><b>dob</b> - integer, starost igrača</li>
          </ul>
        </div>
      </div>
      <div class="download">
        <a href="../Nogometni_klubovi.csv" download>Download CSV</a>
        <a href="../Nogometni_klubovi.json" download>Download JSON</a>
      </div>
    </>)
  );
  
};

export default Home;

const MojDiv= styled.div`
`;
