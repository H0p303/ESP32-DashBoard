let root = document.documentElement;

root.addEventListener("mousemove", e => {
    if (e.clientY < 101) {
        root.style.setProperty('--humid-height', e.clientY);
    }
});