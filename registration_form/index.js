const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//Function to show error fields
function showError(input, message){
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;
}

//Function to show green outline for fields
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Function to check for null Inputs
function noInput(inputArr){
   inputArr.forEach(function(input){
        if(input.value === ''){
            showError(input, `${getFieldname(input)} is required`);
        }else{
            showSuccess(input);
        }
   });
}

//Function to get the field names
function getFieldname(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Validate email
function validateEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim().toLowerCase())){
        showSuccess(input);
    }else{
        showError(input, 'Invalid email');
    }
}

//Function to check the length of the username and password
function checkLength(input, min, max){
    if(input.value.trim().length < min){
        showError(input, `${getFieldname(input)} should be at least ${min} characters`);

    }else if(input.value.trim().length > max){
        showError(input, `${getFieldname(input)} should be less than ${max} characters`);
    }else{
        showSuccess(input);
    }

}

//Check to see if the Password matches
function passwordCheck(input1, input2){
    if(input1.value === input2.value){
        showSuccess(input);

    }else{
        showError(input2, 'Password does not match');
    }

}

//Event listener for the Submit button
form.addEventListener('submit', function(e){
    e.preventDefault();
    noInput([username, email, password, password2]);
    validateEmail(email);
    checkLength(username, 4, 18);
    checkLength(password, 8, 25);
    passwordCheck(password, password2);
});
