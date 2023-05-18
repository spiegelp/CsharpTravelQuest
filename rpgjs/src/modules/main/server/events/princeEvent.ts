import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

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
        //
    }
}