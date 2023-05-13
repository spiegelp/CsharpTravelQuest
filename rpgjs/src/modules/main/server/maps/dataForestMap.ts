import { RpgMap, MapData } from '@rpgjs/server'
import { BardEvent } from '../events/bardEvent';
import { DemonKingEvent } from '../events/demonKingEvent';
import { SkeletonEvent } from '../events/skeletonEvent';
import { WitchEvent } from '../events/witchEvent';
import { WizardEvent } from '../events/wizardEvent';

@MapData({
    id: 'dataForestMap',
    file: require('./tmx/data_forest.tmx'),
    name: 'Data Forest',
    events: [
        BardEvent,
        SkeletonEvent,
        WitchEvent,
        WizardEvent,
        DemonKingEvent
    ]
})
export class DataForestMap extends RpgMap { }