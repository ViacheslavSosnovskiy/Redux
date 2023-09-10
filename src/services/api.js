const BASE_URL = "https://newsapi.org/v2";
const API_KEY = '75e6d13ff6fd46bfbb1d82a5e48ed5ff';

export const getTopNews = async () => {
  const data = await fetch(`${BASE_URL}/top-headlines?apiKey=${API_KEY}`)
  return await data.json()
};

export const getSearchNews = async (searchText) => {
  const data = await fetch(`${BASE_URL}/everything?q=${searchText}&apiKey=${API_KEY}`)
  return await data.json()
}