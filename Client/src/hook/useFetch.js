import axios from 'axios';

async function fetchData(url) {
    const response = await axios.get(url);
    return response.data;  
}

const useFetch = async (endPoint = "") => {
    const data = await fetchData(endPoint);
    console.log("candidates:", data);  

    return data;
}

export default useFetch;
