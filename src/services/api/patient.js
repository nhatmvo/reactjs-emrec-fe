import axios from "axios";

const APPLICATION_DOMAIN = "http://localhost:80/api/v1/patients";

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
