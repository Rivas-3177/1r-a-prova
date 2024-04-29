def on_logo_pressed():
    basic.show_number(input.light_level())
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_a():
    input.calibrate_compass()
    basic.show_arrow(ArrowNames.NORTH)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_number(input.sound_level())
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_number(input.temperature())
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_string("START!")
for index in range(4):
    basic.show_icon(IconNames.TARGET)
basic.clear_screen()