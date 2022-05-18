const p = document.createElement('p')
document.body.appendChild(p)


setInterval(function(){
    let d = new Date()
    p.innerText = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
}, 1000)

