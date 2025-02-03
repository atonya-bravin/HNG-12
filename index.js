const getTime = () => {
    const currentTimeUTC = new Date().toISOString();
    return currentTimeUTC;
}

const getCityContry = () => {
    fetch("https://ipinfo.io/json?token=1b483f7137f452")
    .then(response => response.json())
    .then(data => {
        const location = `${data.city}, ${data.country}`;
        document.getElementById("location").textContent = `${data.city}, ${data.country}`;
    })
    .catch(error => console.log("Error fetching location:", error));
}

document.getElementById("utc-time").textContent = getTime();
getCityContry();