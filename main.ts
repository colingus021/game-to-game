namespace SpriteKind {
    export const chest = SpriteKind.create()
    export const door2 = SpriteKind.create()
    export const door1 = SpriteKind.create()
    export const pet = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    info.stopCountdown()
    cat.setImage(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `)
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    cat.setImage(assets.tile`myTile3`)
    info.startCountdown(20)
})
info.onCountdownEnd(function () {
    game.over(false, effects.melt)
})
let cat: Sprite = null
for (let index = 0; index < 4; index++) {
    scene.setBackgroundColor(9)
}
game.splash("game done")
tiles.setTilemap(tilemap`level1`)
cat = sprites.create(assets.image`mySprite`, SpriteKind.Player)
controller.moveSprite(cat)
scene.cameraFollowSprite(cat)
info.setLife(10)
forever(function () {
    music.playMelody("E F G A G F E D ", 120)
})
