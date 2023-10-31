export const ValidateCredentials = (email,password) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

// .test fxn checks if it return true or false

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(emailRegex===false){
        return "Email is not valid !"
    }
    else if(passwordRegex===false){
        return "Password is not strong !"
    }
    else{
        return null;
    }
};
