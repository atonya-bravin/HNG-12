const getTime = () => {
    const currentTimeUTC = new Date().toISOString();
    return currentTimeUTC;
}

const getCityContry = () => {
    fetch("http://ip-api.com/json/")
    .then(response => response.json())
    .then(data => {
        const location = `${data.city}, ${data.country}`;
        document.getElementById("location").textContent = `${data.city}, ${data.country}`;
    })
    .catch(error => console.log("Error fetching location:", error));
}

document.getElementById("utc-time").textContent = getTime();
getCityContry();