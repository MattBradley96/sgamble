export const locations = [
"EMM",
"NOV"
];

export interface Country {
  code: string;
  name: string;
  latitude: number;
  longitude: number;

}


export const countries: Country[] = [
{code: "EMM", name: "Emmanuel", latitude: 52.204138, longitude: 0.125198},
{code: "NOV", name: "Novi", latitude: 52.201998, longitude: 0.124688},
];

export function getCountryName(language: string, country: Country) {
  return country.name;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
