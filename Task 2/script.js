let form=document.getElementById("form")
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const th= document.querySelectorAll('th');
    const input=document.querySelectorAll("input:not([type ='submit'])");
    for(var i=0;i<th.length;i++){
        console.log(th[i].innerText + " : " + input[i].value)
    }
})