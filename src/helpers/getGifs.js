export const getGifts = async ({category}) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category.trim()}&limit=10&api_key=TC2Q7CIuAsSQweGI8WPf4xFaFD87kupb`
    const { data } = await fetch(url).then(data => data.json());
    const gifts = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));
    return gifts;
}