import { RpgEvent, EventData, RpgPlayer, Speed, Move } from '@rpgjs/server'
import { Constants } from '../constants';

@EventData({
    name: 'EV-beachGuy1', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class BeachGuy1Event extends RpgEvent {
    onInit() {
        this.setGraphic('beach_guy_001');
    }
    async onAction(player: RpgPlayer) {
        let currentQuest = player.getVariable(Constants.PlayerVarCurrentQuest);

        if (currentQuest) {
            if (currentQuest === Constants.QuestControlFlow) {
                await player.showText(
                    'Wie in einer for-Schleife mache ich mehrmals hintereinander zufällig einen Schritt: 1, 2, 3 ... solange 10 noch nicht erreicht ist.',
                    { talkWith: this }
                );

                this.speed = Speed.Slow;
                this.moveRoutes([Move.tileRandom(10)]);
            }
        }
    }
}