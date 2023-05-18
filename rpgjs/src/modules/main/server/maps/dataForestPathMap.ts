import { RpgMap, MapData } from '@rpgjs/server'

@MapData({
    id: 'dataForestPathMap',
    file: require('./tmx/data_forest_path.tmx'),
    name: 'Data Forest Path'
})
export class DataForestPathMap extends RpgMap { }