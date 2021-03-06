import { Message } from "discord.js";
import { Command } from "discord-akairo";

class PingCommand extends Command {
	constructor() {
		super("ping", {
			aliases: ["ping", "latenz"],
		});
	}

	exec(message: Message) {
		return message.reply(
			"Pong! \nLatenz: " + message.client.ws.ping + "ms"
		);
	}
}

module.exports = PingCommand;
