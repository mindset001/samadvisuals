var cursor = document.querySelector(".cursor"),
    cursorScale = document.querySelectorAll(".cursor-scale")

    mouseX = 0,
    mouseY = 0

    gsap.to({}, 0.016, {
        repeat: -1,

        onRepeat: function(){
            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })
        }
    });

    window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX,
        mouseY = e.clientY
    });

    cursorScale.forEach(Link => {
        Link.addEventListener('mouseleave', () => {
            cursor.classList.remove('grow');
            cursor.classList.remove('grow-small');
        });
        Link.addEventListener('mousemove', ()=> {
            cursor.classList.add('grow');
            if(Link.classList.contains('small')){
                cursor.classList.remove('grow');
                cursor.classList.add('grow-small');
            }
        })
    })

