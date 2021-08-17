const userCard = user => `<div class="card col col-sm-6 col-md-4 col-lg-2">
    <div class="card-body">
      <h5 class="card-title user-name">${user.name}</h5>
      <p class="card-text">Username: ${user.username}</p>
      <p class="card-text-secondary">Email: ${user.email}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    `

let names = []


    window.onload = () => {

  getUser()
}
    const getUser = async () => {
    try {
      // const artistId = new URLSearchParams(location.search).get("userId")

      const resp = await fetch("https://jsonplaceholder.typicode.com/users")
      const user = await resp.json()
      console.log(user)
      const titleMain = document.querySelector(".container .row")
      titleMain.innerText = ""
      user.forEach(info => {
        // console.log(track)
        titleMain.innerHTML += userCard(info)
      
        names.push(user.name)
      })
      console.log(names)

      console.log(titleMain)
      // const followers = document.getElementById("followers")
      // followers.innerText = user.nb_fan + " followers"

    } catch (err) {
      console.log(err)
    }
}

function onlyNames ( ) {
    const getInputs = document.querySelector(".user-name")
    titleMain.innerText = ""
    titleMain.createElement("ul")
    titleMain.classList.add("list-group")
    getInputs.forEach(name => {
    `<li class="list-group-item">${name}</li>
    `}
    )
  }



function getSelectedInput() {
  //get onclick value 
  document.querySelector(".user-info").addEventListener("click",replaceInput)
}

function replaceInput(event){
  //selected input container
  const getInput =  document.querySelector(".selected-input-value")
  //get the value 
  getInput.innerHTML = event.currentTarget.value
  return getInput
  // return getInput

}

