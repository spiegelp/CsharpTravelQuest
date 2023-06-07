import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-castleGuard', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class CastleGuardEvent extends RpgEvent {
    onInit() {
        this.setGraphic('soldier_003');
    }

    async onAction(player: RpgPlayer) {
        await player.showText(
            'Willkommen zurück, eure Hoheit.',
            { talkWith: this }
        );
    }
}