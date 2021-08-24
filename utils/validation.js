export default function validationContactForm(values){
    let errors ={}
    // Email
    if(!values.email.trim()){
        errors.email = "Email is required"
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
    
    if(!values.name.trim()){
        errors.name = "Name is requiresd";
    }
    if(!values.subject.trim()){
        errors.subject = "Subject is requiresd";
    }
    if(!values.message.trim()){
        errors.message = "Message is requiresd";
    }
    return errors
}