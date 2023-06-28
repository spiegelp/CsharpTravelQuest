import { RpgPlayer } from "@rpgjs/server";
import { Constants } from "./constants";

export class PlayerOutfit {

    public readonly OutfitDefault = { id: 'outfitDefault', imageId: 'princess_001' };
    public readonly OutfitFormal = { id: 'outfitFormal', imageId: 'princess_005' };
    public readonly OutfitCute = { id: 'outfitCute', imageId: 'princess_003' };
    public readonly OutfitArmor = { id: 'outfitArmor', imageId: 'princess_006' };
    public readonly OutfitSwimsuit = { id: 'outfitSwimsuit', imageId: 'princess_007' };
    public readonly OutfitWinter = { id: 'outfitWinter', imageId: 'princess_010' };

    public changeOutfit(player: RpgPlayer, outfit: any) : void {
        player.setGraphic(outfit.imageId);
        player.setVariable(Constants.PlayerVarCurrentOutfit, outfit.id);
    }
}