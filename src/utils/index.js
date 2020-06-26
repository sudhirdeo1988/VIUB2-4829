export const getCountryHostUrl = (country) => {
  switch (country) {
    case 'in':
      return 'https://viu.com/ott/in/en';
    case 'eg':
      return 'https://watch.viu.com/ott/eg/en/all';
    default:
      return 'https://viu.com/ott/in/en';
  }
};
