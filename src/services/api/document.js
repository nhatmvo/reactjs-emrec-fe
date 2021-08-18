import axios from 'axios';

const APPLICATION_DOMAIN = "http://localhost:80/api/v1/documents";

export async function submitForm(formData) {
    try {
        const response = await axios.post(`${APPLICATION_DOMAIN}/submission`, formData);
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function getEntryData(entryId) {
    try {
        const response = await axios.get(`${APPLICATION_DOMAIN}/entries?id=${entryId}`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

