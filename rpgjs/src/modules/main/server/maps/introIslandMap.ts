import { RpgMap, MapData } from '@rpgjs/server'
import { DemonKingEvent } from '../events/demonKingEvent';

@MapData({
    id: 'introIslandMap',
    file: require('./tmx/intro_island.tmx'),
    name: 'Intro Island',
    events: [
        DemonKingEvent
    ]
})
export class IntroIslandMap extends RpgMap { }