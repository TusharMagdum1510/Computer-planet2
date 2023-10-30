function formvalidation(){
    let x = document.myform["sufn"].value;
    let y = x.length

    if(x == ""){
        document.getElementById("infn").innerHTML="First Name is empty."
        
    }
    else if(y < 2 || y > 15){
        document.getElementById("infn").innerHTML="First name length should be between 2 and 15." 
        
    }



    let z = document.myform["suln"].value;
    let w = z.length;

    if(z == ""){
        document.getElementById("inln").innerHTML="Last name is empty."
        
    }
    else if(w < 2 || w > 15){
        document.getElementById("inln").innerHTML="Last name length should be between 2 and 15."
        
    }


    let a= document.myform["sueml"].value;
    
    if(a==""){
        document.getElementById("inem").innerHTML = "Email is empty."
    }
    



    let u = document.myform["suunm"].value;
    let v = u.length;

    if (u == ""){
        document.getElementById("inun").innerHTML = "Username is empty."
        
        
    }
    else if(v < 4 || v > 15){
        document.getElementById("inun").innerHTML = "Username length shouldbe between 4 and 15."
        
    }


    

    let p = document.myform["sup"].value;
    let cp = document.myform["sucp"].value;
    // let pl = p.length;

    if( p == ""){
        document.getElementById("inconpass").innerHTML = "Password is empty."
        return false
    }
    else if(p != cp){
        document.getElementById("inconpass").innerHTML = "Confirm password does not match with Password."
        return false
    }

}


