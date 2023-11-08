export const validationUserData = (user)=>{

    let errors= {} ;

    if(user.name.trim()==''){
        errors.name=' username required'
    }else if(user.name.trim().length <3){
        errors.name=' username must be at least 3 characters';
    }
    if(user.email.trim()==''){
        errors.name=' email required'
    }else if(user.email.trim().length <5){
        errors.name=' email must be at least 5 characters';
    }
    if(user.password.trim()==''){
        errors.name=' password required'
    }else if(user.password.trim().length <5){
        errors.name=' password must be at least 5 characters';
    }
    return errors;
}