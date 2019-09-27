fetch('https://api.unsplash.com/photos/random/?count=10&client_id=35b40e50487743e2de0fb857a76713f765d0115b77b7bb3ea7fa68180a3ad7d8') 
   .then(response => response.json())
   .then(data => {
     data.forEach(function(image, i) {
       document.querySelector("#neoscape-slide" + (i+1)).innerHTML =  ` 
					<img src="${image.urls.regular}" class="img-fluid" />
					<p class="unsplash-author-info">
						<a href="${image.links.html}" class="unsplash-author-link">Photo by ${image.user.name}</a> on <a href="https://unsplash.com/" class="unsplash-link" target="_blank">Unsplash</a>
					</p>
		`;
    });
 });