
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.local.json');

const commands = [
  require('./commands/get-stats.js').data.toJSON()
];

const rest = new REST().setToken(token);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();