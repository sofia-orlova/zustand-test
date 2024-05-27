// @ts-nocheck
import {useGetDiscoverMovie, useGetMovieDetailById} from "../../zustand/store.ts";

function MovieCard() {
    const getDiscoverMovie = useGetDiscoverMovie().data;
    const getMovieDetailById = useGetMovieDetailById().data;

    return (
        <div style={{fontWeight: "bold"}}>
            <h1>MovieCard.tsx</h1>
            <p>getDiscoverMovie.data.page {JSON.stringify(getDiscoverMovie?.page)}</p>
            <p>getMovieDetailById.data.title  {JSON.stringify(getMovieDetailById?.title)}</p>
        </div>
    )
}

export default MovieCard
