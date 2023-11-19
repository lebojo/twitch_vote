const tw = new tmi.Client({ channels: [ 'lebojo' ]});

tw.connect().catch(console.error);

tw.on('message', (channel, tags, message, self) => {
	if (self) return;
	if (message.charAt(0) != '!' || message.includes(" ")) return;

	if (message == "!remove") {
		displayUsers();
		return;
	}

	// Remove the ! user only if Bojo is the one who sent the message

	let guy = message.substring(1);
	updateUser(guy, 1);
});