const API_KEY = "7ce64cf5ef7bf9d74fef966c4e86de10";

const api_requests = {
    fetchOriginals: `/discover/tv?api_key=${API_KEY}`,
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}`
}

export default api_requests;