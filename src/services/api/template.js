import axios from 'axios';

const APPLICATION_DOMAIN = "http://localhost:80/api/v1/templates";

export async function getTemplate() {
    try {
        const response = await axios.get(`${APPLICATION_DOMAIN}?id=bffa71a2-2c93-451f-adb0-b3e813e2f68d`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}