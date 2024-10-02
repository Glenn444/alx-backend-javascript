// In 0-promise.js
const getResponseFromAPI = () => {
    return new Promise((resolve, reject) => {
        // Simulating an API call with a setTimeout
        setTimeout(() => {
            const data = { message: "Data from API" };
            if (data) {
                resolve(data);
            } else {
                reject("Failed to get data from API");
            }
        }, 2000); // Simulating a 2-second delay
    });
};

export default getResponseFromAPI;
