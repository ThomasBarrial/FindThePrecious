const nivagtion = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        nivagtion.classList.add("anim-nav");
    } else {
        nivagtion.classList.remove("anim-nav");
    }
    
})