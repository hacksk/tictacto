var a = 'x';

var myarray = new Array(3);
for (i = 0; i < 3; i++)
    myarray[i] = new Array(3);

function reply_click(clicked_id) {
    var toc = document.getElementById(clicked_id);
    if (toc.innerHTML == 'x' || toc.innerHTML == 'o') {
        alert("click empty box");

        console.log(toc);
        console.log(document.getElementById('11'))
    }
    else {
        toc.innerHTML = a;
        tictoc(toc);
        if (a == 'x') {
            a = 'o';

        }
        else {
            a = 'x';

        }
    }
    tictoc(toc);
}

function tictoc(t) {
    var t;
    myarray[0][0] = document.getElementById('11');
    myarray[0][1] = document.getElementById('12');
    myarray[0][2] = document.getElementById('13');
    myarray[1][0] = document.getElementById('21');
    myarray[1][1] = document.getElementById('22');
    myarray[1][2] = document.getElementById('23');
    myarray[2][0] = document.getElementById('31');
    myarray[2][1] = document.getElementById('32');
    myarray[2][2] = document.getElementById('33');
    if (t == myarray[0][0] || t == myarray[0][2] || t == myarray[1][1] || t == myarray[2][0] || t == myarray[2][2]) {

        if (myarray[0][0].innerHTML == myarray[1][1].innerHTML && myarray[1][1].innerHTML == myarray[2][2].innerHTML && myarray[0][0].innerHTML != '_') {
            alert(a + ' won!');
            location.reload();
        } else if (myarray[2][0].innerHTML == myarray[1][1].innerHTML && myarray[1][1].innerHTML == myarray[0][2].innerHTML && myarray[2][0] != '_') {
            alert(a + ' won!');
            location.reload();
        }
    }
    for (x = 0; x < 3; x++) {
        if (myarray[x][0].innerHTML == myarray[x][1].innerHTML && myarray[x][0].innerHTML == myarray[x][2].innerHTML && myarray[x][0].innerHTML != '_' && myarray[x][1].innerHTML != '_' && myarray[x][2].innerHTML != '_') {
            alert(a + ' won!');
            location.reload();
            console.log(myarray[x][0].innerHTML);
        } else if (myarray[0][x].innerHTML == myarray[1][x].innerHTML && myarray[0][x].innerHTML == myarray[2][x].innerHTML && myarray[0][x].innerHTML != '_' && myarray[1][x].innerHTML != '_' && myarray[2][x].innerHTML != '_') {
            alert(a + ' won!');
            location.reload();
            console.log(myarray[x][0].innerHTML);
        }
    }
}
