
/*

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwAN9FSwWs1dCEXM6PLXKGFeJwgvEjFR5CyHKH_cJP3BXL7hlzgjjbsPVfOudnDJlUK2Q/exec'
            const form = document.forms['google-sheet']

    form.addEventListener('submit', e => {
        //conditions 
        //username = 1234 && email = s@gmail.com&&  password = 4321,
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                alert("Thank You For Contacting Us ...")
            })
            
            .catch(error => console.error('Error!', error.message))
        
           in the form tag 
"method="POST" name="google-sheet">
        

    })*/

   // alert("Hey this is working!");
   
   function run(){
    
var entry1 = document.getElementById("email1").value;
var  entry2= document.getElementById("pass2").value;


    if(entry1  == "s@gmail.com"  && entry2 ==  "4321" )
    
    {
        console.log(entry1);
        console.log(entry2);

        alert("You are logged in ...")


       location.href= "Home.html";


    }
 
    else if(
        entry1 == "" && entry2 ==  "4321" )
    {
        alert("Email cannot be empty ...");
    }

    else if(
        entry1 == "s@gmail.com" && entry2 == "" )
    {
        alert("Password cannot be empty...");
    }
    
    else if( entry1 != "s@gmail.com" && entry2 == "4321" )
    {
        alert("Please fill the correct Email ... ")
    }

     
    else if( entry1 == "s@gmail.com" && entry2 != "4321" )
    {
        alert("Please fill the correct Password ... ")
    }

     
    else if( entry1 != "s@gmail.com" && entry2 != "4321" )
    {
        alert("Please fill the correct details ... ")
    }

    else {
        alert(" Please fill the details first ...");
        
    }
}