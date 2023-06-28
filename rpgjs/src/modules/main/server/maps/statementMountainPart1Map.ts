import { RpgMap, MapData } from '@rpgjs/server';

@MapData({
    id: 'statementMountainPart1Map',
    file: require('./tmx/statement_mountain_part1.tmx'),
    name: 'Statement Mountain Part 1',
    events: [ ]
})
export class statementMountainPart1Map extends RpgMap { }