function toggleMenu(){
	let navigation = document.querySelector('.nav');
	let toggle = document.querySelector('.toggle');
	navigation.classList.toggle('active');
	toggle.classList.toggle('active');
}

function userArea(){
	// let userArea = document.querySelector('.userArea');
	// userArea.classList.toggle('active');
	let userDetail = document.querySelector('.userclick');
	userDetail.classList.toggle('active')
}

// function toggleMenu(){
// 	const menuToggle = document.querySelector('.toggle');
// 	const navigation = document.querySelector('.navigation');
// 	menuToggle.classList.toggle('active');
// 	navigation.classList.toggle('active');
// }