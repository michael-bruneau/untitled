let distance: number;
/**  
Copyright (c) 2020 MTHS All rights reserved
Created by: Michael Bruneau
Created on: Nov 2023
This program drives car and stops before hitting wall

 */
//  setup
basic.showIcon(IconNames.Happy)
//  loop forever
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        while (true) {
            //  checking distance
            distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)
            basic.showNumber(distance)
            basic.showString("cm")
            //  if distance if 11 or greater move stepper moters 10 cm forward
            if (distance >= 11) {
                robotbit.StpCarMove(10, 42)
                basic.pause(500)
            } else {
                //  if stepper motor is 10 cm or less than 10 cm turn stepper motors 10 cm backward & turn 90 deegres
                robotbit.StpCarMove(-10, 42)
                basic.pause(500)
                robotbit.StpCarTurn(90, 42, 125)
                basic.pause(500)
            }
            
        }
    }
    
}
