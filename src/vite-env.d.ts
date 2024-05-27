/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_BEARER_TOKEN: string;
    readonly VITE_API_BASE_PATH: string;
    readonly VITE_API_IMAGE_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}