const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('get-stats')
		.setDescription('Get gif battle stats'),
	async execute(interaction) {
		await interaction.reply(
			`This command was run by ${interaction.user.username}`,
		);
	},
};