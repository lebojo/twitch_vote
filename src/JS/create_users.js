const list = document.getElementById('allusers');

const users = {};

const streamersArray = [
	'Fudro',
	'LeGoyave',
	'Imunicorn',
	'Leo',
	'Audwui',
	'Baty',
	'Bboxingame',
	'Dine',
	'EasyNova',
	'EENOW',
	'FredFuxx',
	'GBRL',
	'Ragy',
	'Lenchanteur',
	'LoryChoupi',
	'MogiBlue',
	'Mimil',
	'Nottos',
	'Okamix',
	'Parabellum',
	'PeakyChan',
	'PoupouLeSuisse',
	'Ronix',
	'LeRonron',
	'Shiinro',
	'Shinkuro',
	'Shivas',
	'SonicBlow',
	'SuniStream',
	'Tsunadida',
	'Vostfrere'
];  

streamersArray.forEach(streamer => {
	users[streamer.toLocaleLowerCase()] = {
		'points': 0,
		'color': getRandomGradient(),
		'display': streamer
	};
});

function createDiv(text) {
	const div = document.createElement('div');

	div.classList.add('w3-light-grey');
	div.classList.add('w3-round-large');

	const innerDiv = document.createElement('div');

	innerDiv.classList.add('w3-container');
	innerDiv.classList.add('w3-round-large');
	innerDiv.classList.add('shadow');

	innerDiv.style.background = users[text].color;
	innerDiv.style.width = users[text].points + "%";

	innerDiv.id = text;

	innerDiv.textContent = "!" + users[text].display + "(" + users[text].points + ")";

	div.appendChild(innerDiv);

	return div;
}

function displayUsers() {
	const sortedUsers = Object.fromEntries(
		Object.entries(users).sort((a, b) => b[1].points - a[1].points)
	);
	let i = 0;
	list.innerHTML = "";
	for (const user in sortedUsers) {
		if (sortedUsers[user].points == -1) continue;
		const div = createDiv(user);
		list.appendChild(div);
		i++;
	}
	document.getElementById('score').innerText = (streamersArray.length - i) + "/" + streamersArray.length;
}

function updateUser(user, value) {
	const userLow = user.toLowerCase();
	if (!(userLow in users)) return;
	if (users[userLow].points == -1) return;
	users[userLow].points += value;
	displayUsers();
}

function removeUser(user) {
	const userLow = user.toLowerCase();
	if (!(userLow in users)) return;
	if (users[userLow].points == -1) return;
	users[userLow].points = -1;
	displayUsers();
}

displayUsers();