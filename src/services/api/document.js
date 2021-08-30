import axios from 'axios';
import { isMobile } from 'react-device-detect';

const APPLICATION_DOMAIN_LOCAL = "http://localhost:80/api/v1/documents";
const APPLICATION_DOMAIN_REMOTE = "http://192.168.31.169:80/api/v1/documents";

const APPLICATION_DOMAIN = isMobile ? APPLICATION_DOMAIN_REMOTE : APPLICATION_DOMAIN_LOCAL;

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
        const response = await axios.get(`${APPLICATION_DOMAIN}/entries/${entryId}/data`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function getImageElements(entryId) {
    try {
        const response = await axios.get(`${APPLICATION_DOMAIN}/entries/${entryId}/media`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function getEntryDetails(entryId) {
    try {
        const response = await axios.get(`${APPLICATION_DOMAIN}/entries?id=${entryId}`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function updateForm(formData) {
    try {
        const response = await axios.patch(`${APPLICATION_DOMAIN}/submission`, formData);
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

