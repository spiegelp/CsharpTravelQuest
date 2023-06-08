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
                if (player.getCurrentMap()?.id === 'castleFloor1Map') {
                    if (player.getVariable(Constants.PlayerVarCurrentOutfit) === Constants.PlayerOutfit.OutfitSwimsuit.id) {
                        /*let choice = await player.showChoices(
                            'Bist du bereit für den Strand?',
                            [
                                { text: 'Ja, gehen wir los!', value: true },
                                { text: 'Gehen wir lieber noch nicht.', value: false }
                            ],
                            { talkWith: this }
                        );
    
                        if (choice && choice.value) {
                            player.changeMap("controlFlowBeachMap");
                        }*/

                        await player.showText(
                            'Bist du bereit für den Strand? Er liegt im Südwesten vom Schloss.',
                            { talkWith: this }
                        );
                    } else {
                        await player.showText(
                            'Ziehe dir zuerst deinen Badeanzug an.',
                            { talkWith: this }
                        );
                    }
                } else if (player.getCurrentMap()?.id === 'controlFlowBeachMap') {
                    await player.showText(
                        'Ich kann diesen Tunichtgut nirgendwo entdecken. Vielleicht ist hier irgendwo einer seiner Handlanger, der sich verplappert.',
                        { talkWith: this }
                    );
                }
            }
        }
    }
}