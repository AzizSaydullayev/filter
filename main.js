const __API = "https://jsonplaceholder.typicode.com/users";

fetch(__API)
  .then(res => res.json())
  .catch(err => console.log(err))
  .then(data => {
  const search = document.getElementById("search")

  render(data)

  search.addEventListener("input", e=>{
  let inputValue=e.target.value.toLowerCase()

  const result=data.filter(item=>
    item.name.toLowerCase().includes(inputValue)
  )
  render(result)
  })
  })

let row = document.querySelector(".row");

function render(array) {
  row.innerHTML = "";

  array.forEach(item => {
    let card = document.createElement("div");
    card.classList.add("card");

    let ID = document.createElement("h1");
    ID.textContent = item.id;

    let name = document.createElement("h3");
    name.textContent = item.name;

    let username = document.createElement("h4");
    username.textContent = item.username;

    let email = document.createElement("p");
    email.textContent = item.email;

    card.append(ID, name, email, username);

    row.append(card);   
  });
}


const toggleButton = document.querySelector('.toggle-button');
const body = document.body;

const savedMode = localStorage.getItem('theme') || 'light-mode';
body.className = savedMode;

toggleButton.addEventListener('click', () => {
    const currentMode = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    const newMode = currentMode === 'light-mode' ? 'dark-mode' : 'light-mode';
    body.className = newMode;

    localStorage.setItem('theme', newMode);
});