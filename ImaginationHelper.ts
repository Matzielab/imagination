
export default class ImaginationHelper {
  /**
   * 
   * @param C number between 0 - 1
   * @param M number between 0 - 1
   * @param Y number between 0 - 1
   * @param K number between 0 - 1
   * @returns object with keys R,G,B with numbers representing a RGB color
   */
  public static CMYKtoRGB = (C: number, M: number, Y: number, K: number) => {
    var R = Math.round((1 - Math.min( 1, C * ( 1 - K ) + K )) * 255)
    var G = Math.round((1 - Math.min( 1, M * ( 1 - K ) + K )) * 255)
    var B = Math.round((1 - Math.min( 1, Y * ( 1 - K ) + K )) * 255)

    return {R, G, B}
  }

  /**
   * 
   * @param num number to clamp between 0 - 1
   * @returns input number or maximum 1 or minimum 0
   */
  public static makeBetween1And0 = (num: number): number => {
    return num > 1 ? 1 : num < 0 ? 0 : num
  }

  /**
   * default accelerometer config for color convertion above
   */
  public static accelerometerConfig = {
    ios: {
      ACCELEROMETER_MIN: 1,
      ACCELEROMETER_MAX: -1
    },
    android: {
      ACCELEROMETER_MIN: -10,
      ACCELEROMETER_MAX: 10
    }
  }
}