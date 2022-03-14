import React, {useEffect, useState} from 'react';

import Head from 'next/head';
import Tmdb from '../src/Tmdb';

import Header from '../src/components/Header';
import FeaturedMovie from '../src/components/FeaturedMovie';
import MovieRow from '../src/components/MovieRow';

const Home = () => {

  const [blackHeader, setblackHeader]= useState(false);
  const [featuredData, setFeaturedData]= useState(null);
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=> i.slug === 'originals');
      let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randonChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();

  }, []);

  useEffect(()=>{
    const scrollListener = () =>{
        if(window.scrollY > 10){
          setblackHeader(true);
        }else{
          setblackHeader(false);
        }
    }

    window.addEventListener('scroll', scrollListener);

    return () =>{
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);


  return (
    <div className="page">
      <Head>
        <title>ImaginaFlix</title>
        <meta name="description" content="Desenvolvidor por KMInova" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item ={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key) =>(
          <MovieRow key={key} title={item.title} items={item.items} type={item.type}></MovieRow>
        ))

        }
      </section>
      
      <footer>
        Projeto Modelo para o site da ImaginaFlix.
        Desenvolvido por KMInova Soluções em Informática Ltda
      </footer>


    {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img>
      </div>
    }


    </div>
  )
}


export default Home;
