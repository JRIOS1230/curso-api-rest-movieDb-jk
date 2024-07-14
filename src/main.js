//aca haremos una ciclo el cual va a colocar para que este se guarde en un movie container,para el elemento de scroll horizontal
//para que estas se agreguen con su respectiva imagen

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    'api_key': API_KEY,
  },
});

 async function getTrendingMoviesPreview() {
  const { data } = await api('trending/movie/day');
  const movies = data.results;

    movies.forEach(movie => {
      const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
      
      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movie-container');
  
      const movieImg = document.createElement('img');
      movieImg.classList.add('movie-img');
      movieImg.setAttribute('alt', movie.title);
      movieImg.setAttribute(
        'src', 
        'https://image.tmdb.org/t/p/w300/' + movie.poster_path
      );
      movieContainer.appendChild(movieImg);
      trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
  }

  async function getCategoriesPreview() {
    const { data } = await api('genre/movie/list');
    const Categories = data.genres;
    
    console.log(Categories)
    Categories.forEach(category => {
      const trendingPreviewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')
      
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');
  
      const categoryTitle = document.createElement('h3');
      categoryTitle.classList.add('category-title');
      categoryTitle.setAttribute('id', 'id' + category.id);
      const categoryTitleText = document.createTextNode(category.name)
      
      categoryTitle.appendChild(categoryTitleText)
      categoryContainer.appendChild(categoryTitle);
      trendingPreviewCategoriesContainer.appendChild(categoryContainer);
    });
  }
  getTrendingMoviesPreview()
  getCategoriesPreview()