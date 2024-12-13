const eventList = document.querySelector('.event-list');

eventList.addEventListener('wheel', (event)=>{
    if(eventList.scrollWidth > eventList.clientWidth){
        event.preventDefault();
        eventList.scrollLeft += event.deltaY;        
    }
})

const cursor = document.querySelector('.cursor');
const header2 = document.querySelectorAll('a');

function growCursor() {
    // cursor.style.mixBlendMode = 'difference';
    cursor.style.backgroundColor = 'transparent'
    cursor.style.border = '.5px  white dashed'
    cursor.style.scale = '4';
    isActive = true;
}

function shrinkCursor() {
    // cursor.style.mixBlendMode = 'normal';
    cursor.style.backgroundColor = 'white'
    cursor.style.scale = '1';
    isActive = false;
}

header2.forEach((header) => {
    header.addEventListener('mousemove', growCursor)
    header.addEventListener('mouseleave', shrinkCursor)
})

window.addEventListener('mousemove', (e)=> {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
})

var timeout;
var isHidden = false;
var isActive = false;

document.addEventListener("mousemove", magicMouse);

function magicMouse() {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
        if (!isHidden && !isActive) {
            cursor.style.display = 'none';
            isHidden = true;
        }
    }, 1000);
    if (isHidden) {
        cursor.style.display = 'block';
        isHidden = false;
    }
};

