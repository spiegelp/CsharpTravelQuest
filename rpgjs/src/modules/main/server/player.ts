import { RpgPlayer, RpgPlayerHooks, Control, Components } from '@rpgjs/server'

export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.name = 'Lynn'
        player.setGraphic('princess_001')
        player.setHitbox(16, 16)
        player.setComponentsTop(Components.text('{name}'))
        player.changeMap('simplemap')
    },
    /*onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },*/
    async onJoinMap(player: RpgPlayer) {
        if (player.getVariable('AFTER_INTRO')) {
            return;
        }

        await player.showText('Prinzessin Lynn steckt in einem schlimmen Albtraum.');
        await player.showText('Der hinterhältige Katzendämonenkönig sucht sie heim.');
        
        player.setVariable('AFTER_INTRO', true);
    }
}