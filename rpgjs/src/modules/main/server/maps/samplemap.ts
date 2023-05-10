import { RpgMap, MapData } from '@rpgjs/server'
import { DemonKingEvent } from '../events/demonKingEvent'

@MapData({
    id: 'simplemap',
    file: require('./tmx/simplemap.tmx'),
    name: 'Forest',
    events: [
        DemonKingEvent
    ]
})
export class SampleMap extends RpgMap { }