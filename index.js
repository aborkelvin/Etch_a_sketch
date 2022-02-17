const container = document.querySelector('.container');

for (let i = 0; i<256; i++) {
 const div = document.createElement('div');
 div.classList.add('blocks');
 div.setAttribute('id', 'div'+i);
 div.textContent = 'Hey I am '+ i;
 container.appendChild(div);
}
function change() {
    let check = document.getElementsByClassName('blocks');
    let length = document.getElementById('div4');
    
}
change();
