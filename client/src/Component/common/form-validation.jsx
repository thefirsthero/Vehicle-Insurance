import React from 'react';

const formValidation = (data) => {
    const {user_email, user_password} = data;
    if (user_email === null || user_email === ""){  
        alert("Email can't be blank"); 
        return false;
    } else if(user_password.length < 6){
        alert("Password must be at least 6 characters long.");
        return false;
    }
    return true;
}

export default formValidation;