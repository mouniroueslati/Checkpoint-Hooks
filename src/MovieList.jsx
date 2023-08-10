import React, {useState} from 'react'
import MovieCard from './MovieCard'

const MovieList = () => {
  const [movies, setmovies] = useState([
    {
      title: "John Wick",
      description: "Action",
      posterUrl: "1",
      rating: 9,
    },
    {
      title: "Equalizer",
      description: "Action",
      posterUrl: "2",
      rating: 9,
    },
    {
      title: "Point Break",
      description: "Adventure",
      posterUrl: "3",
      rating: 8,
    },
    {
      title: "What Happens In Vegas",
      description: "Comedy",
      posterUrl: "4",
      rating: 7
    },
  ])

 const [title, settitle] = useState ("");
 const [description, setdescription] = useState ("");
 const [posterUrl, setposterUrl] = useState ("");
 const [rating, setrating] = useState ("");
 
 const [filtragetitle, setfiltragetitle] = useState ("");
 const [filtragerating, setfiltragerating] = useState ("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newmovie = {
    title: title,
    description: description,
    posterUrl: posterUrl,
    rating: rating,
  };
  let newlist = [newmovie, ...movies];
  setmovies (newlist);
 };

 const filtrage = (e) => {
 e.preventDefault();
 let newlist = movies.filter ((el) => el.title.includes(filtragetitle) && el.rating >= filtragerating
 );
 if (newlist.length === 0) alert("wrong inputs");
 setmovies (newlist); //movies = newlist
 };


  return (
    <div>
      {movies.map((el, index) => (<MovieCard key={index} el={el}/>))}
      <form onSubmit={handleSubmit}>
        <div>
          <label>title</label>
          <input type="text" onChange={(e) => settitle(e.target.value)}/>
        </div>
        <div>
          <label>description</label>
          <input type="text" onChange={(e) => setdescription(e.target.value)}/>
        </div>
        <div>
          <label>posterUrl</label>
          <input type="text" onChange={(e) => setposterUrl(e.target.value)}/>
        </div>
        <div>
          <label>rating</label>
          <input type="number" onChange={(e) => setrating(e.target.value)}/>
        </div>
        <input type="submit" />
      </form>

      <form>

        <div onSubmit={filtrage}>
          <label>filtrage</label>
          <input type="text" onChange={(e) => setfiltragetitle(e.target.value)}/>
          <input type="number" onChange={(e) => setfiltragerating(e.target.value)}/>
        </div>
        <input type="submit" />

      </form>



    </div>
  )
}

export default MovieList