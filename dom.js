//console.log(document.URL)
//console.log(document.title)
//document.title="Rajnish"

//console.log(document.all[2])
console.log("hii");
//var head1=document.getElementById('Header');
//console.log(head1);

//head1.style.backgroundColor="red"

//var x = document.getElementById(Header1);   // Get the element with id="demo"
//x.style.color = "red";

//var y=document.getElementsByClassName(list-group)
//y.style.color="red"



function changeStyling()
{
    var element=document.getElementsByClassName("items");
    for (var x=0;x<element.length;x++)
    if(x%2==0){
    {
        element[x].style.backgroundColor="green"
        element[x+1].style.fontWeight="bold"
    }
}
}
