function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("Enter your number");
    alert(`Computher number is: ${randomNum} and your number is ${userInput}`);    
}

export default handleClick;