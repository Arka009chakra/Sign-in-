async function fun(){

    let email=document.getElementById("t1").value;
    let password=document.getElementById("t2").value;
    let response= await fetch('http://localhost:5000/login',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify({
            email,password
        })
         
      
    }).then(function(response){
        return response.json();
    }).then(function(data){
    alert(data.message);
    }).catch(function(){
        alert("incorrect login credentials");
    })
    
}
