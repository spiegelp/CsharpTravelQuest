import { RpgMap, MapData } from '@rpgjs/server';
import { CastleGuardEvent } from '../events/castleGuardEvent';

@MapData({
    id: 'castlePathMap',
    file: require('./tmx/castle_path.tmx'),
    name: 'Castle Path',
    events: [
        CastleGuardEvent
    ]
})
export class CastlePathMap extends RpgMap { }