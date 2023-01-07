export async function getKlubovi(){
    return await fetch('/getKlubovi', {mode:"no-cors"})
        .then((res) => res.json())
        .catch((err) =>console.log(err))
}

export async function getIgraci(){
    return await fetch('/getIgraci', {mode:"no-cors"})
        .then((res) => res.json())
        .catch((err) =>console.log(err))
}

export async function getTreneri(){
    return await fetch('/getTreneri', {mode:"no-cors"})
        .then((res) => res.json())
        .catch((err) =>console.log(err))
}

export async function getFull(){
    return await fetch('/getFull', {mode:"no-cors"})
        .then((res) => res.json())
        .catch((err) =>console.log(err))
}

export async function exportCSV(){

}

export async function exportJSON(){
    
}

export async function addKlub(form) {
    return await fetch(
      'http://localhost:5000/addKlub', {
        method: 'POST',
        mode: "no-cors",
        body: JSON.stringify(form),
        headers: {'Content-type': 'application/json'},
        credentials: 'include'
      }
    )
      .then((response) => {
                
        if(response.status === 200) {
 
          console.log("Uspjesno dodan klub")
          return;
        } else {
          console.log("NEUSPJESNO dodan klub")
        }
        
      })
      .catch((err) => console.log(err));
    
}

export async function deleteKlub(id) {
  return await fetch(
    `/deleteKlub/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }
  )
    .then((response) => {
              
      if(response.status === 200) {

        console.log("Uspjesno obrisan klub")
        return;
      } else {
        console.log("NEUSPJESNO obrisan klub")
      }
      
    })
    .catch((err) => console.log(err));
  
}

export async function Refresh(){
  return await fetch('http://localhost:5000/refresh', {mode:"no-cors"})
      .then((res) => res.json())
      .catch((err) =>console.log(err))
}
