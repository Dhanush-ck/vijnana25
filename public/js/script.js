const eventList = document.querySelector('.event-list');

eventList.addEventListener('wheel', (event)=>{
    if(eventList.scrollWidth > eventList.clientWidth){
        event.preventDefault();
        eventList.scrollLeft += event.deltaY;        
    }
})

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e)=> {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
})
