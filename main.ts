/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alexander
 * Created on: Oct 2025
 * This program shows the light level on neopixels.
*/

// variables
let lightLevel: number = 0
let xandersNeopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
xandersNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.show()
basic.showIcon(IconNames.Happy)

// 
input.lightLevel()
if (51 >= lightLevel) {
    xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
}

input.lightLevel()
if (52 < lightLevel) {
    xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
}

input.lightLevel()
if (104 < lightLevel) {
    xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
}

input.lightLevel()
if (156 < lightLevel) {
    xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
}

input.lightLevel()
if (208 < lightLevel) {
    xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
}