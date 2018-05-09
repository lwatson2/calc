clear = document.getElementById("clear")
equal = document.getElementById('equal')
displayNum = document.getElementById('displayNum')

let el = document.getElementById('numbers').childNodes
for(let i=0; i < el.length; i++)
el[i].addEventListener('click', getNum)


               
let op = document.getElementById('operators').childNodes                                     
for(let i=0; i < op.length; i++)
	op[i].addEventListener('click', getValue)

equal.addEventListener('click', operate)
clear.addEventListener('click', clears)
function add(val){
	console.log(val)
	let c =  val.reduce((sum, total) => +sum + +total, 0)
	displayNum.innerHTML = c
}
function subtract(val){
	let c = val.reduce((sum, total) =>  +sum - +total)
	displayNum.innerHTML = c 
}
function multiply(val){
	let c = val.reduce((sum, total) =>  +sum * +total)
	displayNum.innerHTML = c
}
function divide(val){
	let c = val.reduce((sum, total) =>  +sum / +total)
	displayNum.innerHTML = c 
}




 	function getValue(event){
 		
 displayNum.innerHTML = displayNum.innerHTML += this.innerHTML
 let newValue = document.getElementById('displayNum').innerHTML
 
 
 	}

 	function getNum(event){
 		
 		displayNum.innerHTML = displayNum.innerHTML += this.innerHTML
 		let newNum = document.getElementById("displayNum").innerHTML
 		


}


function clears(){
	document.getElementById('displayNum').innerHTML = ""
}
function operate(){
		

		let numb = displayNum.innerHTML
		//.match(/\d/g)
		
		console.log(numb)
		let oper =displayNum.innerHTML
		//.match(/[+*\/-]/g)
		console.log(oper)
		if(displayNum.innerHTML.match(/[*]/g) ){
			newArray = numb.split('*')
			multiply(newArray)
			}
		if(displayNum.innerHTML.match(/[/]/g)){
			newArray = numb.split('/')
			divide(newArray)
		}
		if(displayNum.innerHTML.match(/[+]/g)){
			newArray = numb.split('+')
			add(newArray)
		}
		if(displayNum.innerHTML.match(/[-]/g)){
			newArray = numb.split('-')
			subtract(newArray)
		}
}
                                  