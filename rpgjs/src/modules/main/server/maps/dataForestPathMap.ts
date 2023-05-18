import { RpgMap, MapData } from '@rpgjs/server'
import { WhiteKnightEvent } from '../events/whiteKnightEvent';

@MapData({
    id: 'dataForestPathMap',
    file: require('./tmx/data_forest_path.tmx'),
    name: 'Data Forest Path',
    events: [
        WhiteKnightEvent
    ]
})
export class DataForestPathMap extends RpgMap { }