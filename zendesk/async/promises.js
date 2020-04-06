
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
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		posts.push(post);

		const error = false;

		if(!error) {
			resolve();
		} else {
			reject('Error: Something went wrong');
		}
	}, 2000);
	});
}

createPost({ title: 'Error 404', body:'syntax problem'}).then(getPosts);