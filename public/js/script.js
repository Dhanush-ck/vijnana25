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
        day.innerHTML = "00"
        hour.innerHTML = "00"
        minute.innerHTML = "00"
        second.innerHTML = "00"
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

const links = [
    {
        id: 1,
        link : "./img/current/virtual kickoff  .jpg"
    },
    {
        id: 2,
        link : "./img/current/fingers on fire .jpg"
    },
    {
        id: 3,
        link : "./img/current/Debugging poster.jpg"
    },
    {
        id: 4,
        link : "./img/current/iot.jpg"
    },
    {
        id: 5,
        link : "./img/current/technical-quiz.jpg"
    },
    {
        id: 6,
        link : "./img/current/ml.jpg"
    },
    {
        id: 7,
        link : "./img/current/code battle .jpg"
    },
    {
        id: 8,
        link : "./img/current/cybersecurity.jpg"
    },
    {
        id: 9,
        link : "./img/current/decryption poster.jpg"
    },
    {
        id: 10,
        link : "./img/current/code in dark .jpg"
    },
    {
        id: 11,
        link : "./img/current/pixel perfect .jpg"
    }
];

// console.log(links[0].link)

const infos = document.querySelectorAll('.more-info-button')

infos.forEach((info, index)=> {
    info.onclick = ()=>{
        prevImg.src = links[index].link;
        prevHolder.style.display = "flex";
    }
})