import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-bard', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class BardEvent extends RpgEvent {
    onInit() {
        this.setGraphic('bard_001');
    }
    async onAction(player: RpgPlayer) {
        let currentQuest = player.getVariable('CURRENT_QUEST');

        if (currentQuest) {
            if (currentQuest === 'questBasicDataTypes') {
                await player.showText(
                    'Als der weltberühmte Dichter drücke ich mich nur mit den wohlüberlegtesten Worten aus.',
                    { talkWith: this }
                );
                await player.showText(
                    'Meine Texte sind natürlich in einem string verfasst.',
                    { talkWith: this }
                );
            }
        }
    }
}