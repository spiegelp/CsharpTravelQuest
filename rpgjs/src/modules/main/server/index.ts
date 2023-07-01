import { RpgServer, RpgModule } from '@rpgjs/server';
import world from './maps/tmx/myworld.world';
import { SampleMap } from './maps/samplemap';
import { player } from './player';
import { DataForestMap } from './maps/dataForestMap';
import { IntroIslandMap } from './maps/introIslandMap';
import { DataForestPathMap } from './maps/dataForestPathMap';
import { CastleFloor1Map } from './maps/castleFloor1Map';
import { CastleFloor2Map } from './maps/castleFloor2Map';
import { ControlFlowBeachMap } from './maps/controlFlowBeachMap';
import { CastlePathMap } from './maps/castlePathMap';
import { statementMountainFootMap } from './maps/statementMountainFootMap';
import { statementMountainMidMap } from './maps/statementMountainMidMap';

@RpgModule<RpgServer>({ 
    player,
    worldMaps: [
        world
    ],
    maps: [
        SampleMap,
        IntroIslandMap,
        DataForestMap,
        DataForestPathMap,
        CastleFloor1Map,
        CastleFloor2Map,
        CastlePathMap,
        ControlFlowBeachMap,
        statementMountainFootMap,
        statementMountainMidMap
    ]
})
export default class RpgServerModuleEngine { }