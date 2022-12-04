module.exports = {
	name: "ping",
	description: "Bot'un ping durumunu gör.",
	options: [],

	run: async(client, interaction) => {
		return interaction.reply({ content: "sa" })
	}
}