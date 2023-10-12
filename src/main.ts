import './style.css'












let name = {
   age:32,
   color:'white',
   city: '111'
}

console.log(name);



let square = document.querySelector('.squares') as HTMLDivElement
square.style.color = 'red'
square.style.padding = 20+'px'
square.style.border = '2px solid red'
square.style.width = 100+'px'
square.style.margin = 50 +'px'
square.style.background = '#808080'
square.style.fontSize= '1.2em'
square.innerHTML += 'свойства через js'

console.log(square.style.cssText);

square.addEventListener ('click', function(){
   square.style.display = 'none'
})




 

let blueButtons = document.querySelectorAll('.btn')
blueButtons.forEach(btn =>
   btn.addEventListener('click', function (e) {
      console.log(parseInt(e.target.dataset.num));

   }))



let showCoordinate = document.querySelector('.coordinate') as HTMLDivElement
window.addEventListener('mousemove', function (e) {
   showCoordinate.innerHTML = `по окну: ${e.clientX}px ${e.clientY}px <br>
       по странице: ${e.pageX}px ${e.pageY}px`
})



let balls = document.querySelector('.ball') as HTMLImageElement
let fields = document.querySelector('.field') as HTMLDivElement

fields.addEventListener('click', function (e) {
   balls.style.left = e.pageX - this.clientLeft - this.offsetLeft - 30 + 'px'
   balls.style.top = e.pageY - this.scrollTop - this.clientTop - this.offsetTop - 30 + 'px'

   let rect = fields.getBoundingClientRect()
  
   // if (balls.left < 0) balls.left = 0;

  
   function getCoords() {
      let rect = fields.getBoundingClientRect();

      return {
         
      };
   }
})






let fieldCoord = document.querySelectorAll('.fieldCoords')[0]
let rect2 = fieldCoord.getBoundingClientRect()
fieldCoord.innerHTML +=`Координаты окна:<br>`
fieldCoord.innerHTML += `верхняя левая точка ${Math.round(rect2.left)}px/${Math.round(rect2.top)}px <br>`
fieldCoord.innerHTML += `верхняя правая точка ${Math.round(rect2.right)}px/${Math.round(rect2.top)}px<br>`
fieldCoord.innerHTML += `нижняя правая точка ${Math.round(rect2.right)}px/${Math.round(rect2.bottom)}px <br>`
fieldCoord.innerHTML +=`нижняя левая точка ${Math.round(rect2.left)}px/${Math.round(rect2.bottom)}px`
















