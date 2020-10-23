module.exports = (client) => {
	client.on('ready', () => { require('./events')(client); });
	client.login(process.env.TOKEN);
};