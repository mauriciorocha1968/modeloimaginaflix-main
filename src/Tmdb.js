const API_KEY = 'c41398e542ba4dbfce998124c096be28';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFecth = async (endpoint) =>{
    const url =  `${API_BASE}${endpoint}`;
    return (await fetch(url)).json();
}

const Tmdb = {
     getHomeList : async () =>{
        return [
            {
                slug: 'originals',
                title : "Originais do Netflix",
                items : await basicFecth(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`),
                type  : 'tv'
            },
            {
                slug: 'trending',
                title : "Recomendados para Você",
                items : await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
                type  : 'trending'

            },
            {
                slug: 'toprated',
                title : "Em Alta",
                items : await basicFecth(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`),
                type  : 'movie'

            },
            {
                slug: 'action',
                title : "Ação",
                items : await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
                type  : 'movie'
            },
            {
                slug: 'comedy',
                title : "Comédia",
                items : await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
                type  : 'movie'
            },
            {
                slug: 'horror',
                title : "Terror",
                items : await basicFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
                type  : 'movie'
            },
            {
                slug: 'romance',
                title : "Romance",
                items : await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
                type  : 'movie'
            },            
            {
                slug: 'documentary',
                title : "Documentários",
                items : await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
                type  : 'movie'
            },
            {
                slug: 'drama',
                title : "Drama",
                items : await basicFecth(`/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`),
                type  : 'movie'
            },            
        ]
     },

     getMovieInfo : async (movieId, type) =>{
        let info = {};
        if(movieId) {
            switch(type){
                case 'movie':
                    const url = `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`;
                    info = await basicFecth(url);
                break;
                 case 'tv':
                    const urlTV = `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`;
                    info = await basicFecth(urlTV);
                break;
                default:
                    info = null;
                break;
            }
        }
        return info;
     }
}

export default Tmdb;