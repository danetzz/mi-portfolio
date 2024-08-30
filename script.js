// SCRIPT DE LA PAGINA LOGIN

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Por favor, completa todos los campos.");
            event.preventDefault(); // Evita el envío del formulario
        }
    /* else {
        window.location.href = "/index.html"; // Redirige a la página de usuarios      
    }*/
    });
});





// SCRIPT DEL NAV
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        item.addEventListener('mouseout', () => {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});


// TRANSICION FADE IN EN TITULOS DEL CONTENEDOR2

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('#contenedor2 #titulos');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.4 }); // Cambia el umbral si quieres ajustar cuándo se activa el efecto

    sections.forEach(section => {
        observer.observe(section);
    });
});

// TRANSICION FADE IN EN TEXTO DEL CONTENEDOR3

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('#contenedor2 #textos');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.4 }); // Cambia el umbral si quieres ajustar cuándo se activa el efecto

    sections.forEach(section => {
        observer.observe(section);
    });
});


// TRANSICION FADE IN EN TITULOS DEL CONTENEDOR3

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('#contenedor3 #textos2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 }); // Cambia el umbral si quieres ajustar cuándo se activa el efecto

    sections.forEach(section => {
        observer.observe(section);
    });
});




// CARRUSEL CONTENEDOR 3

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-image');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Opcional: Automatizar el cambio de diapositivas
setInterval(nextSlide, 5000);

// Mostrar la primera diapositiva al cargar
showSlide(currentIndex);


//INSERTANDO COMPONENTES 
//PRENAV
document.addEventListener('DOMContentLoaded', () => {
    fetch('componentes/prenav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('prenavPlaceholder').innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

//NAV
document.addEventListener('DOMContentLoaded', () => {
    fetch('componentes/nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('navPlaceholder').innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

/*FOOTER*/
document.addEventListener('DOMContentLoaded', () => {
    fetch('/componentes/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('footerPlaceholder').innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});


