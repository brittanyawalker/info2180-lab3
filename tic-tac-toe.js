onload = () => {
    let board = document.getElementById("board");
    let moveNum = 0;
    let state = ['', '', '',
                 '', '', '',
                 '', '', ''];
    let x = 0;

    while(x < board.children.length) {
        let square = board.children[x];
        square.className = 'square';
        square.addEventListener('click', function(){
            if(moveNum % 2 == 0){
                square.innerHTML = "X";
                square.className += " X";
            }
            else{
                square.innerHTML = "O";
                square.className += " O";
            }
            moveNum = moveNum + 1;
        });
        x++;
    } 
}

