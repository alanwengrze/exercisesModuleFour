
let numberOne = prompt("Write the first number:")
let numberTwo = prompt("Write the second number:")
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let add = numberOne + numberTwo
let subtract = numberOne - numberTwo
let multiply = numberOne * numberTwo
let divide = numberOne / numberTwo

alert(`The add between ${numberOne} and ${numberTwo} is: ${add}`)
alert(`The subtraction between ${numberOne} and ${numberTwo} is: ${subtract}`)
alert(`The multiplication between ${numberOne} and ${numberTwo} is: ${multiply}`)
alert(`The division between ${numberOne} and ${numberTwo} is: ${divide.toFixed(2)}`)

if(add%2 == 0){
  alert(`The add between ${numberOne} and ${numberTwo} is even!`)
}else{
  alert(`The add between ${numberOne} and ${numberTwo} is odd!`)
}

if(numberOne === numberTwo){
  alert(`You wrote ${numberOne} and ${numberTwo}, they are the same!`)
}else{
  alert(`You wrote ${numberOne} and ${numberTwo}, they are different!`)
}