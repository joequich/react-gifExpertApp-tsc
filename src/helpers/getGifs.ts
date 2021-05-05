interface IGifs {
    id: string;
    title: string;
    url: string;
}

interface IImageObjt extends IGifs {
    images?: {downsized_medium: { url: string } };
}

export const getGifs = async(category:string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=43NQ4ZWRj9t2xCXUDMX3HKGQHYpm7Uzp&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs:IGifs[] = data.map( (img:IImageObjt)  => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}