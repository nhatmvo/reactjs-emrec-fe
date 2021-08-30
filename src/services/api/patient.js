import axios from "axios";
import { isMobile } from 'react-device-detect';

const APPLICATION_DOMAIN_LOCAL = "http://localhost:80/api/v1/patients";
const APPLICATION_DOMAIN_REMOTE = "http://192.168.31.169:80/api/v1/patients";

const APPLICATION_DOMAIN = isMobile ? APPLICATION_DOMAIN_REMOTE : APPLICATION_DOMAIN_LOCAL;

export async function getPatients(filter) {
    try {
        const response = await axios.get(`${APPLICATION_DOMAIN}/list?filter=${filter}`)
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export async function addPatient(patientData) {
    try {
        const response = await axios.post(`${APPLICATION_DOMAIN}`, patientData);
        console.log(response.data);
        return response.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
};

export async function getPatientEntries(patientId, selectedElmentId) {
    try {
        const response = await axios.get(`${APPLICATION_DOMAIN}/${patientId}/entries?selectedElementId=b8e0ff0f-c973-4dc1-b1d1-8ff1ddbea35b`);
        return response.data;
    } catch (err) {
        console.log(err)
        throw err;
    }
}

export async function getPatientById(patientId) {
    try {
        const response = await axios.get(`${APPLICATION_DOMAIN}?id=${patientId}`);
        return response.data
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function getPatientByFilterMobile(filter) {
    try {
        const response = await axios.get(`${APPLICATION_DOMAIN}/mobile?filter=${filter}`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
