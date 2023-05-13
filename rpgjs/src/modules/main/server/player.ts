import { RpgPlayer, RpgPlayerHooks, Control, Components } from '@rpgjs/server'

export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.name = 'Lynn';
        player.setGraphic('princess_001');
        player.setHitbox(16, 16);
        player.setComponentsTop(Components.text('{name}'));
        player.changeMap('introIslandMap');
    },
    /*onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },*/
    async onJoinMap(player: RpgPlayer) {
        if (!player.getVariable('AFTER_INTRO')) {
            await player.showText('Prinzessin Lynn steckt in einem schlimmen Albtraum fest. Der hinterhältige Katzendämonenkönig sucht sie heim.');
            
            player.setVariable('AFTER_INTRO', true);

            return;
        } else {
            let currentQuest = player.getVariable('CURRENT_QUEST');

            if (currentQuest) {
                if (currentQuest === 'questBasicDataTypes') {
                    await player.showText('Spreche mit allen im Wald, um die grundlegenden Datentypen kennenzulernen. Der Katzendämonenkönig will dich nämlich darüber ausfragen.');
                }
            }
        }
    }
}