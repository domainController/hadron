
const posts = [
{ title: 'Error 422', body: 'This is post one' },
{ title: 'Error 401', body: 'This is post two' }
];

function getPosts() {
	setTimeout(() => {
		let output = '';
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

getPosts()

function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 2000);
}

createPost({title: 'Output is not defined', body: "JSON formatting and others"}, getPosts);
