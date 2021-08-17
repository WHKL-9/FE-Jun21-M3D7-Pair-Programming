const userCard = user => `<div class="card">
    <div class="card-body">
      <h5 class="card-title">${user.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    `
    const getUser = async () => {
    try {
      // const artistId = new URLSearchParams(location.search).get("userId")

      const resp = await fetch("https://jsonplaceholder.typicode.com/users")
      const user = await resp.json()
      console.log(user)
      const titleMain = document.querySelector(".container")
      titleMain.innerText = ""
      user.forEach(info => {
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


/* } catch (err) {
  console.log(err)
  container.innerHTML = ""
  const errDiv = document.getElementById("error")
  errDiv.classList.add("text-danger")
  errDiv.innerText = err.message
} finally {
  console.log("here")
}
}

  /* <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */