const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });

});

const hiddenElements = document.querySelectorAll('.hidden-item');
const hiddenElements2 = document.querySelectorAll('.hidden-youtube-item');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));