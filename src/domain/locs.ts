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
{city: "Cambridge", name: "Coe Fen", latitude: 52.19608688354492, longitude: 0.11600343137979507},
{city: "Cambridge", name: "Castle Hill", latitude: 52.212177, longitude: 0.114498},
{city: "Cambridge", name: "Gardies", latitude: 52.20613479614258, longitude: 0.11884450167417526},
{city: "_", name: "London", latitude: 51.5073219, longitude:-0.1276474},
{city: "London", name: "122 Dalyell", latitude:51.465369, longitude:-0.119439},
{city: "London", name: "Hugh Morgan", latitude:51.465731, longitude:-0.130265},
{city: "London", name: "Kenwyn Road", latitude:51.4626932, longitude:-0.1325022},
{city: "London", name: "Corrance Road", latitude:51.4611954, longitude:-0.1245587},
{city: "London", name: "Strata", latitude:51.4929465, longitude:-0.0994907},
{city: "London", name: "Bancone (Covent Garden)", latitude:51.509507, longitude:-0.1269241},
{city: "London", name: "Bancone (Soho)", latitude:51.5113011, longitude:-0.1364073},
{city: "London", name: "Battersea Pottery Cafe", latitude:51.509601, longitude:-0.126499},
{city: "London", name: "Victoria Palace Theatre", latitude:51.4968227, longitude:-0.1425047},
{city: "London", name: "Prince of Wales Theatre", latitude:51.51008, longitude:-0.1317339},
{city: "London", name: "Alexandra Palace", latitude:51.5942224, longitude:-0.1308571},
{city: "London", name: "Bussey Building", latitude:51.4699727, longitude:-0.0670341},
{city: "London", name: "Charlie's Fish Bar", latitude:51.463905, longitude:-0.129595},
{city: "Redhill", name: "9 Daws Place", latitude:51.2515857, longitude:-0.1503601},
{city: "Redhill", name: "Grange Close", latitude:51.239947, longitude:-0.098819},
{city: "Dorking", name: "Box Hill", latitude:51.249257, longitude:-0.313101},
{city: "Dorking", name: "Denbies", latitude:51.248148, longitude:-0.331832},
{city: "_", name: "Brighton", latitude:50.8214626, longitude:-0.1400561},
{city: "_", name: "Rye", latitude:50.949426, longitude: 0.735965},
{city: "_", name: "Tillingham", latitude:50.958673, longitude: 0.678363},
{city: "_", name: "Camber Sands", latitude:50.9322346, longitude:0.7754557},
{city: "_", name: "Durdle Door", latitude:50.62119, longitude:-2.2769164},
{city: "_", name: "Lulworth Cove", latitude:50.6186514, longitude:-2.2441413},
{city: "_", name: "Dorchester", latitude:50.7132064, longitude:-2.4371229},
{city: "West Stafford", name: "The Old Reading Room", latitude:50.7034209, longitude:-2.3870762},
{city: "_", name: "Buxton", latitude:53.2594074, longitude:-1.9100768},
{city: "_", name: "Tideswell", latitude:53.277418, longitude: -1.774403},
{city: "Buxton", name: "74 Fairfield Road", latitude:53.26237106323242, longitude:-1.9040755033493042},
{city: "Hathersage", name: "Stanage Edge", latitude:53.349233, longitude:-1.643114},
{city: "_", name: "Manchester", latitude:53.4794892, longitude:-2.2451148},
{city: "Manchester", name: "The Allotment", latitude:53.48202133178711, longitude:-2.23466420173645},
{city: "_", name: "Edinburgh", latitude:55.9533456, longitude:-3.1883749},
{city: "Edinburgh", name: "(Not) Arthurs Seat", latitude:55.944142, longitude:-3.161584},
{city: "Edinburgh", name: "Arthurs Seat", latitude:55.942922, longitude:-3.159291},
{city: "Edinburgh", name: "Edinburgh Castle", latitude:55.9486867, longitude:-3.2004175},
{city: "Edinburgh", name: "The Bow Bar", latitude:55.948421478271484, longitude:-3.1941282749176025},
{city: "_", name: "Napoli", latitude:40.8358846,longitude:14.2487679},
{city: "Napoli", name: "Nonna Fernanda's", latitude:40.841667,longitude:14.2478377},
{city: "_", name: "Sorrento", latitude:40.624906,longitude:14.374836},
{city: "_", name: "Pompei", latitude:40.7491267,longitude:14.5006415},
{city: "_", name: "Mount Vesuvius", latitude:40.8224148,longitude:14.4292922},
{city: "_", name: "Rome", latitude:41.8933203,longitude:12.4829321},
{city: "Rome", name: "The Colosseum", latitude:41.8902614,longitude:12.4930871},
{city: "Rome", name: "Roman Forum", latitude:41.8916247,longitude:12.486712},
{city: "Rome", name: "Trevi Fountain", latitude:41.9009778,longitude:12.4832848},
{city: "_", name: "Vatican City", latitude:41.903411,longitude:12.4528527},
{city:"Iseo", name: "Monte Isola", latitude:45.703163,longitude: 10.088831},
{city:"_", name: "Milan", latitude:45.4641943,longitude:9.1896346},
{city:"_", name: "Duomo di Milano", latitude:45.4641684,longitude:9.1916211},
{city:"Milan", name: "Navigli", latitude:45.451804,longitude: 9.175341},
{city:"_", name: "Arosio", latitude:45.716977,longitude:9.208043},
{city:"Milan Fede", name: "Villa Sommi Picenardi", latitude:45.7318925,longitude:9.3990188},
{city:"_", name: "Bergamo", latitude:45.7566557,longitude:9.7542192},
{city:"_", name: "Geneva", latitude:46.2017559,longitude:6.1466014},
{city:"Geneva", name: "Jet d'Eau", latitude:46.2073807,longitude:6.1558891},
{city:"Geneva", name: "CERN", latitude:46.233475,longitude: 6.055780},
{city:"_", name: "Lausanne", latitude:46.5218269,longitude:6.6327025},
{city:"_", name: "Frankfurt", latitude:50.1106444,longitude:8.6820917},
{city:"_", name: "Madeira", latitude:32.7517488,longitude:-16.981752},
{city:"_", name: "Lake Iseo", latitude: 45.727633, longitude: 10.070802},
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
