let arrayOfPosts;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = () => {
	getPosts();
};

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
	fetch("https://randomuser.me/api/?results=12")
		.then((res) => res.json())
		.then((users) => {
			arrayOfPosts = users.results;
			//displays posts when page loads
			displayPost();
		})
		//added to fetch error
		.then((posts) => (arrayOfPosts = posts))
		.catch((err) => console.log(`Error,  ${err}`));
};

// this function logs the results in your browsers console
const consolePosts = () => {
	console.log(arrayOfPosts);
};

const displayPost = () => {
	const allPosts = document.getElementById("Contacts");
	arrayOfPosts.map((user) => {
		console.log(arrayOfPosts[0]);
		// create a list element
		const li = document.createElement("li");
		// create an image element
		const showImg = document.createElement("img");
		// display pic with .src this is essentially <img src="url">
		showImg.src = user.picture.thumbnail;
		// creates the text area for the first and last name.
		const text = document.createTextNode(
			`${user.name.last}, ${user.name.first}`
		);
		//append inserts the specified content
		allPosts.append(li);
		li.appendChild(showImg);
		li.appendChild(text);

		//creates HTML button
		const button = document.createElement("button");
		//"names" the button
		button.innerHTML = "more info";
		//onclick adds the additional contact information
		button.onclick = function() {
			const text2 = document.createTextNode(
				`  ${user.cell}, ${user.phone}, ${(user.location.street.number,
				user.location.street.name)}, ${user.location.city}, ${
					user.location.state
				}, ${user.location.postcode}`
			);
			//append inserts the specified content
			li.appendChild(text2);
		};
		//append inserts the specified content
		li.appendChild(button);
	});
};
