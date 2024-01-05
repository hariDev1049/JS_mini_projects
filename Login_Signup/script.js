const loginButton = document.getElementById('login')
const regButton = document.getElementById('register')
let loginForm;
let errorMessage = '';

loginButton.addEventListener('click', (e)=>{
    e.preventDefault();
    // validateLogin();
    e.target.style.backgroundColor = '#FBAE3C';
    regButton.style.backgroundColor = 'aliceblue';
    document.getElementById('reg_card').style.display='none';
    document.getElementById('log_card').style.display = 'flex';
})

regButton.addEventListener('click',(e)=>{
    e.preventDefault();
    e.target.style.backgroundColor = '#FBAE3C';
    loginButton.style.backgroundColor = 'aliceblue';
    document.getElementById('log_card').style.display = 'none';
    document.getElementById('reg_card').style.display='flex';
    document.getElementById('reg_card').style.backgroundImage ="url('/Auth_System/images/card_flip.svg')";
})

// const userName = 'admin';
// const password = 'admin';

 
// function validateLogin(){
//     loginForm = document.getElementById('login_form');
//     loginForm.addEventListener('submit',(e)=>{
//         e.preventDefault();
//         const inputPassword = Array.from(e.target.children).filter((element)=> element.type === 'text' || element.type === 'password')
//          inputPassword.forEach((element) => {
//             if(element.value === ''){
//                 errorMessage = 'UserName and Password is Mandatory..!'
//                 document.querySelector('#error').innerHTML = errorMessage;
//                 return;
//             }
//             else{
//                 document.querySelector('#error').innerHTML = '';
//             }
//          })
      
//     })
// }

// function validateField(element){
//     if(element.type === 'text' && element.value === ''){
//         errorMessage = 'User name is mandatory';
//         document.querySelector('#error').innerHTML = errorMessage;
       
//     }
//     else{
//         errorMessage = '';
//         document.querySelector('#error').innerHTML = errorMessage;
//     }
    
    
// }
