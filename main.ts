let distance: number;
basic.showIcon(IconNames.Happy)
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        while (true) {
            distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)
            basic.showNumber(distance)
            basic.showString("cm")
            if (distance >= 11) {
                robotbit.StpCarMove(10, 42)
                basic.pause(500)
            } else {
                robotbit.StpCarMove(-10, 42)
                basic.pause(500)
                robotbit.StpCarTurn(90, 42, 125)
                basic.pause(500)
            }
            
        }
    }
    
}
