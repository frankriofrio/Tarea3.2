
/*
**
*** 
Genera el consumo de una API (la entregada en clases) y mostrar los videos de youtube 
*/

// URL API 
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC5CCC8rePkVEbkITVzFQs3g&part=snippet%2Cid&order=date&maxResults=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b5c3162638mshe1eec390647d96ap1652efjsn5e63ec3345ce',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
// declarar las varianles 
const div1 = document.querySelector('#content');


// funcion de llamado a nuestra API
const fetchData = async(urlApi) =>{
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data;
}
// GET Videos
const getVideos = async () =>{
    const videos = await fetchData(API);
    const content = document.getElementById('content');
    let view = `
    ${videos.items.map((vi) => `
    <div class="group relative">
        <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${vi.snippet.thumbnails.high.url}" alt="" class="w-full">
        </div>
        <div class="mt-3 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${vi.snippet.title}           
            </h3>
        </div>
    </div>`
    ).splice(0,10).join('')}`;
    content.innerHTML = view;
}
getVideos();
