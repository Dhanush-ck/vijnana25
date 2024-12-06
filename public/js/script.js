const eventList = document.querySelector('.event-list');

eventList.addEventListener('wheel', (event)=>{
    if(eventList.scrollWidth > eventList.clientWidth){
        event.preventDefault();
        eventList.scrollLeft += event.deltaY;        
    }
})