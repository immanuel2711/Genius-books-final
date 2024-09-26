document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    // Intersection Observer setup for section visibility
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const navbarLinks = document.querySelectorAll('.desktop-links a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) { // Only prevent default for internal links
                e.preventDefault();
                const targetSection = document.getElementById(targetId.substring(1));
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const toggleBtn = document.getElementById('toggle-btn');
    const mobileLinks = document.getElementById('mobile-links');
    const menuToggle = document.querySelector('.menu-toggle');

    toggleBtn.addEventListener('click', function() {
        mobileLinks.classList.toggle('active');
        menuToggle.classList.toggle('change');
    });

    function getDominantColor(imageElement, callback) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = imageElement.width;
        canvas.height = imageElement.height;
        context.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const length = data.length;
        const colorCounts = {};
        let dominantColor = { color: [0, 0, 0], count: 0 };

        for (let i = 0; i < length; i += 4) {
            const color = `${data[i]},${data[i + 1]},${data[i + 2]}`;
            if (!colorCounts[color]) {
                colorCounts[color] = 0;
            }
            colorCounts[color]++;
            if (colorCounts[color] > dominantColor.count) {
                dominantColor = { color: color.split(','), count: colorCounts[color] };
            }
        }
        callback(dominantColor.color);
    }

    function getComplementaryColor(rgb) {
        const r = 255 - rgb[0];
        const g = 255 - rgb[1];
        const b = 255 - rgb[2];
        return `rgb(${r}, ${g}, ${b})`;
    }

    function updateBackground(swiper) {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const imgElement = activeSlide.querySelector('img');

        if (imgElement) {
            getDominantColor(imgElement, dominantColor => {
                const dominantColorString = `rgb(${dominantColor.join(',')})`;
                const complementaryColor = getComplementaryColor(dominantColor);
                const gradient = `linear-gradient(to right, ${dominantColorString}, ${complementaryColor})`;
                document.querySelector('.best-sellers').style.background = gradient;
            });
        }
    }

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        },
        on: {
            slideChange: function() {
                updateBackground(this);
            }
        }
    });

    updateBackground(swiper);

    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            window.location.href = 'products.html';
        });
    }

    const links = document.querySelectorAll('.discover-by-subjects a');
    const subjectImagesContainer = document.getElementById('subject-images');

    // Function to highlight the current link
    function highlightLink(activeLink) {
        links.forEach(link => {
            link.classList.remove('active'); // Remove active class from all links
        });
        activeLink.classList.add('active'); // Add active class to the current link
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const images = JSON.parse(link.getAttribute('data-images'));
            subjectImagesContainer.innerHTML = ''; // Clear previous images

            images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = 'Book Image';
                img.style.width = '100%'; // Ensure images fit within the container
                img.style.maxHeight = '250px'; // Restrict height

                // Add a fade-in effect on image load
                img.classList.add('fade-in'); // Add 'fade-in' class for animation
                img.onload = () => {
                    img.classList.add('loaded'); // Add 'loaded' class to trigger fade-in
                };

                subjectImagesContainer.appendChild(img);
            });

            // Scroll to the image container smoothly after displaying the images
            subjectImagesContainer.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            // Highlight the current clicked link
            highlightLink(link);
        });
    });

    // Trigger Tamil Book Series only when scrolling to the subject section
    const subjectObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const subjectSection = document.getElementById('subject-images');
    const subjectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tamilBookLink = document.querySelector('a[data-images*="tamil books"]');
                if (tamilBookLink) {
                    tamilBookLink.click(); // Trigger Tamil book series only when in view
                    highlightLink(tamilBookLink); // Highlight the Tamil book link
                }
                observer.unobserve(entry.target); // Ensure it happens only once
            }
        });
    }, subjectObserverOptions);

    subjectObserver.observe(subjectSection);
});
