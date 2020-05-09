form.onsubmit = async (event) => {
  event.preventDefault();

  const body = {
    name: event.target[0].value,
    assistant: event.target[1].value,
    age: event.target[2].value,
    date: event.target[3].value,
    time: event.target[4].value,
    comment: event.target[5].value,
  };

  submit(body);

  for (let i = 0; i < e.target.length; i++) {
    e.target[i].value = null;
  }
};

const submit = async (body) => {
  const url = "http://127.0.0.1:3000/addNewVisitor";

  const res = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  createTableRows([data.visitors]);

  return data;
};

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