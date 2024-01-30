export async function handler() {

  let url = 'https://geolocation-db.com/json/';
  let res = await fetch(url)
  let geoData = await res.json();
  
  return {
    statusCode: 200,
    body: JSON.stringify(geoData),
  };
}