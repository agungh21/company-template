// side nav bar mobilenav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);
// end

// slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: true, // tombol slider
    height: 500, // tinggi slider
    transition: 600, // durasi text
    interval: 3000 // durasi gambar
});

// parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// material boxed
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 50
});