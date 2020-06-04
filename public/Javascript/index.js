
/**
     * Post all the users
     */
async function postData(event) {
    event.preventDefault();

    let visitor_name = document.getElementById('name').value;
    let assistant_name = document.getElementById('ass_name').value;
    let visitor_age = document.getElementById('age').value;
    let date = document.getElementById('dated').value;
    let time = document.getElementById('timed').value;
    let comment = document.getElementById('commentis').value;

    const results = await fetch('http://localhost:3005/addNewVisitor', {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify({
            visitor_name: visitor_name,
            assistant_name: assistant_name,
            visitor_age: visitor_age,
            date: date,
            time: time,
            comment: comment
        })
    })
    let response = await results.json()
    console.log(response)
    // .catch((err) => console.log(err))
}

const createRows = abavakashi => {
    const tbody = document.getElementById('abavakashi');

    for (let i = 0; i < abavakashi.length; i++) {
        let row = createColumns(abavakashi[i]);


        row.setAttribute('id', `visitor-${abavakashi[i].visitorid}`);
        tbody.prepend(row);
    }
}

const createColumns = visitor => {


    let row = document.createElement('tr');

    //Id column
    let tdID = document.createElement('td');
    tdID.innerHTML = visitor.id;
    row.appendChild(tdID);

    //Visitor's name column
    let tdVisitor_Name = document.createElement('td');
    tdVisitor_Name.innerHTML = visitor.visitor_name;
    row.appendChild(tdVisitor_Name)

    //Assistant's name column
    let tdAssistant_Name = document.createElement('td');
    tdAssistant_Name.innerHTML = visitor.assistant_name;
    row.appendChild(tdAssistant_Name);

    //Visitor's age column
    let tdAge = document.createElement('td');
    tdAge.innerHTML = visitor.visitor_age;
    row.appendChild(tdAge);

    //Date column
    let tdDateOfVisit = document.createElement('td');
    tdDate.innerHTML = new Date(visitor.date).toLocaleDateString();
    row.appendChild(tdDate);

    //Time column
    let tdTimeOfVisit = document.createElement('td');
    tdTime.innerHTML = visitor.time;
    row.appendChild(tdTime);

    //Comments column
    let tdComments = document.createElement('td');
    tdComments.innerHTML = visitor.comment;
    row.appendChild(tdComments);


    const button = DeleteButton(visitor.visitorid);
    row.appendChild(button);

    return row;
}

/**
 * List the visitors submitted
 */
// async function getData() {
//   const response = await fetch('http://localhost:3005/addNewVisitor')
//     const data = await response.json()

//     for (item of Data) {
//       const
//     }
//   .then((res) => { return res.json() })
//     .then((data) => {
//       let result = `<h2> Random User Info From Jsonplaceholder API</h2>`;
//       data.forEach((user) => {
//         const { id, name, assistant_name, visitor_age, date, time, comment } = user
//         result +=
//           `<tr>
//                     <th> Visitor ID: ${id} </th>
//                     <th> Visitor Name : ${name}</th>
//                     <th> Assistant Name : ${assistant_name} </th>
//                     <th> Visitor's Age : ${visitor_age} </th>
//                     <th> Date : ${date} </th>
//                     <th> Time : ${time} </th>
//                     <th> Comments : ${comment} </th>
//           </tr>`;
//         document.getElementById('result').innerHTML = result;
//       });
//     })
// }

