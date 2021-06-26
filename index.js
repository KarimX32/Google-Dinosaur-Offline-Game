var character = document.getElementById('character')
var block = document.getElementById("block")

function jump() {
    character.classList.add('animated')
    setTimeout(function() {
        character.classList.remove('animated')
    }, 500)

    var dead = setInterval(function() {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

        if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
            block.style.animation = 'none';
            block.style.display = 'none';
            if(!alert("You SUCK, Click OK now")) {
                window.location.reload();
            }
        }
    }, 10)
}