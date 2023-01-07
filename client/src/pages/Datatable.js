import React from "react";
import styled from "styled-components";
import "../components/App.css";
import { useState, useEffect } from "react";
import { getKlubovi, getFull, exportCSV, exportJSON, getIgraci } from "../utils/fetch";
import { useAuth0 } from '@auth0/auth0-react';


import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";




const Datatable = (props) => {
  const [klubovi, setKluboviList] = useState([]);
  const [columns, setColumns] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterOption, setFilterOption] = useState("wildcard");
  let navigate = useNavigate();
  const {isAuthenticated } = useAuth0();
  
  //nsole.log(columns)
  let options=[]
  if(klubovi[0]){
    for(var i of Object.keys(klubovi[0])) options.push(<option key={i} value={i}>{i}</option>)
  }  
  
  if(filterOption === "wildcard"){

    var filtriraniKlubovi = []
    if(klubovi.length > 0){
      filtriraniKlubovi = klubovi.filter((klub)=>{
        for(let value in klub){
            if(klub[value] === null) continue;
            if(klub[value].toString().toLowerCase().includes(filter.toString().toLowerCase())) return true;
        }
        return false;
      })
    }
  } else {

        if(klubovi.length > 0){
            var filtriraniKlubovi = klubovi.filter((value)=>{
            return value[filterOption].toString().toLowerCase().includes(filter.toString().toLowerCase())
            })
        } else {
            var filtriraniKlubovi = [];
        }
  }
 
  useEffect(() => {
    const res = getFull().then((item) => {
      console.log(item.response);
      setKluboviList(item.response);
      let tempRedovi=[];
      
      for(let i of Object.keys(item.response[0])){
        tempRedovi.push({name: i, selector: (row) => row[i]})
      }

      setColumns(tempRedovi);
    });
  }, []);
   
  let handleChange=(event)=>{
    setFilter(event.target.value);
  }
  
  return (isAuthenticated && (<>
    <span>
      <center><a href="/"><img class="logo" src="../img/lopta.png" alt="lopta"/></a></center>
    </span>
    <TableSection>
        <form onSubmit={(e) => e.preventDefault()}>
            <select value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
                <option value={"wildcard"}>All</option>
                {options}
            </select>
          <input type="text" name="filter" id="filter" placeholder="filter" value={filter} onChange={(event)=>{handleChange(event)}}></input>
          <a href="./createNew">Create new</a>
        </form>
    </TableSection>
        <DataTable
            columns={columns}
            data={filtriraniKlubovi}
            pagination
            highlightOnHover
            onRowClicked={(row) => navigate(`/editKlub/${row.idkluba}`)}
        />
        <ExportButton onClick={()=>exportCSV(filtriraniKlubovi)}>CSV</ExportButton>
        <ExportButton onClick={()=>exportJSON(filtriraniKlubovi)}>JSON</ExportButton>
        <div class="exporti">
          <a hidden id="exportCSV" href="./exportCSV.csv" download="klubovi" target="_blank"></a>
          <a hidden id="exportJSON" href="./exportJSON.json" download="klubovi" target="_blank"></a>
        </div>
    </>)
   // !isAuthenticated && (<p>Authentication Error</p>)
  );
  
};

export default Datatable;

//styles
 const TableSection= styled.section`
    margin-left: 1100px;

`;

const ExportButton=styled.button`
  padding:5px;
  margin: 5px;
`; 