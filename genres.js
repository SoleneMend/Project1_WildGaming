const allDiv = document.querySelectorAll(".divjs");
for (const div of allDiv) {
    div.addEventListener("mouseenter", () => {
        div.classList.add('blue')
        div.style.transform = "scale(1.2)"
    }
    )

    div.addEventListener("mouseleave", () => {
        div.classList.remove('blue')
        div.style.transform = "scale(1)"
    }
    )
}