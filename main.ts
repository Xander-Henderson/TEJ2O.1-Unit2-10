/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alexander
 * Created on: Oct 2025
 * This program shows the light level on neopixels.
*/

// variables
let lightLevelOfMicrobit: number = 0
let xandersNeopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
lightLevelOfMicrobit = input.lightLevel()
xandersNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // get light level
    lightLevelOfMicrobit = input.lightLevel()
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    basic.showString("" + lightLevelOfMicrobit.toString())

    // checks lightLevel and turns on neopixels
    if (lightLevelOfMicrobit <= 51) {
        xandersNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        xandersNeopixelStrip.show()
        basic.showIcon(IconNames.Yes)
    }

    if (lightLevelOfMicrobit > 52) {
        xandersNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.show()
        basic.showIcon(IconNames.Yes)
    }

    if (lightLevelOfMicrobit > 104) {
        xandersNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.show()
        basic.showIcon(IconNames.Yes)
    }

    if (lightLevelOfMicrobit > 156) {
        xandersNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.show()
        basic.showIcon(IconNames.Yes)
    }

    if (lightLevelOfMicrobit > 208) {
        xandersNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.show()
        basic.showIcon(IconNames.Yes)
    }

})
