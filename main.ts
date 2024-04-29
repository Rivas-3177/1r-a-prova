input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.soundLevel())
})
input.onButtonPressed(Button.B, function () {
    input.calibrateCompass()
    basic.showNumber(input.temperature())
})
basic.showString("START!")
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Target)
}
basic.clearScreen()
