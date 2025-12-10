
const { REST, Routes } = require('discord.js');
const { clientId, token } = require('./config.local.json');

const commands = [
  require('./commands/get-stats.js').data.toJSON()
];

const rest = new REST().setToken(token);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(Routes.applicationCommands(clientId), { body: commands });

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();