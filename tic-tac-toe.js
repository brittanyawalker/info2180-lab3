let state = ['1', '2', '3',
            '4', '5', '6',
            '7', '8', '9'];

onload = () => {
    let board = document.getElementById("board");
    let moveNum = 0;
    let x = 0;

    while(x < board.children.length) {
        let square = Array.from(board.children)[x];
        square.classList.add('square');
        square.addEventListener('click', function(){
            //console.log(Array.from(board.children).indexOf(square));
            if(moveNum % 2 == 0){
                square.innerHTML = "X";
                state[Array.from(board.children).indexOf(square)] = 'X';
                square.classList.add('X');
            }
            else{
                square.innerHTML = "O";
                state[Array.from(board.children).indexOf(square)] = 'O';
                square.classList.add("O");
            }

            checkWinState();

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

function checkWinState(){
    let win = false;
    let winner = '';

    if(state[0] == state[1] && state[1] == state[2]){
        win = true;
        if(state[0] == 'X'){
            winner = 'X';
        }else{
            winner = 'O';
        }
    } else if(state[0] == state[3] && state[3] == state[6]){
        win = true;
        if(state[0] == 'X'){
            winner = 'X';
        }else{
            winner = 'O';
        }
    }
    else if(state[2] == state[5] && state[5] == state[8]){
        win = true;
        if(state[2] == 'X'){
            winner = 'X';
        }else{
            winner = 'O';
        }
    }
    else if(state[1] == state[4] && state[4] == state[7]){
        win = true;
        if(state[1] == 'X'){
            winner = 'X';
        }else{
            winner = 'O';
        }
    }
    else if(state[2] == state[5] && state[5] == state[6]){
        win = true;
        if(state[2] == 'X'){
            winner = 'X';
        }else{
            winner = 'O';
        }
    }
    else if(state[3] == state[4] && state[4] == state[5]){
        win = true;
        if(state[3] == 'X'){
            winner = 'X';
        }else{
            winner = 'O';
        }
    }
    else if(state[6] == state[7] && state[7] == state[8]){
        win = true;
        if(state[6] == 'X'){
            winner = 'X';
        }else{
            winner = 'O';
        }
    }
    else if(state[0] == state[4] && state[4] == state[8]){
        win = true;
        if(state[0] == 'X'){
            winner = 'X';
        }else{
            winner = 'O';
        }
    }

    if(win == true){
        let statusDiv = document.getElementById('status');
        statusDiv.classList.add('you-won');
        if(winner == 'X'){
            statusDiv.innerHTML = "Congratulations! X is the Winner!";
        }else{
            statusDiv.innerHTML = "Congratulations! O is the Winner!";
        }
    }


}