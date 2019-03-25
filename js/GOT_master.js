(() => {
	console.log('fired');
	// variable stack 
	// grab the shields at the bottom of the page
	const shields     = document.querySelectorAll('.sigil-container'),
	      lightBox    = document.querySelector('.lightbox'),
	      video       = document.querySelector('video');
	      closeLB     = document.querySelector('.lightbox-close');
	      banners     = document.querySelector('#houseImages');

	function showLightbox(){
		//  grab the right video source
		debugger;
        // get the lowercase house name from the class list
		let targetHouse = this.className.split(" ")[1];

		//  make sure the names match - needs to be uppercase
		// start becomes start--> first make a capital S, then add ark (or any house name)
		let targetSrc =  targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetSrc}.mp4`;

		lightBox.classList.add('show-lightbox');
		video.load();
		video.play();
	}

	function hideLightbox(){
		lightBox.classList.remove('show-lightbox');
		// rewind the video to the begining 
		// and also pause it 
		video,currentTime = 0;
		video.pause();
	}

	function animateBanner() {
	const offSet = 600; 
	// this is the offerset / width of one image 

	// this is the total distance the images need to move as a pixel value
	// dataset .offset is coming from each shield we click on
	totalOffset = this.dataset.offset * offSet + "px";

	// set the style  (css will animate this for us)
	// banners.style.right = totalOffset;
	TweenMax.to(banners, 0.8, { right: totalOffset });
    }

	shields.forEach(shield => shield.addEventListener('click', showLightbox));
	// shields.forEach(shield => shield.addEventListener('click', animateBanner));

	video.addEventListener('ended', hideLightbox);
	closeLB.addEventListener('click', hideLightbox);
})();