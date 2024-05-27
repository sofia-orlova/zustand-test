// @ts-nocheck
import { useEffect } from 'react'
import '../App.css'
import {useGetDiscoverMovie, useGetMovieDetailById} from "../zustand/store.ts";
import MovieCard from "../components/MovieCard/MovieCard.tsx";

function Home() {
    const getDiscoverMovie = useGetDiscoverMovie();
    const getMovieDetailById = useGetMovieDetailById();

    useEffect(() => {
        getDiscoverMovie.execute();
    }, []);

    useEffect(() => {
        if(getDiscoverMovie.data) getMovieDetailById.execute(getDiscoverMovie.data.results[0].id);

    }, [getDiscoverMovie.data]);

    if (getDiscoverMovie.loading) return <p>Loading...</p>;
    if (getDiscoverMovie.error)  return <p>Error fetching data: {getDiscoverMovie.errorData}</p>;

    return (
        <div>
            <h1>Home.tsx</h1>
            <p>{getDiscoverMovie.data?.results.map((el => <p>{el.title}</p>))}</p>
            <MovieCard/>
        </div>
    )
}

export default Home
