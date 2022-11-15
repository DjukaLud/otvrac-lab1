export async function getKlubovi(){
    return await fetch('http://localhost:5000/getKlubovi', {cors:"no-cors"})
        .then((res) => res.json())
        .catch((err) =>console.log(err))
}

export async function getIgraci(){
    return await fetch('http://localhost:5000/getIgraci', {cors:"no-cors"})
        .then((res) => res.json())
        .catch((err) =>console.log(err))
}

export async function getTreneri(){
    return await fetch('http://localhost:5000/getTreneri', {cors:"no-cors"})
        .then((res) => res.json())
        .catch((err) =>console.log(err))
}

export async function getFull(){
    return await fetch('http://localhost:5000/getFull', {cors:"no-cors"})
        .then((res) => res.json())
        .catch((err) =>console.log(err))
}

export async function exportCSV(array){
  
    let obj={
      array: array
    }
  
     await fetch(`/createCSV`,{
      method: "post",
      cors: "no-cors",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then((response) => {
        document.getElementById("exportCSV").click();
        console.log(response.json())})
      .catch((err) => console.log(err.message));
   
    return;
}

export async function exportJSON(filterOption, filter = ""){
  
    let obj={
      filter: filter,
      filterOption: filterOption
    }
  
     await fetch(`/createJSONFile`,{
      method: "post",
      cors: "no-cors",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then((response) => {
        document.getElementById("exportJSON").click();
        console.log(response.json())})
      .catch((err) => console.log(err.message));
   
    return;
  }

