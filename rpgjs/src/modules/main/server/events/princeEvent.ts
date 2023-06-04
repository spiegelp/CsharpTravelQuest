import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { Constants } from '../constants';

@EventData({
    name: 'EV-prince',
    hitbox: {
        width: 32,
        height: 16
    }
})
export class PrinceEvent extends RpgEvent {

    onInit() {
        this.setGraphic('prince_001');
    }

    async onAction(player: RpgPlayer) {
        let currentQuest = player.getVariable(Constants.PlayerVarCurrentQuest);

        if (currentQuest) {
            if (currentQuest === Constants.QuestReturnToCastle) {
                await player.showText(
                    'Der hinterhältige Katzendämonenkönig ist scheinbar am Strand gesichtet worden. Ziehe dir oben in deinem Zimmer einen Badeanzug an und dann machen wir uns auf zum Strand.',
                    { talkWith: this }
                );

                player.setVariable(Constants.PlayerVarCurrentQuest, Constants.QuestControlFlow);
            } else if (currentQuest === Constants.QuestControlFlow) {
                await player.showText(
                    'Bist du bereit für den Strand?',
                    { talkWith: this }
                );
            }
        }
    }
}