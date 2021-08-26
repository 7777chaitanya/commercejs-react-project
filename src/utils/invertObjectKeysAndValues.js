function invertedCountriesWithKeys(countriesWithKeys) {
  const keys = Object.keys(countriesWithKeys);
  const invertedCountriesWithKeys = {};
  keys.forEach((countryCode) => {
    invertedCountriesWithKeys[countriesWithKeys[countryCode]] = countryCode;
  });
  return invertedCountriesWithKeys;
}

export default invertedCountriesWithKeys;
