AOS.init();

const eventDate = new Date("Dec 12, 2024 19:00:00");
const eventTimeStamp = eventDate.getTime();

const timeCount = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const timeUntilEvent = eventTimeStamp - currentTimeStamp;

    const daysUntilEvent = Math.floor(timeUntilEvent / (1000 * 60 * 60 * 24));
    const hoursUntilEvent = Math.floor((timeUntilEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesUntilEvent = Math.floor(timeUntilEvent % (1000 * 60 * 60) / (1000 * 60));
    const secondsUntilEvent = Math.floor(timeUntilEvent % (1000 * 60) / 1000);

    document.querySelector('.counting').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if (timeUntilEvent < 0) {
        clearInterval(timeCount);
        document.querySelector('.counting').innerHTML = 'Evento expirado';
    }
}, 1000);