save_value.onclick=function(){
	localStorage.setItem("name",inp.value)
	localStorage.setItem("Password",pass.value)
}

del.onclick=function(){
	localStorage.remove(name)
}


var keys=object.keys(localStorage)
console.log(keys)