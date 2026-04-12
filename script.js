const container1 = document.getElementById('container-1');
const container2 = document.getElementById('container-2');
const container3 = document.getElementById('container-3');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const video1 = document.getElementById('video-1');
const video2 = document.getElementById('video-2');

if (btn1 && container1 && container2) {
    btn1.addEventListener('click', (event) => {
        event.preventDefault();
        container1.style.display = 'none';
        container2.style.display = 'block';
        container2.style.animation = 'fadeIn 1s ease-in-out';
        container2.style.opacity = '1';
    });
}

if (btn2 && container2 && container3) {
    btn2.addEventListener('click', (event) => {
        event.preventDefault();
        container2.style.display = 'none';
        container3.style.display = 'block';
        container3.style.animation = 'fadeIn 1s ease-in-out';
        container3.style.opacity = '1';
    });
}

if (btn3 && container3 && container1) {
    btn3.addEventListener('click', (event) => {
        event.preventDefault();
        container3.style.display = 'none';
        container1.style.display = 'block';
        container1.style.animation = 'fadeIn 1s ease-in-out';
        container1.style.opacity = '1';
    });
}

video1.volume = 0.04;
video2.volume = 0.04;

