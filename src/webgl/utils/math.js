export function lerpAngle(from, to, interpolation, angleRange = 360) {
	const delta = ((to - from + angleRange / 2) % angleRange) - angleRange / 2
	return from + delta * interpolation
}
