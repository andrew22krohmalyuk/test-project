(() => {
"use strict";

const username = document.querySelectorAll('input')[0];
const password = document.querySelectorAll('input')[1];
const button   = document.querySelector('button');

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
        if(username.value.length < 6){
            username.value = '';
            username.placeholder = 'Minimum 6 chars';
        } else if (password.value.length < 6) {
            password.value = '';
            password.placeholder = 'Minimum 6 chars';
        } else {
            username.value = '';
            password.value = '';
            alert('Done!');
        }
    }
})

username.addEventListener('click', (e) => {
    e.target.style.border = '1px solid #cbcbcb';
    e.target.placeholder = '';
})
password.addEventListener('click', (e) => {
    e.target.style.border = '1px solid #cbcbcb';
    e.target.placeholder = '';
})

})()
