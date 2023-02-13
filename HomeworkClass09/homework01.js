async function getCountryAndNeighbours(code) {
  try {
    const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
    const data = await response.json();
    console.log("Country:");
    console.log(data);
    console.log("Neighbours:");
    data.borders.forEach(async (borderCode) => {
      const response = await fetch(`https://restcountries.com/v2/alpha/${borderCode}`);
      const borderData = await response.json();
      console.log(borderData);
    });
  } catch (error) {
    console.log('ERROR :', error);
  }
}

getCountryAndNeighbours("MKD");