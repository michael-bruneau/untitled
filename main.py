import robotbit
import sonar

basic.show_icon(IconNames.HAPPY)

while True:
    if input.button_is_pressed(Button.A):
        while True:
            distance = sonar.ping(
                DigitalPin.P1, 
                DigitalPin.P2, 
                PingUnit.CENTIMETERS
            )
            basic.show_number(distance)
            basic.show_string("cm")
            if distance >= 11:
                robotbit.stp_car_move(10, 42)
                basic.pause(500)
            else:
                robotbit.stp_car_move(-10, 42)
                basic.pause(500)
                robotbit.stp_car_turn(90, 42, 125)
                basic.pause(500)
