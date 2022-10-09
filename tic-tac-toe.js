onload = () => {
    let board = document.getElementById("board");
    let moveNum = 0;
    let state = ['', '', '',
                 '', '', '',
                 '', '', ''];
    let x = 0;

    while(x < board.children.length) {
        let square = board.children[x];
        square.classList.add('square');
        square.addEventListener('click', function(){
            if(moveNum % 2 == 0){
                square.innerHTML = "X";
                square.classList.add('X');
            }
            else{
                square.innerHTML = "O";
                square.classList.add("O");
            }
            moveNum = moveNum + 1;

        });
        square.addEventListener('mouseenter', function(){
            square.classList.add('hover');
        });

        square.addEventListener('mouseleave', function (){
            square.classList.remove('hover')
        });
        x++;
    } 
}

