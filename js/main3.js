// let a = [1, 5, 7, 17, 'hi'];
// console.log(a.indexOf(9));

// let b = i => {
//     if (a.indexOf(i) !== -1) {
//         console.log(true)
//     } else{ 
//         console.log(false)
//     }
// }
// b(17);
// b('hi')
// b('5')
////////////////////////////////////////////////////////////

// let c = a.map((item, index) => {
//     if (index > 2) {
//         return item*2
//     }
// })
// console.log (c)

// let d = a.filter((item, index) => {
//     if (item > 5) {
//         return false
//     } else {
//         return true
//     }
// })
// console.log (d)
///////////////////////////////////////////////////////////////
let chess = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
];

function draw() {
    let out = '';
    let m = 0;
    for( let i = 0; i < chess.length; i++) {
        let arr = chess[i];
        for (let b = 0; b < arr.length; b++) {
            if (m % 2 == 0) {
                out += `<div class="chess-block" data-x="${b}" data-y="${i}"></div>`;   
            } else {
                out += `<div class="chess-block bg-black" data-x="${b}" data-y="${i}"></div>`; 
            }
            m++;
        }
        m++;
    }
    document.querySelector('.field').innerHTML = out;
    document.querySelectorAll('.chess-block').forEach(element => {
        element.addEventListener('click', horse);
    });
}
draw();
function horse() {
    console.log(this);
    document.querySelectorAll('.chess-block').forEach(element => {
        element.classList.remove('green');
        element.classList.remove('active');
    })
    let x = this.dataset.x;
    let y = this.dataset.y;
    this.classList.add('green')
    if (+x + 2 < 8 && +y + 1 < 8) {
        document.querySelector(`.chess-block[data-x="${+x+2}"][data-y="${+y+1}"]`).classList.add('active');
    }
    if (+x + 2 < 8 && +y - 1 >= 0) {
        document.querySelector(`.chess-block[data-x="${+x+2}"][data-y="${+y-1}"]`).classList.add('active');
    }
    if (+x - 2 >= 0 && +y + 1 < 8) {
        document.querySelector(`.chess-block[data-x="${+x-2}"][data-y="${+y+1}"]`).classList.add('active');
    }
    if (+x - 2 >= 0 && +y - 1 >= 0) {
        document.querySelector(`.chess-block[data-x="${+x-2}"][data-y="${+y-1}"]`).classList.add('active');
    }

    if (+x + 1 < 8 && +y + 2 < 8) {
        document.querySelector(`.chess-block[data-x="${+x+1}"][data-y="${+y+2}"]`).classList.add('active');
    }
    if (+x + 1 < 8 && +y - 2 >= 0) {
        document.querySelector(`.chess-block[data-x="${+x+1}"][data-y="${+y-2}"]`).classList.add('active');
    }
    if (+x - 1 >= 0 && +y + 2 < 8) {
        document.querySelector(`.chess-block[data-x="${+x-1}"][data-y="${+y+2}"]`).classList.add('active');
    }
    if (+x - 1 >= 0 && +y - 2 >= 0) {
        document.querySelector(`.chess-block[data-x="${+x-1}"][data-y="${+y-2}"]`).classList.add('active');
    }
}