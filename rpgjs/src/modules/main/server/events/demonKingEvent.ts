import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server';
import { Constants } from '../constants';

@EventData({
    name: 'EV-demonKingNeko',
    hitbox: {
        width: 32,
        height: 16
    }
})
export class DemonKingEvent extends RpgEvent {

    onInit() {
        this.setGraphic('demon_king_neko_001');
    }

    async onAction(player: RpgPlayer) {
        if (!player.getVariable(Constants.PlayerVarAfterIntroDream)) {
            await player.showText(
                'Wir, der mächtige Katzendämonenkönig, tragen Euch auf, eine Programmiersprache zu lernen. So gütig wie Wir sind, dürft Ihr von Uns aus C# lernen. Hahaha!',
                { talkWith: this }
            );

            player.setVariable(Constants.PlayerVarAfterIntroDream, true);
            player.setVariable(Constants.PlayerVarCurrentQuest, Constants.QuestBasicDataTypes);

            player.changeMap('dataForestMap');
        } else {
            let currentQuest = player.getVariable(Constants.PlayerVarCurrentQuest);

            if (currentQuest) {
                if (currentQuest === Constants.QuestBasicDataTypes) {
                    let result = await this.basicDataTypesQuestQuiz(player);

                    if (result) {
                        player.setVariable(Constants.PlayerVarCurrentQuest, Constants.QuestReturnToCastle);
                    }
                }
            }
        }
    }

    async basicDataTypesQuestQuiz(player: RpgPlayer): Promise<boolean> {
        let result = await this.askQuizQuestion(
            player,
            'Was für Daten sind byte, short, int und long?',
            'int',
            [
                { text: 'Ganzzahlen', value: 'int' },
                { text: 'Dezimalzahlen', value: 'decimal' },
                { text: 'Text', value: 'string' },
                { text: 'Wahrheitswerte', value: 'bool' }
            ]
        );

        if (!result) {
            return false;
        }

        result = await this.askQuizQuestion(
            player,
            'Was für Daten sind in einem string?',
            'string',
            [
                { text: 'Ganzzahlen', value: 'int' },
                { text: 'Dezimalzahlen', value: 'decimal' },
                { text: 'Text', value: 'string' },
                { text: 'Wahrheitswerte', value: 'bool' }
            ]
        );

        if (!result) {
            return false;
        }

        result = await this.askQuizQuestion(
            player,
            'Was für Daten sind float, double und decimal?',
            'decimal',
            [
                { text: 'Ganzzahlen', value: 'int' },
                { text: 'Dezimalzahlen', value: 'decimal' },
                { text: 'Text', value: 'string' },
                { text: 'Wahrheitswerte', value: 'bool' }
            ]
        );

        if (!result) {
            return false;
        }

        result = await this.askQuizQuestion(
            player,
            'Was für Daten sind in bool?',
            'bool',
            [
                { text: 'Ganzzahlen', value: 'int' },
                { text: 'Dezimalzahlen', value: 'decimal' },
                { text: 'Text', value: 'string' },
                { text: 'Wahrheitswerte', value: 'bool' }
            ]
        );

        if (result) {
            await player.showText(
                'Argh, alle Fragen richtig beantwortet. Nun gut, Ihr dürft den Wald verlassen.',
                { talkWith: this }
            );

            return true;
        } else {
            return false;
        }
    }

    async askQuizQuestion(player: RpgPlayer, question: string, correctChoiceValue: string, choices: Array<{ text: string, value: any }>) : Promise<boolean> {
        let choice = await player.showChoices(
            question,
            choices,
            { talkWith: this }
        );

        if (choice?.value === correctChoiceValue) {
            await player.showText(
                'Grrr, korrekt.',
                { talkWith: this }
            );

            return true;
        } else {
            await player.showText(
                'Hahaha, falsch!',
                { talkWith: this }
            );

            return false;
        }
    }
}