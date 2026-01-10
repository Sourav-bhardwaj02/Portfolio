
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
fragment: (uv, mouse) => {
  const dx = uv.x - mouse.x;
  const dy = uv.y - mouse.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  const displacement = smoothStep(0.4, 0.0, len);
  return texture(uv.x + displacement * dx, uv.y + displacement * dy);
}
