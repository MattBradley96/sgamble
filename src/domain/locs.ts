export interface Country {
  name: string;
  latitude: number;
  longitude: number;
  city: string;

}


export const countries: Country[] = [
{city: "_", name: "Cambridge", latitude: 52.2055314, longitude:0.1186637},
{city: "Cambridge", name: "Emmanuel College", latitude: 52.20393371582031, longitude: 0.12477439641952515},
{city: "Cambridge", name: "Medwards", latitude: 52.21446990966797, longitude: 0.10732054710388184},
{city: "Cambridge", name: "Thirsty", latitude: 52.21433639526367, longitude: 0.12647829949855804},
{city: "Cambridge", name: "Novi", latitude: 52.20200729370117, longitude: 0.12493609637022018},
{city: "Cambridge", name: "2468", latitude: 52.2066535949707, longitude: 0.11829187721014023},
{city: "Cambridge", name: "St John's", latitude: 52.20821762084961, longitude: 0.11757731437683105},
{city: "Cambridge", name: "King's College", latitude: 52.20418930053711, longitude: 0.11597871780395508},
{city: "Cambridge", name: "The Ivy", latitude: 52.206764221191406, longitude: 0.11845813691616058},
{city: "Cambridge", name: "Six Rooftop Bar", latitude: 52.21030807495117, longitude: 0.11821220070123672},

{city:"Iseo", name: "Lake Iseo", latitude: 45.727633, longitude: 10.070802},
{city:"Iseo", name: "Tavernola Bergamasca", latitude: 45.710312, longitude: 10.047350},

];

export function getCountryName(language: string, country: Country) {
  return country.name;
}

export function getCityName(language: string, country: Country) {
  return country.city;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
