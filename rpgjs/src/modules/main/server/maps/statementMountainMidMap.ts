import { RpgMap, MapData } from '@rpgjs/server';

@MapData({
    id: 'statementMountainMidMap',
    file: require('./tmx/statement_mountain_mid.tmx'),
    name: 'Middle of Statement Mountain',
    events: [ ]
})
export class statementMountainMidMap extends RpgMap { }