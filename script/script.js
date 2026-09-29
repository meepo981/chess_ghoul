var divSquare = '<div id="s$coord" class="square $color"></div>';


$(function(){
    addSquare();
})

function addSquare()
{
    $('.board_chess').html('');
    for (var coord = 0; coord < 64; coord++)
        $('.board_chess').append(divSquare
                .replace('$color',
                    isBlackSquareAt(coord) ? 'black' : 'white'));
}

function isBlackSquareAt(coord)
{
    return (coord % 8 + Math.floor(coord / 8)) % 2;
}