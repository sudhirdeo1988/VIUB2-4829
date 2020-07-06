export const getCountryHostUrl = (country = 'in', language = 'en') => {
  const host =
    country === 'eg' ? 'https://watch.viu.com' : 'https://www.viu.com';
  switch (country) {
    case 'eg':
      return `${host}/ott/${country}/${language}/all`;
    case 'ae':
    case 'om':
    case 'kw':
    case 'bh':
    case 'sa':
    case 'qa':
    case 'ye':
      return `${host}/ott/${country}/${language}/arab`;
    case 'id':
    case 'my':
    case 'mm':
    case 'iq':
    case 'jo':
    case 'za':
    case 'ke':
    case 'ng':
    case 'ls':
    case 'sz':
    case 'zm':
    case 'bw':
    case 'na':
    case 'mw':
    case 'rw':
    case 'ug':
    case 'tz':
    case 'gh':
    case 'et':
      return `${host}/ott/${country}/${language}/all`;
    case 'in':
    default:
      return `${host}/ott/${country}/${language}/hindi`;
  }
};
