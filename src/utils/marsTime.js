/**
 * Calculates the current Mars Sol Date (MSD).
 * Based on the Allison and McEwen (2000) algorithm.
 * 
 * Approximate MSD = (Julian Date - 2451549.5) / 1.027491252 + 44796.0
 */
export function getMarsSolDate() {
    const now = new Date();
    const j2000 = 2451545.0;
    const millisPerDay = 86400000;

    // Julian Date
    const jd = (now.getTime() / millisPerDay) + 2440587.5;

    // Mars Sol Date
    const msd = (jd - 2451549.5) / 1.027491252 + 44796.0;

    return msd;
}

/**
 * Returns the current Mission Sol for Perseverance (landed Feb 18, 2021).
 * Perseverance landing MSD: ~52304
 */
export function getPerseveranceSol() {
    const msd = getMarsSolDate();
    const perseveranceLandingMSD = 52304;
    return Math.floor(msd - perseveranceLandingMSD);
}

/**
 * Formats MSD into a "time" string (Sol Day : Percentage or similar).
 * Martian day is 24h 39m 35.244s.
 */
export function getMartianTime(msd) {
    const sol = Math.floor(msd);
    const fraction = msd - sol;

    const martianHours = Math.floor(fraction * 24);
    const martianMinutes = Math.floor((fraction * 24 - martianHours) * 60);
    const martianSeconds = Math.floor(((fraction * 24 - martianHours) * 60 - martianMinutes) * 60);

    return {
        sol,
        time: `${martianHours.toString().padStart(2, '0')}:${martianMinutes.toString().padStart(2, '0')}:${martianSeconds.toString().padStart(2, '0')}`
    };
}
