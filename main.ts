input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.LongClick), function () {
    ZeitLetzterTastendruck = input.runningTime()
    if (zustand == "") {
        zustand = "T"
    }
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Click), function () {
    ZeitLetzterTastendruck = input.runningTime()
    if (zustand == "") {
        zustand = "e"
    } else if (zustand == "e") {
        zustand = "i"
    } else {
    	
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
        basic.pause(200)
        basic.showString("")
    }
})
let TimerPause = 0
let ZeitLetzterTastendruck = 0
let zustand = ""
let modus = 0
modus = 0
zustand = ""
radio.setTransmitPower(7)
basic.forever(function () {
    TimerPause = input.runningTime() - ZeitLetzterTastendruck
    if (modus == 0) {
        basic.setLedColor(0x00ff00)
        if (zustand != "" && TimerPause > 2000) {
            basic.setLedColor(0xff0000)
            radio.sendString(zustand)
            basic.showString(zustand)
            basic.pause(200)
            zustand = ""
            basic.showString(zustand)
            basic.setLedColor(0x00ff00)
        }
    } else {
        basic.setLedColor(0x0000ff)
    }
})
