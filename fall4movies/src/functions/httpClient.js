const API = "https://api.themoviedb.org/3";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODUwMDQ3NTQxY2U2M2NkNjcyMDY1N2JmYmEzODI2YSIsInN1YiI6IjY1NTc3NGJhMDgxNmM3MDBjM2RjN2Q0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ILN2F534UJIXkQUbv91FTD0ljkN8YZ6ir2A7VWwcJk'
  }
};

function getHttp(path){
  return fetch(API + path, options)
    .then(response => response.json());
}; 

export default getHttp;
