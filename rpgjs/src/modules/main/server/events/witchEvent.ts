import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-witch', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class WitchEvent extends RpgEvent {
    onInit() {
        this.setGraphic('witch_001');
    }
    async onAction(player: RpgPlayer) {
        let currentQuest = player.getVariable('CURRENT_QUEST');

        if (currentQuest) {
            if (currentQuest === 'questBasicDataTypes') {
                await player.showText(
                    'Mein Vater will nur das Ganze sehen.',
                    { talkWith: this }
                );
                await player.showText(
                    'Ich, die Zahlen-Hexe mag dagegen die kleinen Details von allen Dezimalzahlen:',
                    { talkWith: this }
                );
                await player.showText(
                    'float, double und decimal. Ich liebe sie alle.',
                    { talkWith: this }
                );
            }
        }
    }
}