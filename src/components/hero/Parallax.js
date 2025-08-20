export default function Parallax() {
    let foreground = document.getElementById('foreground');
    let goonies = document.getElementById('goonies');
    let background = document.getElementById('background');

    window.addEventListener('scroll', () => {
        let { scrollY } = window;

        background.style.top = (scrollY * -.4) + 'px';
        foreground.style.scale = (scrollY * 1) + '%';
        goonies.style.opacity = (scrollY * .5) + '%';
        
        // road.style.top = 0.5 * scrollY + 'px';
        // mountain.style.top = (150 +0.05 * scrollY) + 'px'; 
        // moon.style.left = 1.1 * scrollY + 'px';
        // sky.style.top = -1.2 * scrollY + 'px';
        // midnight.style.top = (120 + -1.5 * scrollY) + 'px';
    });
}