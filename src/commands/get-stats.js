const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('get-stats')
		.setDescription('Get gif battle stats')
		.addUserOption((option) => option.setName('user-1')
			.setDescription('The first user')
			.setRequired(true))
		.addUserOption((option) => option.setName('user-2')
			.setDescription('The second user')
			.setRequired(true))
		.addStringOption((option) => option.setName('gif-url')
			.setDescription('The url for the battle')
			.setRequired(true))
		.setContexts(InteractionContextType.PrivateChannel)
		.setIntegrationTypes(ApplicationIntegrationType.UserInstall),
	async execute(interaction) {
		const user1 = interaction.options.getUser('user-1');
		console.log(user1);
		const user2 = interaction.options.getUser('user-2');
		console.log(user2);
		const gifUrl = interaction.options.getString('gif-url');
		console.log(gifUrl);

		const chatLog = interaction;
		console.log(chatLog);
		await interaction.reply(
			`test 2 ${user1} vs ${user2} = `,
		);
	},
};