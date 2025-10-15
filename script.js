const multiply = () => {
    console.log(firstNumber.value);
    console.log(secondNumber.value);
    const answer = firstNumber.value * secondNumber.value
    console.log(answer);
    showResult.innerHTML = answer
    
}

const divide = () => {
    console.log(firstNumber.value);
    console.log(secondNumber.value);
    const answer = (firstNumber.value / secondNumber.value).toFixed(2)
    console.log(answer);
    showResult.innerHTML = answer
    
}

const add = () => {
    console.log(Number(firstNumber.value));
    console.log(Number(secondNumber.value));
    const answer = Number(firstNumber.value) + Number(secondNumber.value);
    console.log(Number(answer));
    showResult.innerHTML = answer
    
}

const subtract = () => {
    console.log(firstNumber.value);
    console.log(secondNumber.value);
    const answer = Number(firstNumber.value) - Number(secondNumber.value)
    console.log(Number(answer));
    showResult.innerHTML = answer
    
}