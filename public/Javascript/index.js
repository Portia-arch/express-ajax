
document.getElementById('getData').addEventListener('click', getData);
document.getElementById('postData').addEventListener('submit', postData);


/**
 * List the visitors submitted
 */
function getData() {
  fetch('http://localhost:3005/addNewVisitor')
    .then((res) => { return res.json() })
    .then((data) => {
      let result = `<h2> Random User Info From Jsonplaceholder API</h2>`;
      data.forEach((user) => {
        const { id, name, assistant_name, visitor_age, date, time, comment } = user
        result +=
          `<tr>
                    <th> Visitor ID: ${id} </th>
                    <th> Visitor Name : ${name}</th>
                    <th> Assistant Name : ${assistant_name} </th>
                    <th> Visitor's Age : ${visitor_age} </th>
                    <th> Date : ${date} </th>
                    <th> Time : ${time} </th>
                    <th> Comments : ${comment} </th>
          </tr>`;
        document.getElementById('result').innerHTML = result;
      });
    })
}

/**
 * Post all the users
 */
function postData(event) {
  event.preventDefault();

  let visitor_name = document.getElementById('visitor_name').value;
  let assistant_name = document.getElementById('visitor_name').value;
  let visitor_age = document.getElementById('visitor_age').value;
  let date = document.getElementById('date').value;
  let time = document.getElementById('time').value;
  let comment = document.getElementById('comment').value;

  fetch('http://localhost:3005/addNewVisitor', {
    method: 'POST',
    headers: new Headers(),
    body: JSON.stringify({ visitor_name: visitor_name, 
                          assistant_name: assistant_name,
                          visitor_age: visitor_age,
                          date: date,
                          time: time,
                          comment: comment
                        })
  }).then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}