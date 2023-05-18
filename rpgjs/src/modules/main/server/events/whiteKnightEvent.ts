import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-whiteKnight',
    hitbox: {
        width: 32,
        height: 16
    }
})
export class WhiteKnightEvent extends RpgEvent {

    onInit() {
        this.setGraphic('knight_001');
    }

    async onAction(player: RpgPlayer) {
        let currentQuest = player.getVariable('CURRENT_QUEST');

        if (currentQuest) {
            if (currentQuest === 'returnToCastle') {
                await player.showText(
                    'Seid Ihr wohlauf Eure Hoheit? Ich geleite Euch sicher zum Schloss zurück.',
                    { talkWith: this }
                );

                player.changeMap('castleFloor1Map');
            }
        }
    }
}