import { RpgEvent, EventData, RpgPlayer, Move, Speed } from '@rpgjs/server'
import { Constants } from '../constants';

@EventData({
    name: 'EV-beachGuy2', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class BeachGuy2Event extends RpgEvent {
    onInit() {
        this.setGraphic('beach_guy_002');

        this.infiniteMoveRoute([
            Move.tileRight(6),
            Move.tileDown(4),
            Move.tileLeft(6),
            Move.tileUp(4)
        ]);
    }

    async onPlayerTouch(player: RpgPlayer) {
        let currentQuest = player.getVariable(Constants.PlayerVarCurrentQuest);

        if (currentQuest) {
            if (currentQuest === Constants.QuestControlFlow) {
                await player.showText(
                    'Als Fan von while-Schleifen laufe ich solange im Kreis, solange mir nicht übel ist. Mittlerweile ist mir aber übel. Ich höre jetzt besser damit auf.',
                    { talkWith: this }
                );

                this.breakRoutes(true);
            }
        }
    }
}