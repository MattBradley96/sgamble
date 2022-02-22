import { useMemo } from "react";
import seedrandom from "seedrandom";
import { countries, Country } from "../domain/locs";

export function useCountry(dayString: string): [Country, number, number] {
  const country = useMemo(() => {
    // return (countries[0]);
    return (countries[Math.floor(seedrandom.alea(dayString)() * countries.length)]);
  }, [dayString]);

  const randomAngle = useMemo(
    () => seedrandom.alea(dayString)() * 360,
    [dayString]
  );

  const imageScale = useMemo(() => {
    const normalizedAngle = 45 - (randomAngle % 90);
    const radianAngle = (normalizedAngle * Math.PI) / 180;
    return 1 / (Math.cos(radianAngle) * Math.sqrt(2));
  }, [randomAngle]);

  return [country, randomAngle, imageScale];
}
