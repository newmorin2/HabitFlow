function displayGreeting(){
    let hour = 10;
    message = ''
    if(hour < 12){
        return message = 'Good Morning'
    }else if(hour < 18){
        return message = 'Good Afternoon'
    }
    else{
        return 'Good Evening'
    }
}

test("displays the day to the user", () =>{
    const hour = '10';
    const result = displayGreeting(hour)
    expect(result).toContain('Good Morning')
})