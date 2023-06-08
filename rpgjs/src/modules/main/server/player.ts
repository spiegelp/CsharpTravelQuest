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
        } else if (player.getCurrentMap()?.id === 'dataForestPathMap' && nextMap.id !== 'castleFloor1Map'
                && player.getVariable(Constants.PlayerVarCurrentQuest) === Constants.QuestReturnToCastle) {
            await player.showText('Sprich mit dem Weißen Ritter, der dich sicher zurück zum alten Schloss geleiten wird.');

            return false;
        } else if (player.getCurrentMap()?.id === 'castleFloor1Map' && player.getVariable(Constants.PlayerVarCurrentQuest) === Constants.QuestReturnToCastle) {
            await player.showText('Sprich zuerst mit deinem großen Bruder, dem Prinz.');

            return false;
        } else if (player.getCurrentMap()?.id === 'castleFloor1Map' && nextMap.id !== 'castleFloor2Map'
                && player.getVariable(Constants.PlayerVarCurrentQuest) === Constants.QuestControlFlow) {
            if (player.getVariable(Constants.PlayerVarCurrentOutfit) !== Constants.PlayerOutfit.OutfitSwimsuit.id) {
                await player.showText('Ziehe dir zuerst deinen Badeanzug an.');

                return false;
            } /*else {
                await player.showText('Sprich mit deinem großen Bruder.');

                return false;
            }*/
        } else if (player.getCurrentMap()?.id === 'controlFlowBeachMap' && player.getVariable(Constants.PlayerVarCurrentQuest) === Constants.QuestControlFlow) {
            await player.showText('Hole dir zuerst weitere Informationen von einem Handlanger des Katzendämonenkönigs ein.');

            return false;
        }

        return true;
    }
}