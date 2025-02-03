const getTime = () => {
    const currentTimeUTC = new Date().toISOString();
    return currentTimeUTC;
}

const getCityContry = () => {
    fetch("https://ipinfo.io/json?token=1b483f7137f452")
    .then(response => response.json())
    .then(data => {
        const city = data.city;
        const country = data.country;

        fetch("https://restcountries.com/v3.1/alpha/" + country)
        .then(res => res.json())
        .then(countryData => {
            const countryName = countryData[0].name.common;
            document.getElementById("location").textContent = `${city}, ${countryName}`;
        })
        .catch(err => console.error("Error fetching country name:", err));
    })
    .catch(error => console.log("Error fetching location:", error));
}

document.getElementById("utc-time").textContent = getTime();
getCityContry();