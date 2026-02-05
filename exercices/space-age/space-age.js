//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const EARTH_YEAR_IN_SECONDS = 31557600;

  const ORBITAL_PERIODS = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 1.0,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132,
  };

  // Normalize planet name (first letter uppercase, rest lowercase)
  const planetKey = planet.charAt(0).toUpperCase() + planet.slice(1).toLowerCase();

  if (!ORBITAL_PERIODS[planetKey]) {
    throw new Error("not a planet");
  }

  const ageInEarthYears = seconds / EARTH_YEAR_IN_SECONDS;
  const planetYears = ageInEarthYears / ORBITAL_PERIODS[planetKey];
  return Number(planetYears.toFixed(2));
};