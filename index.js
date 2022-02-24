const container = document.querySelector('.container');
const butt = document.querySelector('.butt');



function gridbox(sqrs,col,row) { //Creates the required number of divs and styles into appropriate gridboxes
    for (let i = 0; i<sqrs; i++) {
    const div = document.createElement('div');
    div.classList.add('blocks');
    div.setAttribute('id', 'div'+i);
    div.textContent =  '';
    container.appendChild(div);
    container.style.gridTemplateColumns = `repeat(${col},1fr)`;
    container.style.gridTemplateRows = `repeat(${row},1fr)`;
    }
}
gridbox(256,16,16);



function eve() { //listens for mouse any div(gridbox) and changes the class to indicate color change
    function change(x){
        document.getElementById('div'+x).className = 'hovered';
    }
    let num = container.children.length;
    for(let i = 0; i<num;i++){
        let c = 'cross';
        let  may = c + i;
        may = document.getElementById('div'+i);
        may.addEventListener('mouseover',function(){change(i);})
    }
}






function stop() {// takes user desired grids,clears the previous grid and calls the div creator function with the user input as parameters
    var side = prompt('Desired number of squares per side below 90?');
    side = Number(side);
    var input= side * side;
    /*for(let i = 0;i<256;i++){ //first problem: the 256 here has to be the input variable //first trial
        const div = document.querySelector('.blocks');
        container.removeChild(container.firstElementChild);
    }*/
    var num = container.children.length
    for(let i =0;i<num;i++){
        if(container.hasChildNodes()){
            container.removeChild(container.children[0]);
        }
    }
    gridbox(input,side,side);
}











container.addEventListener('mouseover',eve); //listens for any movement over the container div and calls the functions
butt.addEventListener('click',stop); 
 