
const userCard = user => `<div class="card">
    <div class="card-body">
      <h5 class="card-title user-name">${user.name}</h5>
      <p class="card-text">Username: ${user.username}</p>
      <p class="card-text-secondary">Email: ${user.email}</p>
      <p class="card-text-tertiary">Address: ${Object.values(user.address).filter((value) => typeof value !== "object").join(", ")}</p>
      <a href="./profile.html?userId=${user.id}" class="btn btn-primary">See profile</a>
    </div>
    </div>
    `

let results = []

const titleMain = document.querySelector(".container .row")

window.onload = () => {

  getUser()
}


// Ex1) Get and display, using async / await, the users from: https://jsonplaceholder.typicode.com/users 

const getUser = async () => {
    try {
      // const artistId = new URLSearchParams(location.search).get("userId")

      const resp = await fetch("https://jsonplaceholder.typicode.com/users")
      const allUserInfo = await resp.json()
      console.log(allUserInfo)

      //getting fetched values into our array
      results = allUserInfo

      titleMain.innerText = ""
      allUserInfo.forEach(info => {
        // console.log(track)
        titleMain.innerHTML += userCard(info)
      
      })

      console.log(titleMain)
      // const followers = document.getElementById("followers")
      // followers.innerText = user.nb_fan + " followers"

    } catch (err) {
      console.log(err)
    }
}



// const users = []

// console.log(users.map(({name}) => name));

// function onlyNames ( ) {
//   const getInputs = document.querySelector(".user-name")
//   titleMain.innerText = ""
//   titleMain.createElement("ul")
//   titleMain.classList.add("list-group")
//    getInputs.forEach(name => {
//   `<li class="list-group-item">${name}</li>
//   `}
//    )
//  }
  
/*

} catch (err) {
  console.log(err)
  container.innerHTML = ""
  const errDiv = document.getElementById("error")
  errDiv.classList.add("text-danger")
  errDiv.innerText = err.message
} finally {
  console.log("here")

const userCard = user => `<div class="card col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card-body p-1">
      <h5 class="card-title user-name">${user.name}</h5>
      <p class="card-text">Username: ${user.username}</p>
      <p class="card-text-secondary">Email: ${user.email}</p>
      <p class="card-text-secondary">Street: ${user.address.street}</p>
    </div>
    </div>
    `

*/

//check results
function checkResult (){
  console.log(results)
}

// Ex2) Create a dropdown (<select>) that allows the user to select between name, username and email. 
//            Create then a filter. When the user types in something, you should filter the user based on the input and on the value of the select.
//            Es.: select on NAME. Filter input = Glenna, only user id number 9 should remain
// //filter and update main section
const filter = () =>{
  //get user input value
  const userInput = document.querySelector("#userInput").value
  //get user selection
  const userSelection = document.querySelector("#userSelection").value

  let filteredResults = results.filter(user =>
    user[userSelection].toLowerCase().includes(userInput.toLowerCase()))
  
  // console.log(filteredResults)
  //update results into main section
  titleMain.innerText = ""
  filteredResults.forEach(info => {
        // console.log(track)
  titleMain.innerHTML += userCard(info)
  })

}
  
let extractedNames = results.map(user => user.name)

// Ex3) Create a function that, from the list of users, extracts only the names
const extractNames = () =>{
 titleMain.innerHTML = " "
 extractedNames.forEach(name => 
  titleMain.innerHTML += onlyUserName(name))

}

let onlyUserName = user => `<div class="card col-6 col-sm-4 col-md-3 col-lg-2">
<div class="card-body">
  <h5 class="card-title user-name">${user}</h5>
</div>
</div>
`


// Ex4) Create a function that, from the list of users, creates an array of addresses as string and not as an object. Like:
//               {
//               "street": "Victor Plains",
//               "suite": "Suite 879",
//               "city": "Wisokyburgh",
//               "zipcode": "90566-7771",
//               "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//               }
//           Should become Victor Plains, Suite 879, Wisokyburgh (90566-7771)


// Ex5) Add a button that sorts the list by name ascending / descending (ONE button)

//sorting the names 

let sorted = true;
const sortNameOrder = () => {
  const sortedNames = results.sort((a,b) => a.name.localeCompare(b.name))
  console.log(sortedNames)
  titleMain.innerHTML = ""
  if (sorted){
    sortedNames.forEach( user => 
      titleMain.innerHTML += userCard(user))
      sorted = false;
  } else {
    sortedNames.reverse().forEach( user => 
      titleMain.innerHTML += userCard(user))
      sorted = true;
  }
}


