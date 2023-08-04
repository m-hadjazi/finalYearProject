import {useQuery} from "@tanstack/react-query";
import axios from "axios";
// API Path 
const topAnimeUrl = "https://api.jikan.moe/v4/top/anime";
// fetching data
const getTopAnime = async () => {
    const response = await axios.get(topAnimeUrl);
    return response.data;
}
// cahcing the data
export const UseGetTopAnime = () => {
    const {isLoading, data} = useQuery(['allAnime'], getTopAnime);
    return {data, isLoading}
}