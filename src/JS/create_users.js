const list = document.getElementById('allusers');

const users = {};

const streamersArray = [
	'Fudro',
	'LeGoyave',
	'Imunicorn',
	'Leo',
	'Bonus',
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
	users[streamer.toLowerCase()] = 0;
});

function createDiv(text) {
	const div = document.createElement('div');

	div.classList.add('w3-light-grey');
	div.classList.add('w3-round-large');

	const innerDiv = document.createElement('div');

	innerDiv.classList.add('w3-container');
	innerDiv.classList.add('w3-round-large');
	innerDiv.classList.add('shadow');

	innerDiv.style.background = getRandomGradient();
	innerDiv.style.width = users[text] + "%";

	innerDiv.id = text;

	innerDiv.textContent = "!" + text;

	div.appendChild(innerDiv);

	return div;
}

function displayUsers() {
	const sortedUsers = Object.fromEntries(
		Object.entries(users).sort((a, b) => b[1] - a[1])
	);
	list.innerHTML = "";
	for (const user in sortedUsers) {
		if (sortedUsers[user] == -1) continue;
		const div = createDiv(user);
		list.appendChild(div);
	}
}

function updateUser(user, value) {
	const userLow = user.toLowerCase();
	if (!(userLow in users)) return;
	if (users[userLow] == -1) return;
	users[userLow] += value;
	displayUsers();
}

function removeUser(user) {
	if (!(user in users)) return;
	if (users[user] == -1) return;
	users[user] = -1;
	displayUsers();
}

displayUsers();