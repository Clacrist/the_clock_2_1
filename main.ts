input.onButtonPressed(Button.A, function () {
    hours += 1
    if (minutes < 10) {
        TextTime = "" + hours + ":" + "0" + minutes
    } else {
        TextTime = "" + hours + ":" + minutes
    }
})
input.onButtonPressed(Button.B, function () {
    minutes += 1
    if (minutes < 10) {
        TextTime = "" + hours + ":" + "0" + minutes
    } else {
        TextTime = "" + hours + ":" + minutes
    }
})
let TextTime = ""
let minutes = 0
let hours = 0
hours = 0
minutes = 0
TextTime = "0:00"
basic.forever(function () {
    basic.showString(TextTime)
})
basic.forever(function () {
    basic.pause(60000)
    minutes += 1
    if (minutes > 59) {
        minutes = 0
        hours += 1
    }
    if (hours > 23) {
        hours = 0
    }
    if (minutes < 10) {
        TextTime = "" + hours + ":" + "0" + minutes
    } else {
        TextTime = "" + hours + ":" + minutes
    }
})
