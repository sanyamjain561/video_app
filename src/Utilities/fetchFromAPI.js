import axios from "axios";

const BaseURL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",

  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": '5dcc12e811msha04507617b5a732p1069e6jsnc1e166f7c5c4',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async(url)=>{
    const {data} = await axios.get(`${BaseURL}/${url}`,options) ;
    return data ;
    
}