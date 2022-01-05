import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => 
{
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '8a811761ecmshf7d2f08bf26d796p19e8f6jsn90c9b3e2bd17'
          }
    })
}