/** @format
 *
 * Fuego By Painfuego
 * Version: 6.0.0-beta
 * © 2024 1sT-Services
 */

module.exports = {
  name: "mention",
  run: async (client, message) => {
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////// Reply when bot is mentioned ////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    const embed = new client.embed()
      .thumb(client.user.displayAvatarURL())
      .title(`Hey dear, my prefix is \`${client.prefix}\``)
      .addFields({
        name: `More information`,
        value:
          `**${client.emoji.point}⠀For bot detail use : ${client.prefix}info\n` +
          `${client.emoji.point}⠀To get started use : ${client.prefix}help**\n`,
      })
      .setFooter({
        text: `By Immortality`,
      })
      .setTimestamp();
    await message.reply({ embeds: [embed] }).catch(() => {});
  },
};
