const allDiv = document.querySelectorAll(".divjs");
let currentIndex = 0;

function createAnimatedBorders() {
    allDiv.forEach(div => {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("class", "border-animation-svg");

        const rect = document.createElementNS(svgNS, "rect");
        rect.setAttribute("width", "100%");
        rect.setAttribute("height", "100%");
        rect.setAttribute("rx", "15");
        rect.setAttribute("ry", "15");

        svg.appendChild(rect);
        div.appendChild(svg);

        const totalLength = rect.getTotalLength();
        rect.style.setProperty('--total-length', totalLength);
        rect.style.setProperty('--point-length', '60');
    });
    startSequenceAnimation();
}

function startSequenceAnimation() {
    const groupToAnimate = Array.from(allDiv).slice(currentIndex, currentIndex + 3);

    groupToAnimate.forEach(div => {
        const svg = div.querySelector('.border-animation-svg');
        if (svg) {
            svg.classList.add('active');

            setTimeout(() => {
                svg.classList.remove('active');
            }, 2000);
        }
    });

    currentIndex += 3;

    if (currentIndex >= allDiv.length) {
        currentIndex = 0;
    }

    setTimeout(startSequenceAnimation, 2500);
}

allDiv.forEach(div => {
    div.addEventListener("mouseenter", () => {
        div.classList.add('blue');
        div.style.transform = "scale(1.2)";
    });

    div.addEventListener("mouseleave", () => {
        div.classList.remove('blue');
        div.style.transform = "scale(1)";
    });
});

window.addEventListener('DOMContentLoaded', createAnimatedBorders);