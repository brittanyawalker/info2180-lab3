onload = () => {
    let board = document.getElementById("board");

    let x = 0;
    console.log(board);
    while(x < board.children.length) {
        board.children[x].className = 'square';
        x++;
    }  
}