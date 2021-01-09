// let root = document.documentElement;

// root.addEventListener("mousemove", e => {
//     if (e.clientY < 101) {
//         root.style.setProperty('--humid-height', e.clientY);
//     }
// });

var red_slider = document.getElementById('red_slider'),
    red_slider_value = document.getElementById('red_slider-value');
red_slider.oninput = function () {
    red_slider_value.innerHTML = this.value;
}

var green_slider = document.getElementById('green_slider'),
    green_slider_value = document.getElementById('green_slider-value');
green_slider.oninput = function () {
    green_slider_value.innerHTML = this.value;
}

var blue_slider = document.getElementById('blue_slider'),
    blue_slider_value = document.getElementById('blue_slider-value');
blue_slider.oninput = function () {
    blue_slider_value.innerHTML = this.value;
}