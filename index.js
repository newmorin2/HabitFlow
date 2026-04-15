function showGreeting(){
    const d = new Date()
    const hour = d.getHours()

    let message = ''
    if(hour < 12){
        message = 'Good Morning'
    }else if(hour < 18){
        message = 'Good Afternoon'
    }
    else{
        message = 'Good Evening'
    }
    document.getElementById('greeting').textContent = message
}
showGreeting()

function showDay(){
    const d = new Date()
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const months = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"]
    const number  = d.getDate()
    const dayName = days[d.getDay()]
    const monthName = months[d.getMonth()]
    document.getElementById('date').textContent = `${dayName}, ${monthName} ${number}`
}
showDay()

const fallbackQuotes = [
  "Stay consistent. Results will come.",
  "Small steps every day lead to big results.",
  "Discipline beats motivation.",
  "Progress, not perfection.",
  "Keep going. You're building something great."
];

const button = document.getElementById("addHabit");
const cardContainer = document.querySelector(".cardContainer");
const input = document.getElementById("habitInput");
const quote = document.querySelector('#quote')
const qouteContainer = document.querySelector('.qouteContainer')

button.addEventListener("click", function () {
  let habit = input.value;
  
  const card = document.createElement("div");
  card.classList.add("habitCard");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const text = document.createElement("span");
  text.innerText = habit;

  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = "🗑️"

  checkbox.addEventListener("change", function () {
    if(checkbox.checked){
        text.style.opacity = '0.5'
    } else {
      text.style.textDecoration = "none";
      text.style.opacity = "1";
    }
  });

  deleteBtn.addEventListener('click',function(){
    card.remove()
  })

  fetch("https://api.quotable.io/random")
  .then(res => res.json)
  .then(data =>{
    quote.innerText = `${data.content} - ${data.author}`
  })
  .catch(() => {
    const random = Math.floor(Math.random() * fallbackQuotes.length)
    quote.innerText = fallbackQuotes[random]
  })

  card.appendChild(checkbox);
  card.appendChild(text);
  card.appendChild(deleteBtn)
  cardContainer.prepend(card);

  // Clear input
  input.value = "";
});
