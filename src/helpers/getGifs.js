export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=SXA2VwbfvfQIy0tvSQZVWG4haZZuAD76&limit=20&q=${category}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url,
  }));
  return gifs
};