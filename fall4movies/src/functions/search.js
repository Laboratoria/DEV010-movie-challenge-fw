const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODUwMDQ3NTQxY2U2M2NkNjcyMDY1N2JmYmEzODI2YSIsInN1YiI6IjY1NTc3NGJhMDgxNmM3MDBjM2RjN2Q0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ILN2F534UJIXkQUbv91FTD0ljkN8YZ6ir2A7VWwcJk'
  }
};

function search(path){
fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1' + path, options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
}; 

export default search;
