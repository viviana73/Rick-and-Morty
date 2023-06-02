const regexEmail =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexPassword = /\d/


export const validation= (data) => {
    const errors = {}
   if(!regexEmail.test(data.email))errors.email = "E-mail";
   if(!data.email)errors.email = "Campo Obligatorio";
   if(data.email.length > 35) errors.email = "Puede tener hasta 35 caracteres";
   if(!regexPassword.test(data.password)) errors.password = "La contraseña debe tener caracteres y numeros";
   if(data.password.length < 6 || data.password.length > 10) errors.password = "La contraseña debe tener entre 6 y 10 caracteres";

   return errors;
}