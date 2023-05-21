import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { Constants } from '../constants';

@EventData({
    name: 'EV-bard', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class BardEvent extends RpgEvent {
    onInit() {
        this.setGraphic('bard_001');
    }
    async onAction(player: RpgPlayer) {
        let currentQuest = player.getVariable(Constants.PlayerVarCurrentQuest);

        if (currentQuest) {
            if (currentQuest === Constants.QuestBasicDataTypes) {
                await player.showText(
                    'Als der weltberühmte Dichter drücke ich mich nur mit den wohlüberlegtesten Worten aus. Meine Texte sind natürlich in einem string niedergeschrieben.',
                    { talkWith: this }
                );
            }
        }
    }
}