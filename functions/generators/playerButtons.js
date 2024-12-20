/** @format
 *
 * Fuego By Painfuego
 * Version: 6.0.0-beta
 * © 2024 1sT-Services
 */

const { ActionRowBuilder } = require("discord.js");

module.exports = (client, player, number = 5) => {
  const isPaused = player.shoukaku.paused;
  const state = isPaused ? `Play` : `Halt`;
  const autoplay = player.data.get("autoplay") ? "success" : "secondary";

  const row = new ActionRowBuilder();
  const btn = [
    new client.button()[`secondary`](`${player.guildId}previous`, `Back`),
    new client.button()[`secondary`](`${player.guildId}play_pause`, state),
    new client.button()[`secondary`](`${player.guildId}skip`, `Skip`),
    new client.button()[autoplay](`${player.guildId}autoplay`, "Auto"),
    new client.button()[`danger`](`${player.guildId}stop`, `✖`),
  ];

  switch (number) {
    case 5:
      row.addComponents(btn[0], btn[1], btn[2], btn[3], btn[4]);
      break;
    case 4:
      row.addComponents(btn[0], btn[1], btn[2], btn[4]);
      break;
    case 3:
      row.addComponents(btn[1], btn[2], btn[4]);
      break;
  }

  return [row];
};
