/**
 * Only balls meeting this specification can be ITTF approved 40mm+ Plastic with seam ball (3 stars).
 */
export var BallSpecification40PlusWithSeam = {
	/**
	 * Diameter of the ball  in cm: Lower limit - target - upper Limit
	 */
	diameter:[number, number, number] = [0.4, 0.403, 0.406]
	/**
	 * Weight of the ball in grams: Lower limit - target - upper limit.
	 */
	weight: [number, number, number] = [2.67, 2.7, 2.77]
	/**
	 * When the ball is dropped from 30.5cm away, how much would the ball bounce back.
	 */
	bounce: [number, number] = [24, 26]
	
	/**
	 * Hardness of the ball measured on the pole ends: Lower limit - upper limit
	 */
	poleHardness: [number, number] = [0.08, 0.81]
	
	/**
	 * Hardness of the ball measured on the seam: Lower limit - upper limit
	 */
	seamHardness: [number, number] = [0.72, 0.83]
};