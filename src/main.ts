import './style.css';



const months = ['января', 'февраля', 'марта', 'апреля']
console.log(months[1]);


let deg = 0
const rotate = ()=>{
  deg += 30
//   if (deg == 360) deg = 0
  return deg+'deg'
}


let col = document.querySelector ('#color') as HTMLButtonElement
col.addEventListener ('click', function (){
   col.style.rotate = rotate()
   if (col.style.backgroundColor=='violet'){
      return col.style.backgroundColor = 'red'
   } else if (col.style.backgroundColor=='red') { 
      return (col.style.backgroundColor = 'green')
   } else {  
      return (col.style.backgroundColor = 'violet')
   }   
}
)



//! анонимные и стрелочные функции

let anonim = function() {
   console.log('анонимная функция 1');
};
anonim()


let anonim2 = function funс() {
   console.log('именнованная функция 2');
};
anonim2()


let anonim3 =()=> '=> стрелочная функция 3';
console.log(anonim3());


let anonim4 =()=> 25 +25;
console.log(anonim4());


let anonim5 =()=>{return 25 +25};
console.log(anonim5());







(function() {
   console.log('анонимная функция');
})();


 







function fmFunc() {
   setTimeout(() => {
      fmConst.style.backgroundColor = 'red'
      fmConst.style.boxShadow = '10px 10px 3px red'

   }, 1000);

   setTimeout(() => {
      // fmConst.style.backgroundColor = 'red',
      fmConst.style.color = 'white'
      fmConst.style.backgroundColor = 'blue'
      fmConst.style.boxShadow = '10px 10px 3px blue'

   }, 2000);

   setTimeout(() => {
      fmConst.style.backgroundColor = 'gray'
      // fmConst.style.color = 'blue'
      fmConst.style.boxShadow = '10px 10px 5px gray'

   }, 3000);
}

const fmConst = document.querySelector("#fm") as HTMLButtonElement
   fmConst.style.backgroundColor = 'green'
   fmConst.style.color = 'white'
   fmConst.style.border = '2px solid black'
   fmConst.style.padding = '5px'
   fmConst.style.marginRight = '25px'
   fmConst.style.borderRadius = '5px'
   fmConst.style.boxShadow = '10px 10px 3px green'
   
fmConst.addEventListener('click', fmFunc)




//! Функция существует ТОЛЬКО внутри const!

const fmConst2 = function () {
   console.log('вывод анонимной функции');
}
fmConst2()


const fmConst3 = function fmFunc() {
   console.log('вывод fmFunc функции');
}
fmConst3()




 



function fn2() {
   // let length  = 0
   setInterval(() => {
      length++
      // JS.innerHTML = `${JS.length}`
      // console.log(num);
   }, 1000);
}
const JS = document.querySelector('.text') as HTMLDivElement
JS.addEventListener('click', fn2)





const nums = document.querySelector('#num') as HTMLButtonElement

function fn() {
   let num = 0
   setInterval(() => {
      num++
      nums.innerHTML = `${num}`

   }, 1000);

}

const score = document.querySelector('#score') as HTMLButtonElement
score.addEventListener('click', fn, { once: true })
// score.style.backgroundColor = 'green'








const changeBackground = document.querySelector('#btn2') as HTMLButtonElement
changeBackground.addEventListener('click', function () {
   setTimeout(() => {
      changeBackground.style.backgroundColor = 'blue'
      changeBackground.style.color = 'white'
   }, 3000);
})

 



function setInt() {
   setInterval(() => {
   }, 1000);
   setTimeout(() => {
      setIntervals.style.display = 'none'
      console.log('setInterval');
   }, 2500);
}

function setTime() {
   setTimeout(() => {
      setTimeouts.style.display = 'none'

   }, 1500);
}

const setTimeouts = document.querySelector('#setTimeout') as HTMLButtonElement
setTimeouts.addEventListener('click', setTime)

const setIntervals = document.querySelector('#setInterval') as HTMLButtonElement
setIntervals.addEventListener('click', setInt)


 


const btn5 = document.querySelector('#btn3') as HTMLButtonElement




function changeBackground2() {
if (btn6.style.backgroundColor == 'blueviolet') {
   btn6.style.backgroundColor = 'orange'
   btn6.innerHTML = 'Выключить'
   btn6.style.boxShadow = '0px 0px 30px orange'
   
} else {
   btn6.style.backgroundColor = 'blueviolet'
   btn6.style.boxShadow = '0px 0px 30px blueviolet'
   btn6.innerHTML = 'Включить'
}
}

// btn6.onclick=()=> btn6.toggleAttribute("lit");
// #btn6.lit {
   // background:yellow;
// }





const btn6 = document.querySelector('#btn4') as HTMLDivElement
btn6.addEventListener ('click', changeBackground2)

// function click1() {
//    console.log('клик 1');
// }
function click2() {
   console.log('клик 2');

}

function click3() {
    
}






function click4() {
   console.log('клик 4');

}

btn5.onclick = () => {
   click2()
   click4()

   btn5.onclick = null;

}

// btn6.addEventListener('click', click3, {
//    once: true

// })





let lis = document.querySelectorAll('li')
lis.forEach(li =>
   li.addEventListener('click', function () {
      li.style.cursor = 'pointer'
      li.style.backgroundColor = 'orange'




      // console.log('123');
   }))



buttons.onmouseup = function (event) {
   if (event.ctrlKey && event.shiftKey) {
      console.log('Всем привет!');
      ;
   }
};


let coords = document.querySelector('#coord') as HTMLDivElement
document.addEventListener('mousemove', function (e) {
   coords.innerHTML = `page ${e.pageX}px ${e.pageY}px<br>`
   coords.innerHTML += 'client ' + e.clientX + 'px ' + e.clientY + 'px'

})


 



let name = ['apple', 'orange', ' tomato']
name.splice(0, 2, 'banana', 'coconut', 'peach')



let square = document.querySelector('.squares') as HTMLDivElement
square.style.color = 'red'
square.style.padding = 20 + 'px'
square.style.border = '2px solid red'
square.style.width = 100 + 'px'
square.style.margin = 50 + 'px'
square.style.marginLeft = 20 + 'px'
square.style.background = '#808080'
square.style.fontSize = '1.2em'
square.innerHTML += 'кнопка через JS'
square.style.cursor = 'pointer'

console.log(square.style.cssText);


square.addEventListener('mousedown', function () {
   square.innerHTML = `${name}`
   square.style.backgroundColor = 'black'
   square.style.transition = 0.3 + 's'
})
square.addEventListener('click', function () {
   square.innerHTML = `${name}`
   square.style.backgroundColor = 'gray'
})



 

let blueButtons = document.querySelectorAll('.btn')
blueButtons.forEach(btn =>
   btn.addEventListener('click', function (e) {
      console.log(parseInt(e.target.dataset.num));
      console.log(e.button);

   }))



let showCoordinate = document.querySelector('.coordinate') as HTMLDivElement
window.addEventListener('mousemove', function (e) {
   showCoordinate.innerHTML = `по окну: ${e.clientX}px ${e.clientY}px <br>
       по странице: ${e.pageX}px ${e.pageY}px`
})



let balls = document.querySelector('.ball') as HTMLImageElement
let fields = document.querySelector('.field') as HTMLDivElement
// let rect = fields.getBoundingClientRect()

fields.addEventListener('click', function (e) {
   let x = e.pageX - this.clientLeft - this.offsetLeft - 30
   let y = e.pageY - this.clientTop - this.offsetTop - 30
   if (x < 0) {
      x = 0
   }
   if (x > fields.clientWidth - 50) {
      x = fields.clientWidth - balls.width
   }
   if (y < 0) {
      y = 0
   }
   if (y > fields.clientHeight - 50) {
      y = fields.clientHeight - balls.height
   }

   balls.style.left = x + 'px'
   balls.style.top = y + 'px'
   console.log('x =' + x + ';' + 'y= ' + y);
})






let fieldCoord = document.querySelectorAll('.fieldCoords')[0]
let rect2 = fieldCoord.getBoundingClientRect()
fieldCoord.innerHTML += `Координаты окна:<br>`
fieldCoord.innerHTML += `верхняя левая точка ${Math.round(rect2.left)}px/${Math.round(rect2.top)}px <br>`
fieldCoord.innerHTML += `верхняя правая точка ${Math.round(rect2.right)}px/${Math.round(rect2.top)}px<br>`
fieldCoord.innerHTML += `нижняя правая точка ${Math.round(rect2.right)}px/${Math.round(rect2.bottom)}px <br>`
fieldCoord.innerHTML += `нижняя левая точка ${Math.round(rect2.left)}px/${Math.round(rect2.bottom)}px`

document.addEventListener('click', function () {
   setTimeout(() => {
      fieldCoord.style.color = 'red'

   }, 1000);
})














