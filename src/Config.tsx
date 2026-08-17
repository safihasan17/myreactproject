import axios from "axios";

export const basePath= "http://localhost/pos_poject_api/";
export const baseApiUrl= "http://localhost/pos_poject_api/api/";

//host
// export const baseApiUrl= "http://example.com/api/"

export const api = axios.create({
    baseURL: baseApiUrl,
    headers: {
        "Content-Type": "application/json",
    }

}

)