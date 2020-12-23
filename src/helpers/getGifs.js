export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?limit=5&q=${encodeURI(category)}&api_key=TwBhzMjVvM5r9xn8YfiEVEMPTcU5GVmZ`;
    const resp = await fetch( url );
    const {data} = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    //console.log(gifs);
    return(gifs);
}