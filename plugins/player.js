/** @format
 *
 * Fuego By Painfuego
 * Version: 6.0.0-beta
 * © 2024 1sT-Services
 */

const { Connectors } = require("shoukaku");
const { Kazagumo, Plugins } = require("kazagumo");

module.exports = player = (client) => {
  client.manager = new Kazagumo(
    {
      plugins: [
        new (require("kazagumo-apple"))({
          countryCode: "us",
          imageWidth: 600,
          imageHeight: 900,
        }),
        new (require("kazagumo-filter"))(),
        new (require("kazagumo-deezer"))({
          playlistLimit: 20,
        }),
        new (require("kazagumo-spotify"))({
          searchLimit: 10,
          albumPageLimit: 1,
          searchMarket: "IN",
          playlistPageLimit: 1,
          clientId: client.config.spotify.id,
          clientSecret: client.config.spotify.secret,
        }),
        new Plugins.PlayerMoved(client),
      ],
      send: (guildId, payload, important) => {
        const guild = client.guilds.cache.get(guildId);
        if (guild) guild.shard.send(payload);
      },
      defaultSearchEngine: "youtube",
    },
    new Connectors.DiscordJS(client),
    [
      {
        name: 'Local',
          url: 'node.raidenbot.xyz:5501',
          auth: 'pwd',
          secure: false
      },
    ],
  );
};
