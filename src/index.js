import "./styles.css";

let allTab = document.querySelectorAll('span')
let wrap = document.querySelectorAll('li')

allTab.forEach((val,index)=>{
  val.addEventListener('click',function(){
    wrap.forEach(v=>v.style.display = 'none')
    wrap[index].style.display = 'block'
  },false)
})