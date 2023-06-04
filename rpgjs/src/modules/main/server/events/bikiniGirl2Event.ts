import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { Constants } from '../constants';

@EventData({
    name: 'EV-bikiniGirl2', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class BikiniGirl2Event extends RpgEvent {
    onInit() {
        this.setGraphic('bikini_girl_002');
    }

    async onAction(player: RpgPlayer) {
        let currentQuest = player.getVariable(Constants.PlayerVarCurrentQuest);

        if (currentQuest) {
            if (currentQuest === Constants.QuestControlFlow) {
                await player.showText(
                    //'do-while-Schleifen arbeiten solange, bis eine Bedingungen nicht mehr erfüllt ist. Im Gegensatz zu while-Schleifen laufe sie aber immer mindestens einmal durch.',
                    'Bevor ich nach Hause gehe, spüle ich mir einmal die Füße ab. Wenn sie dann immer noch sandig sind, spüle ich sie nochmal.',
                    { talkWith: this }
                );

                await player.showText(
                    'Wie in einer do-while-Schleife: Solange die Bedingung erfüllt ist aber immer mindestens einmal.',
                    { talkWith: this }
                );
            }
        }
    }
}