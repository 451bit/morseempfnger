input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.LongClick), function () {
    if (zustand == "") {
        zustand = "T"
    }
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Click), function () {
    if (zustand == "") {
        zustand = "e"
    }
})
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
let zustand = ""
let modus = 0
modus = 0
zustand = ""
radio.setTransmitPower(7)
basic.forever(function () {
    if (modus == 0) {
        basic.setLedColor(0x00ff00)
        radio.sendString(zustand)
        zustand = ""
    } else {
        basic.setLedColor(0x0000ff)
    }
})
