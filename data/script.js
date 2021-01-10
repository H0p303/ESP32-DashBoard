let root = document.documentElement;
//Signal Controll

root.addEventListener("mousemove", e => {
    if (e.clientY < 100) {      //X < -70dBm
        root.style.setProperty('--R_signal', 255);
        root.style.setProperty('--G_signal', 0);
        root.style.setProperty('--B_signal', 0);
    }
    else if (100 < e.clientY && e.clientY < 200) {
        //-50dBm < X < -65dBm
        root.style.setProperty('--R_signal', 238);
        root.style.setProperty('--G_signal', 255);
        root.style.setProperty('--B_signal', 0);
    }
    else if (200 < e.clientY) { //X > -50dBm
        root.style.setProperty('--R_signal', 0);
        root.style.setProperty('--G_signal', 255);
        root.style.setProperty('--B_signal', 0);
    }
});


//Slider Controll

var red_slider = document.getElementById('red_slider'),
    red_slider_value = document.getElementById('red_slider-value');
red_slider.oninput = function () {
    red_slider_value.innerHTML = this.value;
    root.style.setProperty('--red', this.value);
}

var green_slider = document.getElementById('green_slider'),
    green_slider_value = document.getElementById('green_slider-value');
green_slider.oninput = function () {
    green_slider_value.innerHTML = this.value;
    root.style.setProperty('--green', this.value);
}

var blue_slider = document.getElementById('blue_slider'),
    blue_slider_value = document.getElementById('blue_slider-value');
blue_slider.oninput = function () {
    blue_slider_value.innerHTML = this.value;
    root.style.setProperty('--blue', this.value);
}