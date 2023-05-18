import { Spritesheet, Presets } from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    images: {
        princess_001: require('./assets/princess_001.png'),
        prince_001: require('./assets/prince_001.png'),
        demon_king_neko_001: require('./assets/demon_king_neko_001.png'),
        bard_001: require('./assets/bard_001.png'),
        skeleton_001: require('./assets/skeleton_001.png'),
        witch_001: require('./assets/witch_001.png'),
        wizard_001: require('./assets/wizard_001.png'),
        maid_001: require('./assets/maid_001.png')
    },
    width: 96,
    height: 128,
    ...RMSpritesheet(3, 4)
})
export class Characters { }