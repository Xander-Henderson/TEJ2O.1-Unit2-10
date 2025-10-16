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
xandersNeopixelStrip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.show()
lightLevelOfMicrobit = input.lightLevel()
basic.showIcon(IconNames.Happy)

// checks lightLevel and turns on neopixels
if (51 >= lightLevelOfMicrobit) {
    xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    xandersNeopixelStrip.show()
}

if (52 < lightLevelOfMicrobit) {
    xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.show()
}

if (104 < lightLevelOfMicrobit) {
    xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.show()
}

if (156 < lightLevelOfMicrobit) {
    xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.show()
}

if (208 < lightLevelOfMicrobit) {
    xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.show()
}
