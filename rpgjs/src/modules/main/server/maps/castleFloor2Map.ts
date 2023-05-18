import { RpgMap, MapData } from '@rpgjs/server';
import { MaidEvent } from '../events/maidEvent';

@MapData({
    id: 'castleFloor2Map',
    file: require('./tmx/castle_floor2.tmx'),
    name: 'Castle Floor 2',
    events: [
        MaidEvent
    ]
})
export class CastleFloor2Map extends RpgMap { }