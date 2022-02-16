const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  // async redirects(){
  //   return [{
  //     // source: "/contact",
  //     // destination: "/form",
  //     // permanent: false,
  //   }]
  // },
  async rewrites(){
    return [{
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    }]
  }
}
// rewrite와 redirect 차이
// redirect는 user가 url 확인 가능
// rewrite는 redirect+url 변화 x

