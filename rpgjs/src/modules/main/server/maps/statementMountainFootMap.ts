import { RpgMap, MapData } from '@rpgjs/server';

@MapData({
    id: 'statementMountainFootMap',
    file: require('./tmx/statement_mountain_foot.tmx'),
    name: 'Foot of Statement Mountain',
    events: [ ]
})
export class statementMountainFootMap extends RpgMap { }