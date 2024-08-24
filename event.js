document.addEventListener('DOMContentLoaded', function() {
    // Image slider functionality
    const sliders = document.querySelectorAll('.image-slider');
    sliders.forEach(slider => {
        const container = slider.querySelector('.slider-container');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        const slides = container.querySelectorAll('img');
        let currentIndex = 0;

        function showSlide(index) {
            container.style.transform = `translateX(-${index * 100}%)`;
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function showPrev() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        nextBtn.addEventListener('click', showNext);
        prevBtn.addEventListener('click', showPrev);
    });

    // Event details toggle
    const detailsBtns = document.querySelectorAll('.event-details-btn');
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const description = this.nextElementSibling;
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });
    });
});