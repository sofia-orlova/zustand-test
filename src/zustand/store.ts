// @ts-nocheck
import axios from "axios";
import { create } from "zustand";

const initialStateDiscoverMovie = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorData: null,
};

const initialStateMovieDetailById = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorData: null,
};

const config = {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
        "content-type": "application/json;charset=utf-8",
    },
};
export const useGetDiscoverMovie = create((set, get) => ({
    ...initialStateDiscoverMovie,

    execute: async () => {
        set({ ...initialStateDiscoverMovie, loading: true });
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_BASE_PATH}/discover/movie`, config);
            set({ ...initialStateDiscoverMovie, success: true, data: res.data });
        } catch (err) {
            console.error("Error in data fetch:", err);
            // @ts-ignore
            set({ ...initialStateDiscoverMovie, error: true, errorData: err.message });
        }
    },
}));
export const useGetMovieDetailById = create((set, get) => ({
    ...initialStateMovieDetailById,

    execute: async (id) => {
        set({ ...initialStateMovieDetailById, loading: true });
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_BASE_PATH}/movie/${id}`, config);
            set({ ...initialStateMovieDetailById, success: true, data: res.data });
        } catch (err) {
            console.error("Error in data fetch:", err);
            // @ts-ignore
            set({ ...initialStateMovieDetailById, error: true, errorData: err.message });
        }
    },
}));