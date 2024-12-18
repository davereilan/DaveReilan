const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("active");
        createBubbles(entry.target);
    }
    });
    }, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

function createBubbles(section) {
    for (let i = 0; i < 150; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        const size = Math.random() * 50 + 10; 
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        bubble.style.left = `${Math.random() * 100}%`; 
        bubble.style.top = `${Math.random() * 100}%`; 

        section.appendChild(bubble);


        bubble.addEventListener("animationend", () => {
        bubble.remove();
        });
    }
}