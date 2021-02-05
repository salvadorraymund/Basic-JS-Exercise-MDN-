const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

const xxx = [
	"/Users/raysal/Documents/gallery-start/images/pic1.jpg",
	"/Users/raysal/Documents/gallery-start/images/pic2.jpg",
	"/Users/raysal/Documents/gallery-start/images/pic3.jpg",
	"/Users/raysal/Documents/gallery-start/images/pic4.jpg",
	"/Users/raysal/Documents/gallery-start/images/pic5.jpg",
];

for(let i = 0; i <= xxx.length - 1; i++){
	const newImage = document.createElement('img');
	newImage.setAttribute('src', xxx[i]);
	newImage.onclick = function(){
		displayedImage.setAttribute("src", xxx[i]);
	};
	thumbBar.appendChild(newImage);
};


/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
		var b = btn.getAttribute('class');
		if(b === 'dark'){
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = "rgba(0,0,0,0)";
		btn.setAttribute("class", "light");
	} else{
		btn.textContent = "Lighten";
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
		btn.setAttribute('class', "dark");
	};
	
};