import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { Constants } from '../constants';

@EventData({
    name: 'EV-beachNeko',
    hitbox: {
        width: 32,
        height: 16
    }
})
export class BeachNekoEvent extends RpgEvent {

    onInit() {
        this.setGraphic('beach_neko_001');
    }

    async onAction(player: RpgPlayer) {
        let currentQuest = player.getVariable(Constants.PlayerVarCurrentQuest);

        if (currentQuest) {
            if (currentQuest === Constants.QuestControlFlow) {
                let choice = await player.showChoices(
                    'Was macht eine if-Schleife so wunderbar aus?',
                    [
                        { text: 'Damit kann man wunderbar mehrfach dieselbe Arbeit wiederholen.', value: false },
                        { text: 'Unsinn, es gibt keine if-Schleife!', value: true }
                    ],
                    { talkWith: this }
                );

                if (choice && choice.value) {
                    await player.showText(
                        'Mein Herr wollte sich in die Berge aufmachen, weil dort die Fische nicht so salzig schmecken wie am Meer.',
                        { talkWith: this }
                    );

                    player.setVariable(Constants.PlayerVarCurrentQuest, Constants.QuestBasicStatements);
                }
            }
        }
    }
}