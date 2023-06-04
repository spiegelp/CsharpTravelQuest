import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { Constants } from '../constants';

@EventData({
    name: 'EV-bikiniGirl1', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class BikiniGirl1Event extends RpgEvent {
    onInit() {
        this.setGraphic('bikini_girl_001');
    }

    async onAction(player: RpgPlayer) {
        let currentQuest = player.getVariable(Constants.PlayerVarCurrentQuest);

        if (currentQuest) {
            if (currentQuest === Constants.QuestControlFlow) {
                await player.showText(
                    'if - else if - else:',
                    { talkWith: this }
                );

                await player.showText(
                    'Wenn ich den rosa Bikini anhabe, sehe ich niedlich aus.',
                    { talkWith: this }
                );

                await player.showText(
                    'Wenn ich stattdessen den blauen anhabe, sehe ich richtig sportlich aus.',
                    { talkWith: this }
                );

                await player.showText(
                    'In allen sonstigen Farben sehe einfach nur hinreißend aus.',
                    { talkWith: this }
                );
            }
        }
    }
}