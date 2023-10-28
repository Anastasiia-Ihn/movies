import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchDataByIdForCast } from 'API/apiByIdCast';

export const Cast = () => {
 
  const param = useParams();
        
  const [movieCast, setMovieCast] = useState();

  useEffect(() => {
    async function getMobieByIdForCast() {
      try {
        const cast = await fetchDataByIdForCast(param.movieById);
        
        setMovieCast(cast);
      
      } catch (error) {
        toast.error('Not found');
      }
    }

    getMobieByIdForCast();
  }, [param.movieById]);
  

  console.log(movieCast);
  
  return (movieCast ? <ul>{movieCast.map(el => <li key={el.id}>
    {
      <img
        src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
        alt={el.name}
        width={200}
      ></img>
    }
    
      <h3>{el.name}</h3>
      <p>Character: { el.character}</p>
    </li>
  )}</ul> : <p>Sorry, not found</p>)
};
