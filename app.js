let text = document.querySelector('.text')
let line = document.querySelector('.line')
document.querySelector('.btn').addEventListener('click',()=>{
  let r = Math.floor(Math.random()*256)
  let g = Math.floor(Math.random()*256)
  let b = Math.floor(Math.random()*256)
  let color = `(${r},${g},${b})`
  text.textContent= color
  line.style.backgroundColor =`rgb${color}` ;
})