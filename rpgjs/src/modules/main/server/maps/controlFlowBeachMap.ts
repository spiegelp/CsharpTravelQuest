import { RpgMap, MapData } from '@rpgjs/server';
import { BeachGuy1Event } from '../events/beachGuy1Event';
import { BeachGuy2Event } from '../events/beachGuyEvent2Event';
import { BikiniGirl1Event } from '../events/bikiniGirl1Event';
import { BikiniGirl2Event } from '../events/bikiniGirl2Event';
import { PrinceEvent } from '../events/princeEvent';
import { BeachNekoEvent } from '../events/beachNekoEvent';

@MapData({
    id: 'controlFlowBeachMap',
    file: require('./tmx/control_flow_beach.tmx'),
    name: 'Control Flow Beach',
    events: [
        BeachGuy1Event,
        BeachGuy2Event,
        BikiniGirl1Event,
        BikiniGirl2Event,
        PrinceEvent,
        BeachNekoEvent
    ]
})
export class ControlFlowBeachMap extends RpgMap { }