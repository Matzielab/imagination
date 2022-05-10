/**
 * imagination
 * by Matzielab.com
 *
 * This fancy, smancy, hocus, pocus, yummy piece of code was created by Mathias Eriksson.
 * Feel free to use it on your sites but you can in no way use it to make money,
 * in that case i want some of that money because i need to eat too. Maybe we could even eat together!
 *
 * If you decide to use this, tell me about it! I'd love to see how you put this to use.
 * Also shout out to Matzielab if you feel like it, or not it's up to your pretty face.
 *
 * Handshakes & highfives,
 * Matzie
*/
import Helper from './ImaginationHelper'

export default class Imagination {

  /**
   * Since mouse X & Y is two values, the third value of rgb is calculated by
   * amount of movement via these variables.
   */
  private mousePosBlueValue: number = 1
  private mousePosBlueValueDirection: 'up' | 'down' = 'up'

  /**
   * Function that makes a color from mouse position in window
   * 
   * @param mouseX mouse X position in window
   * @param mouseY mouse Y position in window
   * @param window current window mouse is displayed in
   * @returns color in form of rgb string
   */
  public colorFromMousePosition = (mouseX: number, mouseY: number, window: Window): string =>
  {
    // Calculate third color value that'll represent blue in RGB
    switch (true) {
      case (this.mousePosBlueValue < 255 && this.mousePosBlueValueDirection === 'up'):
        this.mousePosBlueValue++;
        break
      case (this.mousePosBlueValue >= 255 && this.mousePosBlueValueDirection === 'up'):
        this.mousePosBlueValue = 254
        this.mousePosBlueValueDirection = 'down'
        break
      case (this.mousePosBlueValue > 0 && this.mousePosBlueValueDirection === 'down'):
        this.mousePosBlueValue--;
        break
      case (this.mousePosBlueValue <= 0 && this.mousePosBlueValueDirection === 'down'):
        this.mousePosBlueValue = 0;
        this.mousePosBlueValueDirection = 'up';
        break;
    }

    const R: number = Math.floor(255 * (mouseX / window.innerWidth));
    const G: number = Math.floor(255 * (mouseY / window.innerHeight));
    const B: number = this.mousePosBlueValue;

    return `rgb(${R}, ${G}, ${B})`
  };  

  /**
   * Function that makes a color from smartphone accelerometer
   * 
   * @param x x value from device accelerometer
   * @param y y value from device accelerometer
   * @param z z value from device accelerometer
   * @param os ios or android as string
   * @returns color in form of rgb string
   */
  public colorFromAccelerometer = (x: number, y: number, z: number, os: 'ios' | 'android'): string => {
    let scaledX = x + (0 - Helper.accelerometerConfig[os].ACCELEROMETER_MIN)
    let scaledY = y + (0 - Helper.accelerometerConfig[os].ACCELEROMETER_MIN)
    let scaledZ = z + (0 - Helper.accelerometerConfig[os].ACCELEROMETER_MIN)
  
    let xPercentage = Helper.makeBetween1And0(scaledX / (Helper.accelerometerConfig[os].ACCELEROMETER_MAX * 2))
    let yPercentage = Helper.makeBetween1And0(scaledY / (Helper.accelerometerConfig[os].ACCELEROMETER_MAX * 2))
    let zPercentage = Helper.makeBetween1And0(scaledZ / (Helper.accelerometerConfig[os].ACCELEROMETER_MAX * 2))
  
    let R = Math.round(255 * xPercentage)
    let G = Math.round(255 * yPercentage)
    let B = Math.round(255 * zPercentage)
  
    return `rgb(${R}, ${G}, ${B})`
  }


  /**
   * 
   * @param ip string ip address in ipv4 format
   * @returns color in form of rgb string
   */
  public colorFromIP = (ip: String) => {
    var ipArray: Array<number> = ip.split('.').map(val => Number(val))
    if (ipArray.length !== 4) throw Error('Must be ipv4 format.')
    var cmykArray = ipArray.map(piece => (piece / 255))
    var RGB = Helper.CMYKtoRGB(cmykArray[0], cmykArray[1], cmykArray[2], cmykArray[3])
    
    return `rgb(${RGB.R},${RGB.G},${RGB.B})`
  }
}