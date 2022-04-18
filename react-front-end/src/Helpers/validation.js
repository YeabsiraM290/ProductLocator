function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

function Validatephonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.match(phoneno)){
      return true;
        }
      else
        {
    
        return false;
        }
}

function ValidateLength(min_len,max_len, value){

    if(value.length < min_len){

        return [false,"Should not be less than ".concat(min_len).concat(" characters")]
    }

    else if (value.length> max_len){

        return [false,"Should not be greater than ".concat(max_len).concat(" characters")]
    }

    else{

        return [true]
    }

}

function ValidatePassword(inputtxt) 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.match(decimal)) 
{ 

return true;
}
else
{ 

return false;
}
} 



export {ValidateEmail, Validatephonenumber, ValidateLength, ValidatePassword}
