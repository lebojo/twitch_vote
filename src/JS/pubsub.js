let twitchID = 'YOUR_ID_HERE'; //The id of the channel you want to listen to, and the token must be the owner of the channel
let twitchToken = 'YOUR_TOKEN_HERE'; // token witch scope: 'channel:read:redemptions'
let finalText = 'FINI'; // Final text

function readTokenFile() {
	try {
		const filePath = '../inc/token.JSON';
		return fetch(filePath)
			.then(response => {
				response.json().then(data => {
					twitchID = data['twitchID'];
					twitchToken = data['twitchToken'];
				});
			})
			.catch(error => {
				console.error('Error reading token file:', error);
				return null;
			});
	} catch (error) {
		console.error('Error reading token file:', error);
		return null;
	}
}

readTokenFile();

const ws = new WebSocket('wss://pubsub-edge.twitch.tv');
ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'LISTEN',
    data: {
      topics: [`channel-points-channel-v1.${twitchID}`],
      auth_token: twitchToken
    }
  }));
  console.log('Connexion WebSocket établie.');
};

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (message.type == 'MESSAGE') {
    const eventData = JSON.parse(message.data.message)['data']['redemption']['reward'];
	updateUser(eventData['title'], 5); // correct with good value
  }
};