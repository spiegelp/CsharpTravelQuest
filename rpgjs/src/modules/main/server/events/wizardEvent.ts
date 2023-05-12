import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-wizard', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class WizardEvent extends RpgEvent {
    onInit() {
        this.setGraphic('wizard_001');
    }
    async onAction(player: RpgPlayer) {
        let currentQuest = player.getVariable('CURRENT_QUEST');

        if (currentQuest) {
            if (currentQuest === 'questBasicDataTypes') {
                await player.showText(
                    'Ich bin der Mathemagier und habe den Blick für das große Ganze.',
                    { talkWith: this }
                );
                await player.showText(
                    'Die Ganzzahlen byte, short, int und long sind meine Leidenschaft.',
                    { talkWith: this }
                );
            }
        }
    }
}