(() => {
"use strict";

const username = document.querySelectorAll('input')[0];
const password = document.querySelectorAll('input')[1];
const button   = document.querySelector('button');

username.addEventListener('click', (e) => {
    username.style.border = '1px solid #cbcbcb';
    username.placeholder = '';
})
password.addEventListener('click', (e) => {
    password.style.border = '1px solid #cbcbcb';
    password.placeholder = '';
})


button.addEventListener('click', (e) => {

    if(!username.value) {
        username.style.border = '1px solid #e74c3c';
        username.placeholder = 'Required';
    }
    if(!password.value) {
        password.style.border = '1px solid #e74c3c';
        password.placeholder = 'Required';
    }

    if(username.value && password.value) {
        username.value = '';
        password.value = '';
        alert('Done!');
    }
})

})()
