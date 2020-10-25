'use strict'

// let div4 = document.querySelector('.four4');

// let men = {
//     'name': 'Alex',
//     'age': 19,
//     'id': 1245,
//     'year': function () {
//         let b = 2020 - this.age;
//         return b;
//     },
//     'sum': function() {
//         let s = 0;
//         for (let i = 0; i < this.m.length; i++) {
//                s = s + this.m[i];
//         }
//         return s;
//     }
// };

// console.log(men.id);
// let a = 'name';
// console.log(men[a]);
// console.log(men.year());
// men.m = [5, 10, 11, 17, 21]
// let mas = 'm';
// console.log(men[mas]);
// console.log(men.sum());
// for (let k in n) {
//     div4.innerHTML += `${k} --  ${n[k]} </br>`
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let goods = {
//     '1254' : {
//         'name' : 'банан',
//         'cost' : 50,
//         'img' : 'https://www.flaticon.com/svg/static/icons/svg/2990/2990510.svg',
//         'depository' : true,
//     },
//     '5973' : {
//         'name' : 'апельсин',
//         'cost' : 60,
//         'img' : 'https://www.flaticon.com/premium-icon/icons/svg/3137/3137032.svg',
//         'depository' : true,
//     },
//     '3498' : {
//         'name' : 'яблоко',
//         'cost' : 40,
//         'img' : 'https://www.flaticon.com/svg/static/icons/svg/3628/3628642.svg',
//         'depository' : true,
//     },
// }

// let shop = document.querySelector('.out');

// console.log(goods);

// let list = '';

// for (let key in goods) {
//     list += `<img width=50 src="${goods[key].img}"><br>название: ${goods[key].name}<br>  цена:${goods[key].cost}<br>наличие: ${goods[key].depository}<br> <p><hr></p>`
// }

// shop.innerHTML = list;
// shop.style.width = '200px';

//////////////////////////////////////////////////////////////////////////////////////////////

// let form = document.querySelectorAll('input'),
//     block = document.querySelectorAll('.out'),
//     button = document.querySelector('.btn');

// let valueGoods = form.forEach( item => {
//     item.addEventListener('change', () => {
//         console.log(item.value);
//     })
// })

// button.addEventListener('click', () => {
//     form.forEach( item => {
//             if (item.checked) {
//                 console.log(item.value);
//             }
//     })
// })
////////////////////////////////////////////////////////////////////////////////
// fetch('http://getpost.itgid.info/index2.php')
//     .then(data => {
//         console.log(data);
//         data.text().then(data2 => {
//             console.log(data2);
//         })
//     })

//     fetch('http://getpost.itgid.info/index2.php')
//     .then(data => {
//         console.log(data);
//         return data.text();
//     }).then(data => {
//         console.log(data)
//     })
/////////////////////////////////////////////////////////////////////////////////////////////

let goods = {
    '1254' : {
        'name' : 'банан',
        'cost' : 50,
        'img' : 'https://www.flaticon.com/svg/static/icons/svg/2990/2990510.svg',
        'count' : 1,
    },
    '5973' : {
        'name' : 'апельсин',
        'cost' : 60,
        'img' : 'https://www.flaticon.com/premium-icon/icons/svg/3137/3137032.svg',
        'count' : 1,
    },
    '3498' : {
        'name' : 'яблоко',
        'cost' : 40,
        'img' : 'https://www.flaticon.com/svg/static/icons/svg/3628/3628642.svg',
        'count' : 1,
    },
};

// let cart = {
//     '2497' : 1,
//     '1679' : 1
// };

let shop = document.querySelector('.out');


let list = '';

for (let key in goods) {
    list += `<div class="good"><img width=50 src="${goods[key].img}"><br>название: ${goods[key].name}<br>  цена:${goods[key].cost}<br>наличие: ${goods[key].count}<br><button class="add" data-id="${key}"> + </button> <button class="remove" data-id="${key}"> - </button></div> <hr><p></p>`
}

shop.innerHTML = list;
shop.style.width = '200px';

document.addEventListener('click', e => {
    e.preventDefault;
    let target = e.target;
    if (target.classList.contains('add')) {
        addGood(target.dataset.id);
    } else if (target.classList.contains('remove')) {
        removeGood(target.dataset.id);
    }
})
// добавление товара
let addGood = id => {
    goods[id]['count']++;
    renderCart();
}

// уменьшение товара
let removeGood = id => {
    if (goods[id]['count'] - 1 == 0) {
        deliteGood(id); 
        return true 
    } 
    goods[id]['count']--;
    renderCart();
}
// удаление товара
let deliteGood = id => {
    delete goods[id];
    renderCart();
}
// вывод товара
let renderCart = () => {
 console.log(goods);
}

renderCart();