const API = 'https://randomuser.me/api/?results=9'
const user = document.querySelector('.user-cards')
const refreshBtn = document.querySelector('.refresh-btn')
const formInput = document.querySelector('.search-input input')
const clearBtn = document.querySelector('.clear-btn')
const center = document.querySelector('.center')

// Api function
let userData = []
async function getData(){
center.classList.toggle('active')
user.innerHTML = ""
let url = await fetch(API);
let data = await url.json();
userData = data.results;
showUser(data.results)
center.classList.toggle('active')
}

getData()

// ShowUser function
function showUser(item){
    user.innerHTML = ""
    item.forEach((data) =>{
        user.innerHTML += `<div class = "user-card">
        <i class="fas fa-trash"></i>
        <img class="user__img" src="${data.picture.large}"/>
        <div class="user__name">
          <i class="fa-solid fa-id-card"></i>
          <span class= 'fullname'>${data.name.title} ${data.name.first} ${data.name.last}</span>
        </div>
        <div class="user__year">
          <i class="fa-solid fa-cake-candles"></i>
          <span>${data.dob.age}</span>
        </div>
        <div class="user__location">
          <i class="fa-solid fa-location-dot"></i>
          <span>${data.location.country}</span>
        </div>
        <div class="user__gender">
          <i class="fa-solid fa-person"></i>
          <span>${data.gender}</span>
        </div>
        </div>`
    })
}
// ShowUser function

// ClearBtn function
clearBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    user.innerHTML = ""
})
// ClearBtn function

// Form Function
formInput.addEventListener('input', () =>{
    let filtered = userData.filter((info) =>{
        if(info.name.title.includes(formInput.value) || info.name.first.includes(formInput.value) || info.name.last.includes(formInput.value)){
            return info
        }
    })

    showUser(filtered)
})
// Form Function

// Refresh Btn
refreshBtn.addEventListener('click', (e) =>{
    getData()
})
// Refresh Btn

// Window Styles
window.addEventListener('click', (e)=>{
    if(e.target.className == 'fas fa-trash'){
        e.target.parentElement.remove()
    }
})
// Window Styles