import {GetTokenSilentlyOptions} from "@auth0/auth0-react";

type GetAccessTokenFunction = (options?: GetTokenSilentlyOptions) => Promise<string | undefined>

export const publicRequest = async () => {
    const {VITE_API_URL: url} = import.meta.env
    const response = await fetch(`${url}/public`);
    const data = await response.json();
    console.log(data);
}

export const protectedRequest = async (getToken: GetAccessTokenFunction) => {
    const {VITE_API_URL: url} = import.meta.env
    const token = await getToken();
    const response = await fetch(`${url}/protected`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    console.log(data);
}
export const uploadRequest = async (getToken: GetAccessTokenFunction, file: File | undefined) => {
    const {VITE_API_URL: url} = import.meta.env
    const token = await getToken();
    const formData = new FormData();
    file && formData.append("image", file);
    const response = await fetch(`${url}/upload`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`
        },
        body: formData
    });
    const data = await response.json();
    console.log(data);
}

export const uploadRequestBase64 = async (getToken: GetAccessTokenFunction, file: string) => {
    const {VITE_API_URL: url} = import.meta.env
    const token = await getToken();

    const response = await fetch(`${url}/base`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ image: file })
    });
    const data = await response.json();
    console.log(data);
}
