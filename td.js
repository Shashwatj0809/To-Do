const IT= document.getElementById("inputText");
console.log(IT);
const PT= document.getElementsByClassName("plannedTask");
console.log(PT);
const AB= document.getElementsByClassName("add-button")
console.log(AB);

AB[0].addEventListener('click',function(){
    if(IT.value===''){
        alert("Please enter the task to be performed")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=IT.value;
        console.log(li.innerHTML);
        i=0;
        PT[i].appendChild(li);
        
        let span=document.createElement("span");
        span.innerHTML='&#x2716';
        console.log(span.innerHTML);
        li.appendChild(span);

        i++;
    }
    IT.value='';


})
PT[0].addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
}, false)

