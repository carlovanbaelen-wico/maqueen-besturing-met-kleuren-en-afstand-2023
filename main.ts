radio.onReceivedNumber(function (receivedNumber) {
    Item = receivedNumber
    if (Item == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (Item == 1) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    }
    if (Item == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    }
    if (Item == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 160)
    }
    if (Item == 4) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 160)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (Item == 5) {
        color.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (Item == 6) {
        color.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (Item == 7) {
        color.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (Item == 8) {
        color.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (Item == 9) {
        color.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
let Item = 0
let color: neopixel.Strip = null
radio.setGroup(1)
color = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
led.plot(2, 0)
