import { Spritesheet, Presets } from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    images: {
        princess_001: require('./assets/princess_001.png'),
        demon_king_neko_001: require('./assets/demon_king_neko_001.png'),
    },
    width: 96,
    height: 128,
    ...RMSpritesheet(3, 4)
})
export class Characters { }