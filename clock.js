const clock = document.getElementById('clock');


setInterval(() => {
    let currentTime = new Date();
    clock.innerText = currentTime.toLocaleTimeString()
}, 1000)


