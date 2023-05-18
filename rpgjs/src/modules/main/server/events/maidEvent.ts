import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

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
        //
    }
}