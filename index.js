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

const button = document.getElementById("addHabit");
const container = document.querySelector(".cardContainer");
const input = document.getElementById("habitInput");

button.addEventListener("click", function () {
  const habit = input.value;
  if (!habit || habit.trim() === "") return;

  const card = document.createElement("div");
  card.classList.add("habit-card");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const text = document.createElement("span");
  text.innerText = habit;

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      text.style.opacity = "0.5";
    } else {
      text.style.textDecoration = "none";
      text.style.opacity = "1";
    }
  });
  card.appendChild(checkbox);
  card.appendChild(text);

  container.prepend(card);

  // Clear input
  input.value = "";
});
