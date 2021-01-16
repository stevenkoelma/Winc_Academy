const API_KEY = "98d18346b51fcf74d4263763e8b00003"; 

const getData = async () => {
    try{
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
        const res = await fetch (apiUrl);
        const data = await res.json();    
        return data;
    }

    

    catch (error) {
console.log(error)
    }
    
   

}