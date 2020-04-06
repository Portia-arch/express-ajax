document.getElementById(myForm).addEventListener('submit', 'addNewVisitor');

// const addNewVisitor = async ()=> {

// }

//add a new visitor
const newPost = async () => {
    let newForm = document.getElementById('myForm');
    let newbody = document.getElementById('body');

  const options = {
    method: 'POST',
    body: JSON.stringify(newForm:myForm, newbody:body),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  return fetch(`http://localhost:3001/single-page-app`, options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.log(`Error: ${Error}`))
  });

    // const data = await form.json();
    // createTableRows([data.visitor]);

    // return data;
}

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