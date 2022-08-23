const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')

document.addEventListener('keydown', function(event){
    jump();
})

function jump(){
    if(dino.classList!="jump") dino.classList.add("jump")

    setTimeout(function(){
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval(()=>{
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactueLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if(cactueLeft < 50 && cactueLeft > 0 && dinoTop >= 140){
        alert("Game Over")
    }
}, 10)