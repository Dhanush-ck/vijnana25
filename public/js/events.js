const eventList = document.querySelector('.event-list');
const collegeButton = document.getElementById('college')
const schoolButton = document.getElementById('school')
const prevImg = document.getElementById('prev-img')
const prevHolder = document.getElementById('prev-holder');

const colleges = [
    {
        id: 1,
        imgLink: "./img/efootball.jpg",
        eventName: "Virtual Kickoff",
        eventDesc: "E-football gaming competition. Semifinal and final will be conducted offline at venue.",
        formLink: "https://forms.gle/MdMPcgBP588ZrVGt5",
        link : "./img/current/virtual kickoff  .jpg"
    },
    {
        id: 2,
        imgLink: "./img/girl-coding.jpg",
        eventName: "Fingers on Fire",
        eventDesc: "Participants are given a set of sentences, one who types first with more accuracy wins.",
        formLink: "https://forms.gle/Sb5HLAzPd31StDpe9",
        link : "./img/current/fingers on fire .jpg"
    },
    {
        id: 3,
        imgLink: "./img/boy-coding.jpg",
        eventName: "Debugging",
        eventDesc: "Challenge where all participants are given programs containing errors, one who debugs all programs wins.",
        formLink: "https://forms.gle/wex2UEc6oSVdHr1u9",
        link : "./img/current/Debugging poster.jpg"
    },
    {
        id: 4,
        imgLink: "./img/coding-group.jpg",
        eventName: "Workshop on IOT",
        eventDesc: "Intersting talk and class on the topic Internet Of Things(IOT) from an experienced mentors.",
        formLink: "https://forms.gle/eZcqiT1Qki1M8dpP8",
        link : "./img/current/iot.jpg"
    },
    {
        id: 5,
        imgLink: "./img/technical-quiz.jpg",
        eventName: "Quiz Questa",
        eventDesc: "Participants are given a set of questions related to technical, one who scores the most score wins.",
        formLink: "https://forms.gle/G3A9EmXZzf17i52j9",
        link : "./img/current/technical-quiz.jpg"
    },
    {
        id: 6,
        imgLink: "./img/workshop-ml.jpg",
        eventName: "Workshop on ML",
        eventDesc: "Intersting talk and class on the topic Machine Learning from an experienced mentors.",
        formLink: "https://forms.gle/YVZWNaVtn3XobQzE8",
        link : "./img/current/ml.jpg"
    },
    {
        id: 7,
        imgLink: "./img/code-clash.jpg",
        eventName: "Code Battle",
        eventDesc: "Test your coding skills and complete with the best in our thrilling coding contest!",
        formLink: "https://forms.gle/bT9ZNVYiQM84NqQR9",
        link : "./img/current/code battle .jpg"
    },
    {
        id: 8,
        imgLink: "./img/cyber-security.jpg",
        eventName: "Workshop on Cybersecurity",
        eventDesc: "Intersting talk on the topic Cybersecurity from an experienced mentors.",
        formLink: "https://forms.gle/VX3kzW639vbuH1dD6",
        link : "./img/current/cybersecurity.jpg"
    },
    {
        id: 9,
        imgLink: "./img/crypta-quest.jpg",
        eventName: "Unlock the Secret",
        eventDesc: "Participants will receive an encrypted message and must decrypt it using various techniques. The first to correctly decrypt the message wins.",
        formLink: "https://forms.gle/QKurC1iMhHfock5EA",
        link : "./img/current/decryption poster.jpg"
    },
    {
        id: 10,
        imgLink: "./img/blind-coding.jpg",
        eventName: "Code in the Dark",
        eventDesc: "An unique programming challege where participants must solve coding problems with their monitors turned off.",
        formLink: "https://forms.gle/1K75yZGmdGf9MRkS6",
        link : "./img/current/code in dark .jpg"
    },
    {
        id: 11,
        imgLink: "./img/pixel-perfect.jpg",
        eventName: "Pixel Perfect",
        eventDesc: "Participants will be given a specific topic, they should click photo related to the topic.",
        formLink: "https://forms.gle/Pq5DM2GPQfkDbx1Y8",
        link : "./img/current/pixel perfect .jpg"
    }
];

const schools = [
    {
        id: 1,
        imgLink: "./img/efootball.jpg",
        eventName: "Virtual Kickoff",
        eventDesc: "E-football gaming competition. Semifinal and final will be conducted offline at venue.",
        formLink: "https://forms.gle/MdMPcgBP588ZrVGt5",
        link : "./img/current/virtual kickoff  .jpg"
    },
    {
        id: 2,
        imgLink: "./img/technical-quiz.jpg",
        eventName: "Quiz Questa",
        eventDesc: "Participants are given a set of questions related to technical, one who scores the most score wins.",
        formLink: "https://forms.gle/G3A9EmXZzf17i52j9",
        link : "./img/current/technical-quiz.jpg"
    }
];

schoolButton.onclick = ()=> { 
    setEvents(schools)
    collegeButton.classList.remove('selected')
    schoolButton.classList.add('selected')
}

collegeButton.onclick = ()=> {
    setEvents(colleges)
    collegeButton.classList.add('selected')
    schoolButton.classList.remove('selected')
    const moreInfoButtonsUpdated = document.querySelectorAll('more-info-button')
    moreInfoButtons = moreInfoButtonsUpdated
}

function setEvents(events) {
    eventList.innerHTML = "" 
    events.forEach((event)=> {
        eventList.innerHTML += `<div class="event college" style="--i:${event.id}"><img src="${event.imgLink}" class="event-image "><div class="event-content"><span class="event-header">${event.eventName}</span><p class="event-info">${event.eventDesc}</p><div class="button"><a href="${event.formLink}"><div class="event-register">Register</div></a><div class="more-info"><span class="more-info-button" data-value="${event.link}">More Info</span></div></div></div></div>`;
    })
    
    const moreInfoButtons = document.querySelectorAll('.more-info-button')
    moreInfoButtons.forEach((button)=> {
        button.addEventListener('click', ()=>{
            prevHolder.style.display = "flex";
            prevImg.src = button.dataset.value;
        })
    })
}
setEvents(colleges)

prevHolder.onclick = ()=>{
    prevHolder.style.display = 'none';
}