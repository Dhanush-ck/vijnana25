const revealHolder = document.getElementById('reveal-holder')
const video = document.getElementById('vid')
const items = document.querySelector('.items')

revealHolder.onclick = ()=>{
    vid.style.display = 'block'
    vid.play();
    revealHolder.style.display = 'none'
}

vid.onended = ()=> {
    items.style.display = 'flex'
}