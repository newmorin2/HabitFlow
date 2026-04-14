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

const button = document.querySelector('button')
function populate(){
    const div = document.getElementById('generated')
    const h1 = document.getElementById('new')
    h1.textContent = 'hello'
    div.append(h1)
}
button.addEventListener('click',populate)  
