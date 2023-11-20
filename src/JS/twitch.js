const tw = new tmi.Client({ channels: [ 'lebojo' ]});

tw.connect().catch(console.error);

tw.on('message', (channel, tags, message, self) => {
	if (self) return;
	
	console.log(tags['custom-reward-id']);

	let sender = tags['display-name'].toLowerCase();
	let add = 1;
	if(tags['custom-reward-id']){
		if(tags['custom-reward-id'] == '7e3dbe23-5294-4579-b66c-d57ff6a0d8ef'){
			add = 5;
		}
	}
	if (message.charAt(0) != '!' || (message.includes(" ") && sender != 'lebojo')) return;

	if (message.includes("!remove")) {
		removeUser(message.split(" ")[1]);
		console.log("remove" + message.split(" ")[1]);
		return;
	}
	let guy = message.substring(1);
	updateUser(guy, add);
});