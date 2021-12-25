input.onGesture(Gesture.Shake, function () {
    udfald = randint(1, maxUdfald)
    if (udfald == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (udfald == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (udfald == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    } else if (udfald == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (udfald == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (udfald == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    } else if (udfald == 7) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
    } else if (udfald == 8) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (udfald == 9) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (udfald == 10) {
        basic.showLeds(`
            . # . # .
            . # # # .
            . . . . .
            . # # # .
            . # . # .
            `)
    } else {
        basic.showString("?")
    }
})
input.onButtonPressed(Button.A, function () {
    maxUdfald = 6
    basic.showString("" + (maxUdfald))
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    maxUdfald = 10
    basic.showString("" + (maxUdfald))
    basic.pause(500)
    basic.clearScreen()
})
let udfald = 0
let maxUdfald = 0
maxUdfald = 6
basic.showString("Terning")
basic.pause(500)
basic.showString("" + (maxUdfald))
basic.pause(500)
basic.clearScreen()
