module.exports = (client) => {

	client.on('message', msg => {

		const { id } = msg.channel;
		console.log(id);

	});

};