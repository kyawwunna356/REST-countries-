import axios from 'axios'

export const baseURL = 'https://restcountries.com/v3.1'

export async function fetchData(url){
    const response = await axios.get(url)
    const data = response.data
    return data;
}