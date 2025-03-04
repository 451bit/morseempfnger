input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (modus == 0) {
        modus = 1
    } else {
        modus = 0
    }
})
radio.onReceivedString(function (receivedString) {
    if (modus == 1) {
        basic.showString(receivedString)
    }
})
let modus = 0
modus = 0
let zustand = ""
radio.setTransmitPower(7)
basic.forever(function () {
    if (modus == 0) {
        basic.setLedColor(0x00ff00)
        radio.sendString("T")
        basic.showString("T")
        basic.pause(500)
        radio.sendString("e")
        basic.showString("e")
        basic.pause(500)
        radio.sendString("s")
        basic.showString("s")
        basic.pause(500)
        radio.sendString("t")
        basic.showString("t")
        basic.pause(500)
    } else {
        basic.setLedColor(0x0000ff)
    }
})
