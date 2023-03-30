const form = document.querySelector("#form");
const campos = document.querySelectorAll(".required")
const spans = document.querySelectorAll(".span-required")
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const celularRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/


form.addEventListener("submit", (event) =>{
  event.preventDefault();
  // Tudo preenchido corretamente
  isValidFirstName();
  isValidLastName();
  isValidEmail();
  isValidNumberPhone();
  isValidPassword();
  isConfirmPassword();
  isValidGenero();

});


//função ERRO
function SetError(index) {
  campos[index].style.border = '3px solid #E30600';
  spans[index].style.display = 'block';
}

function RemoveError(index) {
  campos[index].style.border = '3px solid #47FA67';
  spans[index].style.display = 'none';
}


// Validate FirstName
function isValidFirstName() {
  if(campos[0].value.length < 3) 
  {
    SetError(0);
  
   }
    else
    {
    RemoveError(0);
  
   }
}

// Validate LastName
function isValidLastName() {
  if(campos[1].value.length < 3) 
  {
    SetError(1);
   }
    else
    {
      RemoveError(1);
   }
}

// função validação de email
function  isValidEmail(email) {
  if(!emailRegex.test(campos[2].value))
  {
      SetError(2);
  }
  else
  {
      RemoveError(2);
  }
    
    
}

// função validação NÚMERO DE CELULAR
function isValidNumberPhone (celular) {

  if (!celularRegex.test(campos[3].value)) {

    SetError(3);
  
  } else {
    RemoveError(3);
  }
}

//função validação de senha
function isValidPassword() {

    if (campos[4].value.length < 8) {
        SetError(4);
        
    } else {
      RemoveError(4);
      isConfirmPassword();
    }
}

//função confirma senha
function isConfirmPassword() {
  if (campos[4].value == campos[5].value && campos[5].value.length >= 8) {
    RemoveError(5);
    
  } else {
    SetError(5);

    
  }

}

//função validation gender-buttons 
function isValidGenero() {
  var valid = false;
  var x = document.form.genero;

  for(var i=0; i<x.length; i++){
    if (x[i].checked) {
      valid = true;
      break
      
    }
  }

  if (valid) {
    RemoveError(6);

    
  }
  else{
    SetError(6);

  


  }


}
