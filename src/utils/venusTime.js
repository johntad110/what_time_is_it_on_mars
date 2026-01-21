/**
 * Simplified Venus time tracking.
 * Venus day (retrograde) is very long.
 */
export function getVenusProgress() {
    // Arbitrary epoch for "noon" on Venus just for visualization
    const epoch = new Date('2000-01-01T00:00:00Z').getTime();
    const now = Date.now();
    const venusDayLengthMs = 243 * 24 * 60 * 60 * 1000; // 243 days

    const elapsed = now - epoch;
    const progress = (elapsed % venusDayLengthMs) / venusDayLengthMs;

    return progress * 100; // Percentage 0-100
}
