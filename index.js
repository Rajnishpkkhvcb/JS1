console.log('helloword')

a=12
b=45
temp=a
a=b
b=temp

console.log(a)
console.log(b)



x=15
y=22

x=x+y

y=x-y
x=x-y

console.log(x,y)



let name='Yash Prasad'
let age=25
let address= "Prestige Falcon City, Bangalore"

personalDetails =('my name is',name,',age is',age,',address is',address)



var str = "How are you, doing today?";
var res = str.split(",");
console.log(res)


const num= new Array(1,2,3,4)
num[3]= "new"
num.push('pushed')
num.unshift('first')
num.pop()

console.log(num.indexOf(3));
console.log(num)


function myFunction(arr,n) {
	if(n==1){
		max=arr[0]
        min=arr[1]
        return max,min

	}

	if(arr[0]>arr[1]){
		max=arr[0]
		max=arr[1]


	}
	else{
		max=arr[1]
        min=arr[0]
	}

	for (i = 2; i>=n; i++) {

		if(arr[i]>max)
            max=arr[i]
        else arr[i]<min
            min=arr[i]
  


}
 return max,min 
}







const person={
	firstName:"Rajnish",
	lastName:'Pal',
	age:22,
	hobbies:['music','movies','sports'],
	address:{

			street:'vasai',
			city:'Mumbai',
			state:'Maharashtra'
	}


}


console.log(person.hobbies[1])
console.log(person.address.state)

const {firstName,lastName} =person

console.log(firstName)

const {}=person
console.log(address)


const todos=[
{
id:1,
text:"take out trash",
iscompleted:true
},
{
id:2,
text:"Meeting wid boss",
iscompleted:true
},	
{
id:3,
text:"appointment",
iscompleted:true
}
]




console.log(todos[1].text)





function convertTemp(tempValue,Unit){
	return 273+tempValue+Unit
}

console.log(convertTemp(35,'K'))










class Student
{
	constructor(firstName,rollNo,sex,dob){
	this.sex=sex;
	this.firstName=firstName;
	this.lastName=lastName;
	this.dob=dob;

	}



	get BirthYear()
	{
		return this.dob.getFullYear();
	}

	get fullName(){
		return '$(this.firstName)$(this.lastName)'
	}
}



const Student1=new Student('Rajnish',30,'M','20-03-1998')
const Student2=new Student('Rajnish2',31,'M','30-03-1998')

console.log(Student2.getBirthYear());
console.log(Student1);