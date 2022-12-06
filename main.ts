input.onButtonPressed(Button.A, function () {
    muzica(127, 127)
})
input.onButtonPressed(Button.AB, function () {
    muzica(255, 500)
})
input.onButtonPressed(Button.B, function () {
    muzica(60, 60)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    muzica(200, 200)
})
function muzica (volum: number, tempo: number) {
    music.setVolume(volum)
    for (let index = 0; index < 4; index++) {
        music.playMelody("E B C5 A B G A F ", tempo)
    }
}
basic.forever(function () {
	
})
