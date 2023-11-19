const tw = new tmi.Client({ channels: [ 'lebojo' ]});

tw.connect().catch(console.error);

tw.on('message', (channel, tags, message, self) => {
	if (self) return;
	
	let sender = tags['display-name'].toLowerCase();
	if (message.charAt(0) != '!' || (message.includes(" ") && sender != 'lebojo')) return;

	if (message == "!remove") {
		removeUser(message.split(" ")[1]);
		return;
	}
	let guy = message.substring(1);
	updateUser(guy, 1);
});