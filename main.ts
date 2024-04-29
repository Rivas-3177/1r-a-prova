input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    input.calibrateCompass()
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showNumber(input.soundLevel())
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showNumber(input.temperature())
})
basic.showString("START!")
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Target)
}
basic.clearScreen()
