export function lerpAngle(from, to, factor, angleRange = 360) {
	let num = (to - from) % angleRange
	if (num > angleRange / 2) {
		num -= angleRange
	}
	return from + num * factor
}
