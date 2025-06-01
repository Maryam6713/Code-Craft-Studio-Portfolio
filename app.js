const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
// //==============audio functionality=============//
// window.addEventListener("load", () => {
//       setTimeout(() => {
//         const audio = document.getElementById("introAudio");

//         // Try playing audio
//         audio.play().then(() => {
//           console.log("Audio played successfully");
//         }).catch((err) => {
//           console.warn("Autoplay blocked. Waiting for user interaction...");

//           // Play after first user click
//           const playOnClick = () => {
//             audio.play();
//             document.removeEventListener("click", playOnClick);
//           };

//           document.addEventListener("click", playOnClick);
//         });
//       }, 2000);
//     });