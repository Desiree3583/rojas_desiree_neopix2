while (true) {
    light.setPixelColor(0, light.rgb(255, 0, 0))
    pause(3000)
    light.setPixelColor(1, light.rgb(0, 0, 255))
    pause(3000)
    light.setPixelColor(2, light.rgb(0, 255, 0))
    pause(3000)
    light.setPixelColor(3, light.rgb(255, 255, 0))
    pause(3000)
    light.setPixelColor(4, light.rgb(255, 0, 255))
    pause(2000)
    light.setPixelColor(5, light.rgb(0, 150, 255))
    pause(3000)
    light.setPixelColor(6, light.rgb(0, 0, 255))
    pause(3000)
    light.clear()
    pause(3000)
}
