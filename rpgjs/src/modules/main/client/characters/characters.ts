import { Spritesheet, Presets } from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    images: {
        princess_001: require('./assets/princess_001.png'),
        princess_003: require('./assets/princess_003.png'),
        princess_005: require('./assets/princess_005.png'),
        princess_006: require('./assets/princess_006.png'),
        princess_007: require('./assets/princess_007.png'),
        prince_001: require('./assets/prince_001.png'),
        demon_king_neko_001: require('./assets/demon_king_neko_001.png'),
        bard_001: require('./assets/bard_001.png'),
        skeleton_001: require('./assets/skeleton_001.png'),
        witch_001: require('./assets/witch_001.png'),
        wizard_001: require('./assets/wizard_001.png'),
        maid_001: require('./assets/maid_001.png'),
        knight_001: require('./assets/knight_001.png'),
        beach_guy_001: require('./assets/beach_guy_001.png'),
        beach_guy_002: require('./assets/beach_guy_002.png'),
        bikini_girl_001: require('./assets/bikini_girl_001.png'),
        bikini_girl_002: require('./assets/bikini_girl_002.png'),
        beach_neko_001: require('./assets/beach_neko_001.png'),
        soldier_003: require('./assets/soldier_003.png')
    },
    width: 96,
    height: 128,
    ...RMSpritesheet(3, 4)
})
export class Characters { }