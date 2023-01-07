import React from "react";
import styled from "styled-components";
import "../components/App.css";
import { useState, useEffect } from "react";
import { getKlubovi, getFull, exportCSV, exportJSON, getIgraci, addKlub } from "../utils/fetch";
import { useAuth0 } from '@auth0/auth0-react';


const CreateNew = (props) => {
    const {isAuthenticated } = useAuth0();
    const [form, handleForm] = useState(
        {
            naziv:"", 
            datumosn:"",
            liga:"",
            sjedište:"",
            stadion:"",
            glavnisponzor:""
        }
    )

    let handleInputChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        handleForm({...form,[name]:value})
    }

    let HandleSubmit= ()=>{
        //console.log(form);
        addKlub(form);
    }


    return(isAuthenticated && (<>
        <div class="zaglavlje">
            <center><a href="/datatable"><img class="logo" src="../img/lopta.png" alt="lopta"/></a></center>
        </div>
        <div class="divform">
            <form action="./addKlub" lang="hr" onSubmit={(e)=>{
                                            e.preventDefault();
                                            HandleSubmit(e);
                                        }}>
                <div class="divformbaby"><label for="naziv">Naziv: </label>
                    <input type="text" id="naziv" required name="naziv" value={form.naziv} onChange={(e)=>handleInputChange(e)} placeholder="naziv"></input>
                </div>
                <div class="divformbaby"><label for="datumosn">Datum osnivanja: </label>
                    <input type="date" id="datumosn" required name="datumosn" value={form.datumosn} onChange={(e)=>handleInputChange(e)} placeholder="datum osnivanja"></input>
                </div>    
                <div class="divformbaby"><label for="liga">Liga: </label>
                    <input type="text" id="liga" required name="liga" value={form.liga} onChange={(e)=>handleInputChange(e)} placeholder="liga"></input>
                </div>    
                <div class="divformbaby"><label for="sjedište">Sjedište: </label>
                    <input type="text" id="sjedište" required name="sjedište" value={form.sjedište} onChange={(e)=>handleInputChange(e)} placeholder="sjedište"></input>
                </div>   
                <div class="divformbaby"><label for="stadion">Stadion: </label>
                    <input type="text" id="stadion" required name="stadion" value={form.stadion} onChange={(e)=>handleInputChange(e)} placeholder="stadion"></input>
                </div>    
                <div class="divformbaby"><label for="glavnisponzor">Glavni Sponzor: </label>
                    <input type="text" id="glavnisponzor" name="glavnisponzor" value={form.glavnisponzor} onChange={(e)=>handleInputChange(e)} placeholder="glavni sponzor"></input>
                </div>
                <div class="divformbaby"><input type="reset" onClick={()=>handleForm({naziv:"", datumosn:"", liga:"", sjedište:"", stadion:"", glavnisponzor:""})}></input>
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    </>));
};

export default CreateNew;