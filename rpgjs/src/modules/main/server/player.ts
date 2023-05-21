import { RpgPlayer, RpgPlayerHooks, RpgClassMap, RpgMap, RpgShape, Control, Components } from '@rpgjs/server';
import { Constants } from './constants';

export const player: RpgPlayerHooks = {

    onConnected(player: RpgPlayer) {
        player.name = 'Lynn';
        player.setGraphic('princess_001');
        player.setHitbox(16, 16);
        player.setComponentsTop(Components.text('{name}'));
        
        player.setVariable(Constants.PlayerVarCurrentOutfit, Constants.PlayerOutfit.OutfitDefault.id);

        player.changeMap('introIslandMap');
    },

    /*onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },*/

    async onJoinMap(player: RpgPlayer) {
        if (!player.getVariable(Constants.PlayerVarAfterIntroDream)) {
            await player.showText('Prinzessin Lynn steckt in einem schlimmen Albtraum fest. Der hinterhältige Katzendämonenkönig sucht sie heim.');
        } else {
            let currentQuest = player.getVariable(Constants.PlayerVarCurrentQuest);

            if (currentQuest) {
                if (currentQuest === Constants.QuestBasicDataTypes && player.getCurrentMap()?.id === 'dataForestMap') {
                    await player.showText('Spreche mit allen im Wald, um die grundlegenden Datentypen kennenzulernen. Der Katzendämonenkönig will dich nämlich darüber ausfragen.');
                }
            }
        }
    },

    onInShape(player: RpgPlayer, shape: RpgShape) {
        let type = shape.properties['type'];

        if (type) {
            if (type === 'changeMap') {
                let nextMapId = shape.properties['nextMapId'];
                let entryPointId = shape.properties['entryPointId'];

                if (nextMapId && entryPointId) {
                    player.changeMap(nextMapId, entryPointId);
                }
            } else if (type === 'teleport') {
                let entryPointId = shape.properties['entryPointId'];

                if (entryPointId) {
                    player.teleport(entryPointId);
                }
            }
        }
    },

    async canChangeMap(player: RpgPlayer, nextMap: RpgClassMap<RpgMap>): Promise<boolean> {
        if (player.getCurrentMap()?.id === 'dataForestMap' && player.getVariable(Constants.PlayerVarCurrentQuest) === Constants.QuestBasicDataTypes) {
            await player.showText('Löse zuerst das Quiz vom Katzendämonenkönig.');

            return false;
        } else if (player.getCurrentMap()?.id === 'dataForestPathMap' && player.getVariable(Constants.PlayerVarCurrentQuest) === 'castleFloor1Map') {
            await player.showText('Sprich mit dem Weißen Ritter, der dich sicher zurück zum Schloss geleiten wird.');

            return false;
        }

        return true;
    }
}