/**
 * Linearly interpolates between two angles.
 * @param {number} from - The starting angle in degrees.
 * @param {number} to - The ending angle in degrees.
 * @param {number} interpolation - The interpolation factor, typically between 0 and 1.
 * @param {number} [angleRange=360] - The range of the angles, default is 360 degrees.
 * @returns {number} The interpolated angle.
 */
export function lerpAngle(from, to, interpolation, angleRange = 360) {
	const delta = ((to - from + angleRange / 2) % angleRange) - angleRange / 2
	return from + delta * interpolation
}
