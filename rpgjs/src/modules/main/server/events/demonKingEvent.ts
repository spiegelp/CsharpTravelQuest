import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-demonKingNeko', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class DemonKingEvent extends RpgEvent {
    onInit() {
        this.setGraphic('demon_king_neko_001');
    }
    async onAction(player: RpgPlayer) {
        if (!player.getVariable('AFTER_INTRO_DREAM')) {
            await player.showText(
                'Wir, der mächtige Katzendämonenkönig, tragen Euch auf, eine Programmiersprache zu lernen.',
                { talkWith: this }
            );
            await player.showText(
                'So gütig wie Wir sind, dürft Ihr von Uns aus C# lernen. Hahaha!',
                { talkWith: this }
            );

            player.setVariable('AFTER_INTRO_DREAM', true);
            player.setVariable('CURRENT_QUEST', 'questBasicDataTypes');

            player.changeMap('dataForestMap');
        }
    }
}