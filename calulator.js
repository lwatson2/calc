let numb = []
let oper1 = []
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
	
	let c = val.reduce((sum, total) => +val[0] + +val[1])
	let d = c.toString()
	val.splice(0, 2)
	val.unshift(d)
		
	console.log(val)
	//console.log(numb)
}
function subtract(val){
	let c = val.reduce((sum, total) =>  +val[0] - +val[1])
	let d = c.toString()
	val.splice(0, 2)
	val.unshift(d)
	console.log(val)
}
function multiply(val){
	let c = val.reduce((sum, total) =>  +val[0] * +val[1])
	let d = c.toString()
	val.splice(0, 2)
	val.unshift(d)
	console.log(val)
}
function divide(val){
	let c = val.reduce((sum, total) =>  +val[0] / +val[1])
	let d = c.toString()
	val.splice(0, 2)
	val.unshift(d) 
	console.log(val)
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
		

		let numb = displayNum.innerHTML.split(/[+*/\-]/g)
		//.match(/\d/g)
		
		console.log(numb)
		

		//.match(/[+*\/-]/g)
		
		let oper1 = displayNum.innerHTML.match(/[+*\/-]/g)
		console.log(oper1)
		for(let i = 0; i < oper1.length ; i++){
			if(oper1.includes('*')){
				multiply(numb)
				let index = oper1.indexOf('*')
				oper1.splice(index, 1)
				console.log(oper1)
			}
			if(oper1.includes('/')){
				divide(numb)
				let index = oper1.indexOf('/')
				oper1.splice(index, 1)
				console.log(oper1)
			}
			if(oper1.includes("+")){
				add(numb)
				let index = oper1.indexOf("+")
				oper1.splice(index, 1)
				console.log(oper1)

			}
			if(oper1.includes('-')){
				subtract(numb)
				let index = oper1.indexOf('-')
				oper1.splice(index, 1)
				console.log(oper1)
			}

		}
		display(oper1, numb)
	}
		function display(val,numb){
			if(  val.length === 0)
				displayNum.innerHTML = numb
		}