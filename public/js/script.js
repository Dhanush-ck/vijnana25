const eventList = document.querySelector('.event-list');
var extra

// vertical scroll using mousewheel
eventList.addEventListener('wheel', (event)=>{
    if(eventList.scrollWidth > eventList.clientWidth){
        event.preventDefault();
        if(event.deltaY<0)
            extra = -150
        else
            extra = 150
        eventList.scrollLeft += event.deltaY + extra;        
    }
})

const imageList = document.querySelector('.image-list');

// vertical scroll for previous vijnana events 
imageList.addEventListener('wheel', (event)=>{
    if(imageList.scrollWidth > imageList.clientWidth){
        event.preventDefault();
        if(event.deltaY<0)
            extra = -150
        else
            extra = 150
        imageList.scrollLeft += event.deltaY + extra;        
    }
})

// const cursor = document.querySelector('.cursor');
// const header2 = document.querySelectorAll('a');

// grow cursor on hover 
// function growCursor() {
//     // cursor.style.mixBlendMode = 'difference';
//     cursor.style.backgroundColor = 'transparent'
//     cursor.style.border = '.5px  white dashed'
//     cursor.style.scale = '4';
//     isActive = true;
// }

// shrink cursor on hover out 
// function shrinkCursor() {
//     // cursor.style.mixBlendMode = 'normal';
//     cursor.style.backgroundColor = 'white'
//     cursor.style.scale = '1';
//     isActive = false;
// }

// adding cursor animations 
// header2.forEach((header) => {
//     header.addEventListener('mousemove', growCursor)
//     header.addEventListener('mouseleave', shrinkCursor)
// })

// to follow the cursor 
// window.addEventListener('mousemove', (e)=> {
//     var x = e.clientX;
//     var y = e.clientY;
//     cursor.style.left = x + 'px';
//     cursor.style.top = y + 'px';
// })

// var timeout;
// var isHidden = false;
// var isActive = false;

// document.addEventListener("mousemove", magicMouse);

// hide the cursor after sometime 
// function magicMouse() {
//     if (timeout) {
//         clearTimeout(timeout);
//     }
//     timeout = setTimeout(function() {
//         if (!isHidden && !isActive) {
//             cursor.style.display = 'none';
//             isHidden = true;
//         }
//     }, 1000);
//     if (isHidden) {
//         cursor.style.display = 'block';
//         isHidden = false;
//     }
// };

// animate event list on scroll 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('event-animation');
            return;
        }
        
        // entry.target.classList.remove('event-animation');
    });
});
const events = document.querySelectorAll('.event');

events.forEach((element) => observer.observe(element));

// animate previous vijnana image list on scroll 
const Imageobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('image-animation');
        return;
      }
  
    //   entry.target.classList.remove('image-animation');
    });
  });
const images = document.querySelectorAll('.image-holder');

images.forEach((element) => observer.observe(element));

// counter 
const day = document.getElementById('day')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

const targetDate = new Date("February 06 2025 09:00:00").getTime()

function timer() {
    const currentDate = new Date().getTime()
    const distance = targetDate - currentDate

    const Day =  Math.floor(distance / 1000 / 60 / 60 / 24)
    const Hour = Math.floor(distance / 1000 / 60 / 60) % 24
    const Minute = Math.floor(distance / 1000 / 60 ) % 60
    const Second = Math.floor(distance / 1000 ) % 60
    
    day.innerHTML = Day
    hour.innerHTML = Hour
    minute.innerHTML = Minute
    second.innerHTML = Second

    if(Day < 10 ) 
        day.innerHTML = "0" + Day
    if(Hour < 10 ) 
        hour.innerHTML = "0" + Hour
    if(Minute < 10 ) 
        minute.innerHTML = "0" + Minute
    if(Second < 10 )
        second.innerHTML = "0" + Second
    
    if(distance < 0) {
        day.innerHTML = 0
        hour.innerHTML = 0
        minute.innerHTML = 0
        second.innerHTML = 0
    }
}

setInterval(timer, 1000)

// burger menubar 

const menu = document.getElementById('menu')
const menubar = document.querySelector('.menubar')

menu.onclick = ()=> {
    if(menubar.style.display == 'none'){
        menubar.style.display = 'block'
    }
    else {
        menubar.style.display = 'none'
    }
}

const items = document.querySelectorAll('.item')

items.forEach((item) => {
    item.onclick = () => {
        menubar.style.display = 'none'
    }
})

window.onload = timer()

const previews = document.querySelectorAll('.preview');
const prevImg = document.getElementById('prev-img')
const prevHolder = document.getElementById('prev-holder');
previews.forEach((preview)=>{
    preview.addEventListener('click', ()=> {
        prevImg.src = preview.src;
        prevHolder.style.display = "flex";
        console.log(1);
    })
})

prevHolder.onclick = ()=>{
    prevHolder.style.display = 'none';
}