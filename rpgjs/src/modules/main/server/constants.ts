import { PlayerOutfit } from "./playerOutfit";

export class Constants {

    // player variables
    public static readonly PlayerVarAfterIntroDream = 'AFTER_INTRO_DREAM';
    public static readonly PlayerVarCurrentQuest = 'CURRENT_QUEST';
    public static readonly PlayerVarCurrentOutfit = 'CURRENT_OUTFIT';

    // quests
    public static readonly QuestBasicDataTypes = 'questBasicDataTypes';
    public static readonly QuestReturnToCastle = 'questReturnToCastle';
    public static readonly QuestControlFlow = 'questControlFlow';
    public static readonly QuestBasicStatements = 'questBasicStatements';

    // outfits
    public static readonly PlayerOutfit = new PlayerOutfit();
}