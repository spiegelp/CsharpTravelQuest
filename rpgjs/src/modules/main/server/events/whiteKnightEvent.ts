import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { Constants } from '../constants';

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
        let currentQuest = player.getVariable(Constants.PlayerVarCurrentQuest);

        if (currentQuest) {
            if (currentQuest === Constants.QuestReturnToCastle) {
                await player.showText(
                    'Seid Ihr wohlauf, Eure Hoheit? Ich geleite Euch sicher zum alten Schloss zurück.',
                    { talkWith: this }
                );

                player.changeMap('castleFloor1Map');
            }
        }
    }
}