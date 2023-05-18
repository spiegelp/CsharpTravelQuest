import { RpgMap, MapData } from '@rpgjs/server';
import { PrinceEvent } from '../events/princeEvent';

@MapData({
    id: 'castleFloor1Map',
    file: require('./tmx/castle_floor1.tmx'),
    name: 'Castle Floor 1',
    events: [
        PrinceEvent
    ]
})
export class CastleFloor1Map extends RpgMap { }