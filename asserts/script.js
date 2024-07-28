
//image slider
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let slideInterval;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function startSlideShow() {
        slides[currentSlide].classList.add('active');
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    startSlideShow();

    // Optional: Stop the slideshow when the user hovers over the slider
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseover', stopSlideShow);
    slider.addEventListener('mouseout', startSlideShow);
});

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('demo');
    let captionText = document.getElementById('caption');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

// for birthday marquee and you can add more birthdays

document.addEventListener('DOMContentLoaded', () => {
    const birthdays = [
        { name: 'John Doe', photo: 'https://th.bing.com/th?id=OIP.WRzZJlYLzOB8y3yeI5MvfgAAAA&w=169&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', date: '2024-07-19' },
        { name: 'Jane Smith', photo: 'https://th.bing.com/th/id/OIP.bvhb08L0UbI7SxyD_NtNkAHaHa?w=175&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7', date: '2024-07-19' },
        { name: 'Emily Johnson', photo: 'https://th.bing.com/th/id/OIP.K5EBHaCIg8xf9XBucPeebAHaHa?pid=ImgDet&w=182&h=182&c=7&dpr=1.3v', date: '2024-07-09' },
        { name: 'Michael Brown', photo: 'https://th.bing.com/th/id/OIP.Soqtvc8GbISKlazg81TPigHaFy?w=205&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', date: '2024-07-09' },
        { name: 'Alexender', photo: 'https://th.bing.com/th/id/OIP.CvPcTdHs1ggDgtNYK_zEfgHaFj?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', date: '2024-07-11' },
        { name: 'Chris Wilson', photo: 'photo6.jpg', date: '2024-07-17' },
        { name: 'Amy Moore', photo: 'photo7.jpg', date: '2024-07-12' },
        { name: 'Matthew Taylor', photo: 'photo8.jpg', date: '2024-07-13' },
        { name: 'Ashley Anderson', photo: 'photo9.jpg', date: '2024-07-14' },
        { name: 'Robert Thomas', photo: 'photo10.jpg', date: '2024-07-15' },
        { name: 'Linda Jackson', photo: 'photo11.jpg', date: '2024-07-16' },
        { name: 'Paul White', photo: 'photo12.jpg', date: '2024-07-17' },
        { name: 'Karen Harris', photo: 'photo13.jpg', date: '2024-07-18' },
        { name: 'Kevin Martin', photo: 'photo14.jpg', date: '2024-07-19' },
        { name: 'Sarah Thompson', photo: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png', date: '2024-07-09' }
    ];

    const today = new Date().toISOString().split('T')[0];
    const marqueeContent = document.getElementById('marquee-content');

    const todayBirthdays = birthdays.filter(birthday => birthday.date === today);

    if (todayBirthdays.length > 0) {
        todayBirthdays.forEach(birthday => {
            const item = document.createElement('div');
            item.className = 'birthday-item';
            item.innerHTML = `
                <img src="${birthday.photo}" alt="${birthday.name}">
                <div class="name">${birthday.name}</div>
                <div class="date">${birthday.date}</div>
                <div>Happy Birthday!</div>
            `;
            marqueeContent.appendChild(item);
        });
    } else {
        marqueeContent.innerHTML = '<div class="birthday-item">No birthdays today</div>';
    }
});

//section notic board

document.addEventListener('DOMContentLoaded', function() {
    const tbody = document.getElementById('news-tbody');
    const rows = Array.from(tbody.rows);
    let cloneRows = rows.map(row => row.cloneNode(true));
    
    cloneRows.forEach(row => tbody.appendChild(row));

    function scrollNews() {
        const firstRow = tbody.rows[0];
        const rowHeight = firstRow.offsetHeight;
        tbody.style.transition = 'transform 1s linear';
        tbody.style.transform = `translateY(-${rowHeight}px)`;

        setTimeout(() => {
            tbody.style.transition = 'none';
            tbody.style.transform = 'translateY(0)';
            tbody.appendChild(firstRow);
        }, 1000);
    }

    setInterval(scrollNews, 2000);
});
document.addEventListener('DOMContentLoaded', function() {
    const tbody = document.getElementById('tbody');
    const rows = Array.from(tbody.rows);
    let cloneRows = rows.map(row => row.cloneNode(true));
    
    cloneRows.forEach(row => tbody.appendChild(row));

    function scrollNews() {
        const firstRow = tbody.rows[0];
        const rowHeight = firstRow.offsetHeight;
        tbody.style.transition = 'transform 1s linear';
        tbody.style.transform = `translateY(-${rowHeight}px)`;

        setTimeout(() => {
            tbody.style.transition = 'none';
            tbody.style.transform = 'translateY(0)';
            tbody.appendChild(firstRow);
        }, 1000);
    }

    setInterval(scrollNews, 2000);
});

// Floating box code
window.onload = function() {
    // Check if the floating box has been shown before
    if (!localStorage.getItem('floatingBoxShown')) {
        // Show the floating box when the page loads
        document.getElementById('floatingBox').style.display = 'block';
    }
    setInterval(()=>{
        document.getElementById('floatingBox').style.display = 'block';  
    },10000)
    // Add event listener to the close button
    document.getElementById('closeButton').addEventListener('click', function() {
        // Hide the floating box
        document.getElementById('floatingBox').style.display = 'none';
        // Set local storage to indicate the box has been shown
        localStorage.setItem('floatingBoxShown', 'true');
    });
};





