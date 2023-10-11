export const getAllUsers = async () => {
    const {VITE_API_URL: url} = import.meta.env
    const response = await fetch(`${url}/users`);
    const data = await response.json();
    console.log(data);
}
