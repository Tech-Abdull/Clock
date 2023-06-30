const secE1 = document.querySelector('.sec')
const minE1 = document.querySelector('.min')
const hourE1 = document.querySelector('.hour')





setInterval(() => {
    const date = new Date();
    const secDeg = date.getSeconds()/60 * 360 - 90
    const minDeg = date.getMinutes()/60 * 360 - 90
    const hourdeg = date.getSeconds()/60 * 360 - 90
    secE1.style.transform = `rotate(${secDeg}deg)`
    minE1.style.transform = `rotate(${minDeg}deg)`
    hourE1.style.transform = `rotate(${hourdeg}deg)`
}, 1000)