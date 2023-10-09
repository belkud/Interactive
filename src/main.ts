import './style.css'


let blueButtons = document.querySelectorAll('.btn')
blueButtons.forEach (btn=>
  btn.addEventListener('click', function(e){
     console.log(parseInt(e.target.dataset.num));
     
  }))


  let balls = document.querySelector ('.ball')
  let fields = document.querySelector ('.field')

  fields.addEventListener ('click', function(e){
   balls.style.left = e.clientX + 'px'
   balls.style.top = e.clientY + 'px'
  })