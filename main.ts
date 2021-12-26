input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 3; index++) {
        visRulleRundt(50)
    }
    if (snyd && maaSnyde) {
        udfald = maxUdfald
        snyd = false
    } else {
        udfald = randint(1, maxUdfald)
    }
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
    if (maxUdfald == 6) {
        maxUdfald = 10
    } else {
        maxUdfald = 6
    }
    basic.showString("" + (maxUdfald))
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    maaSnyde = !(maaSnyde)
})
input.onButtonPressed(Button.B, function () {
    snyd = !(snyd)
})
function visRulleRundt (pauseLaengde: number) {
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    basic.pause(pauseLaengde)
    led.unplot(0, 0)
    led.unplot(1, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    basic.pause(pauseLaengde)
    led.unplot(2, 0)
    led.unplot(3, 0)
    led.plot(4, 1)
    led.plot(4, 2)
    basic.pause(pauseLaengde)
    led.unplot(4, 0)
    led.unplot(4, 1)
    led.plot(4, 3)
    led.plot(4, 4)
    basic.pause(pauseLaengde)
    led.unplot(4, 2)
    led.unplot(4, 3)
    led.plot(3, 4)
    led.plot(2, 4)
    basic.pause(pauseLaengde)
    led.unplot(4, 4)
    led.unplot(3, 4)
    led.plot(1, 4)
    led.plot(0, 4)
    basic.pause(pauseLaengde)
    led.unplot(2, 4)
    led.unplot(1, 4)
    led.plot(0, 3)
    led.plot(0, 2)
    basic.pause(pauseLaengde)
    led.unplot(0, 4)
    led.unplot(0, 3)
    led.plot(0, 1)
    led.plot(0, 0)
    basic.pause(pauseLaengde)
    led.unplot(0, 2)
    led.unplot(0, 1)
    led.unplot(0, 0)
}
let udfald = 0
let maxUdfald = 0
let snyd = false
let maaSnyde = false
maaSnyde = true
snyd = false
maxUdfald = 6
basic.showString("" + (maxUdfald))
basic.pause(500)
basic.clearScreen()
