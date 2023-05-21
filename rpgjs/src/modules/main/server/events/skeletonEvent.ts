import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { Constants } from '../constants';

@EventData({
    name: 'EV-skeleton', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class SkeletonEvent extends RpgEvent {
    onInit() {
        this.setGraphic('skeleton_001');
    }
    async onAction(player: RpgPlayer) {
        let currentQuest = player.getVariable(Constants.PlayerVarCurrentQuest);

        if (currentQuest) {
            if (currentQuest === Constants.QuestBasicDataTypes) {
                await player.showText(
                    'Leben oder nicht leben. Was trifft auf mich wandelndes Skelett zu? Daher kann nur der bool zu mir passen. Lebe ich: true oder false?',
                    { talkWith: this }
                );
            }
        }
    }
}