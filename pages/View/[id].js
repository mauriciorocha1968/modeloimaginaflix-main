import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react';
import Tmdb from '../../src/Tmdb';

const View = () => {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName]= useState();
  const [voteAverage, setVoteAverage]= useState();
  const [voteCount, setVoteCount]= useState();
  const [urlImage, setUrlImage]= useState();

  useEffect(()=>{
    const loadInfo = async () => {
      let getInfo = await Tmdb.getMovieInfo(id, 'tv');
      setName(getInfo.name);
      setVoteAverage(getInfo.vote_average);
      setVoteCount(getInfo.vote_count);
      setUrlImage(getInfo.poster_path ? getInfo.poster_path : getInfo.backdrop_path );
    }

    loadInfo();
    

  }, [id]);

  return (
    <>
      <h2>Filme: {name}</h2>
      <strong>Relevância: {voteAverage}</strong>
      <img  src={`https://image.tmdb.org/t/p/w300${urlImage}`} />
      
    </>
  )
}

export default View