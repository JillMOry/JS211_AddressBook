let arrayOfPosts;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = () => {
	getPosts();
};

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
	fetch("https://randomuser.me/api/?results=10")
		.then((res) => res.json())
		.then((users) => {
			arrayOfPosts = users.results;
		});
};

// this function logs the results in your browsers console
const consolePosts = () => {
	console.log(arrayOfPosts);
};

const displayPost = () => {
	const allPosts = document.getElementById("Contacts");
	arrayOfPosts.map((user) => {
		console.log(arrayOfPosts[0]);
		const li = document.createElement("li");
		const showImg = document.createElement("img");
		showImg.src = user.picture.thumbnail;
		const text = document.createTextNode(
			`${user.name.last}, ${user.name.first}`
		);
		allPosts.append(li);
		li.appendChild(showImg);
		li.appendChild(text);

		const button = document.createElement("button");
		button.innerHTML = "more info";
		button.onclick = function() {
			const text2 = document.createTextNode(
				`  ${user.cell}, ${user.phone}, ${(user.location.street.number,
				user.location.street.name)}, ${user.location.city}, ${
					user.location.state
				}, ${user.location.postcode}`
			);
			li.appendChild(text2);
		};
		li.appendChild(button);
	});
};

//
