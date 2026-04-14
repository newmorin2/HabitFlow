// const div = document.querySelector('#div')
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

