import React from "react";
import styled from "styled-components";
import "../components/App.css";
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from "../components/LogoutButton";

const Profile = (props) => {
  
  const {user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (<>
      <div class="zaglavlje">
        <LogoutButton/>
        <h1>Hrvatski nogometni klubovi</h1>
        <center><a href="/"><img class="logo" src="../img/lopta.png" alt="lopta"/></a></center>
      </div>
      <div class="container2">
        <div class="opis2">
            {user?.picture && <center><img class="profilepic" src={user.picture} alt={user?.name} /></center>}
            <br/>
            <h2>{user?.name}</h2>
            <ul>
              {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]}</li>)}
            </ul>
        </div>
      </div>
    </>)
  );
  
};

export default Profile;

const MojDiv= styled.div`
`;