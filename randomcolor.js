const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
};
let intervalId;
const startChangeBgColor = function (){
    if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
        }
            function changeBgColor (){ 
    document.body.style.backgroundColor = randomColor();
}
};

document.getElementById('start').addEventListener('click', startChangeBgColor)
const stopChangeBgColor = function (){
    clearInterval(intervalId);
    intervalId = null;
}
document.getElementById('stop').addEventListener('click', stopChangeBgColor);

