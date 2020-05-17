function formDisplay() {
  document.getElementById("option").style.display = "none";
  document.getElementById("formDisplay").style.display = "block"
}

let form = document.getElementById("visitorForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let fields = ["visitor_name", "ass_name", "visitor_age", "date", "time", "comment"];

  let data = new Object();

  for (let i = 0; i < form.elements.length - 1; i++) {
    data[fields[i]] = form.elements[i].value;
  }

  let request = new Request('http://localhost:3005/addNewVisitor', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data)
  });

  fetch(request)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      listAllVisits();
    })
    .catch((err) => {
      console.log(err);
    })
})

function listAllVisits() {
  document.getElementById("table").innerHTML = "";
  let request = new Request(`http://localhost:1221/viewVisitors`, { method: 'GET' });
  fetch(request)
    .then((res) => { return res.json() })
    .then((json) => {
      document.getElementById("table").innerHTML += `<h2 id=h1>All visits</h2><br>
                                                        <tr>
                                                        <th>Visitor ID</th>
                                                        <th>Visitor Name</th>
                                                        <th>Assistant Name</th>
                                                        <th>Visitor Age</th>
                                                        <th>Visit Date</th>
                                                        <th>Visit Time</th>
                                                        <th>Comment</th>
                                                        <th>Action</th>
                                                        </tr>`
      for (i = 0; i < json.length; i++) {
        let data = `<tr>
                        <td>${json[i].visitorid}</td>
                        <td>${json[i].visitorname}</td>
                        <td>${json[i].assistantname}</td>
                        <td>${json[i].visitorage}</td>
                        <td>${json[i].visitdate}</td>
                        <td>${json[i].visittime}</td>
                        <td>${json[i].comments}</td>
                        <td>
                        <button class=delete id=${json[i].visitorid}>Delete</button>
                        </td>
                        </tr>`
        document.getElementById("table").innerHTML += data;
        let delrteBtn = document.getElementById(`${json[i].visitorid}`)
        delrteBtn.addEventListener("click", deleteVisit)
      }
    })
}

function deleteVisit(event) {
  alert(`Event: ${event.target.id}`)
  let request = new Request(`http://localhost:1221/deleteVisitor${event.target.id}`, { method: 'DELETE' });

  fetch(request)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      listAllVisits();
    })
    .catch((err) => {
      console.log(err);
    })
}
// const addNewVisitor = async ()=> {

// }

//add a new visitor
// const newPost = async () => {
//     let newForm = document.getElementById('myForm');
//     let newbody = document.getElementById('body');

//   const options = {
//     method: 'POST',
//     body: JSON.stringify(newForm:myForm, newbody:body),
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     })
//   }
//   return fetch(`http://localhost:3001/single-page-app`, options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(error => console.log(`Error: ${Error}`))
//   };

    // const data = await form.json();
    // createTableRows([data.visitor]);

    // return data;


//list all the visitors
// const viewVisitors = async ()=> {
//   return fetch(`http://localhost:3001/single-page-app`, options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(error => console.log(`Error: ${Error}`))
//   });
// }


// //delete a visitor by ID
// const newdelete = async delete => {
//   const options = {
//     method: 'DELETE',
//     body: JSON.stringify(post),
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     })
//   }
//   return fetch(`http://localhost:3001/single-page-app`, options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(error => console.log(`Error: ${Error}`))
//   });

// }

// //Update the visitor
// const newUpdate = async update => {
//   const options = {
//     method: 'PUT',
//     body: JSON.stringify(post),
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     })
//   }
//   return fetch(`http://localhost:3001/single-page-app`, options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(error => console.log(`Error: ${Error}`))
//   });
//   }