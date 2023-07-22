let nametxt=document.getElementById('nameText');
let emailtxt=document.getElementById('emailText');



// let nameValid=false;
// let emailValid=false;


// nametxt.addEventListener('blur',()=>{
//     if(nametxt.value==""){
//         nametxt.classList.remove('is-invalid');
//         nameValid=true;
//         document.getElementById('btn-send').disabled=false;
//     }
//     else{
//         nametxt.classList.add('is-invalid');
//         nameValid=false;
//         document.getElementById('btn-send').disabled=true;
//     }
// })

// emailtxt.addEventListener('blur',()=>{
//         let regx=/^([_\-a-zA-Z0-9]+)@([_\-a-zA-Z0-9]+)\.([\.a-zA-Z]){3,7}$/;
//         //let regx=/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
//         let str=emailtxt.value;
//         if(regx.test(str)){
//             emailtxt.classList.remove('is-invalid');
//             emailValid=true;
//             document.getElementById('btn-send').disabled=false;
//         }
//         else{
//             emailtxt.classList.add('is-invalid');
//             emailValid=false;
//             document.getElementById('btn-send').disabled=true;
//         }
// })