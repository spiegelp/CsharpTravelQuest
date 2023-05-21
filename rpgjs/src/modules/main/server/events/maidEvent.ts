import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { Constants } from '../constants';

@EventData({
    name: 'EV-maid',
    hitbox: {
        width: 32,
        height: 16
    }
})
export class MaidEvent extends RpgEvent {

    onInit() {
        this.setGraphic('maid_001');
    }

    async onAction(player: RpgPlayer) {
        let choice = await player.showChoices(
            'Ihr möchtet Euch umziehen, Eure Hoheit?',
            [
                { text: 'Alltägliches Kleid', value: Constants.PlayerOutfit.OutfitDefault },
                { text: 'Formelle Robe', value: Constants.PlayerOutfit.OutfitFormal },
                { text: 'Niedliches Kleid', value: Constants.PlayerOutfit.OutfitCute },
                { text: 'Rüstung', value: Constants.PlayerOutfit.OutfitArmor },
                { text: 'Badeanzug', value: Constants.PlayerOutfit.OutfitSwimsuit }
            ],
            { talkWith: this }
        );

        if (choice && choice.value) {
            Constants.PlayerOutfit.changeOutfit(player, choice.value);
        }
    }
}