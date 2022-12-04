const Discord = require("discord.js");
const fs = require("fs");
const config = require("../config.json");

module.exports = async(client, interaction) => {
	if(interaction.isChatInputCommand()) {
		if (!interaction.guild) return;

	for(let props of fs.readdirSync("./commands")) {
			const command = require(`../commands/${props}`);

			if(interaction.commandName.toLowerCase() === command.name.toLowerCase()) {

        		return command.run(client, interaction);

      		}
		}	
	}
}