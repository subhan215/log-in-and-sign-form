 function Password(e){
    var input = document.getElementById("pass");
   switch (input.type) {
       case "password":
        e.className = "far fa-eye-slash";
        input.type = "text";
           break;
        case "text":
        e.className = "far fa-eye";
        input.type = "password";
   
       default:
           break;
   }
}


    
 

