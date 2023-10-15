import './style.css'






let coords = document.querySelector('#coord') as HTMLDivElement
document.addEventListener ('mousemove', function(e){
   coords.innerHTML =`page ${e.pageX}px ${e.pageY}px<br>`
   coords.innerHTML +='client ' + e.clientX + 'px ' +e.clientY + 'px'
   
})


 


button.onmouseup = function(event) {
   if (event.ctrlKey && event.shiftKey) {
     console.log('Всем привет!');
     ;
   }
 };








let name = ['apple', 'orange', ' tomato']
name.splice (0,2, 'banana', 'coconut', 'peach')



let square = document.querySelector('.squares') as HTMLDivElement
square.style.color = 'red'
square.style.padding = 20+'px'
square.style.border = '2px solid red'
square.style.width = 100+'px'
square.style.margin = 50 +'px'
square.style.marginLeft = 20 +'px'
square.style.background = '#808080'
square.style.fontSize= '1.2em'
square.innerHTML += 'кнопка через JS'
square.style.cursor = 'pointer'

console.log(square.style.cssText);


square.addEventListener ('mousedown', function(){
   square.innerHTML= `${name}`
   square.style.backgroundColor = 'black'
   square.style.transition= 0.3+'s'
})
square.addEventListener ('click', function(){
   square.innerHTML= `${name}`
   square.style.backgroundColor = 'gray'
})
 
 






 

let blueButtons = document.querySelectorAll('.btn')
blueButtons.forEach(btn =>
   btn.addEventListener('click', function (e) {
      console.log(parseInt(e.target.dataset.num));
      console.log( e.button);

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
   let x = e.pageX - this.clientLeft - this.offsetLeft-30
   let y = e.pageY - this.clientTop - this.offsetTop-30
   if (x < 0) {
      x = 0
   }
   if (x>fields.clientWidth-50 ) {
      x = fields.clientWidth-balls.width
   }
   if (y < 0) {
      y = 0
   }
   if (y > fields.clientHeight-50) {
      y = fields.clientHeight-balls.height
   }
  
   balls.style.left = x + 'px'
   balls.style.top = y + 'px'
   console.log('x ='+ x + ';' + 'y= '+ y);
})






let fieldCoord = document.querySelectorAll('.fieldCoords')[0]
let rect2 = fieldCoord.getBoundingClientRect()
fieldCoord.innerHTML +=`Координаты окна:<br>`
fieldCoord.innerHTML += `верхняя левая точка ${Math.round(rect2.left)}px/${Math.round(rect2.top)}px <br>`
fieldCoord.innerHTML += `верхняя правая точка ${Math.round(rect2.right)}px/${Math.round(rect2.top)}px<br>`
fieldCoord.innerHTML += `нижняя правая точка ${Math.round(rect2.right)}px/${Math.round(rect2.bottom)}px <br>`
fieldCoord.innerHTML +=`нижняя левая точка ${Math.round(rect2.left)}px/${Math.round(rect2.bottom)}px`


 













