import '../App.css'
import {useAuth0} from "@auth0/auth0-react";
import {protectedRequest, uploadRequest, uploadRequestBase64} from "../services/request.service.ts";
import React, {useState} from "react";
import {getAllUsers} from "../services/users.services.ts";

function App() {
    const { logout, getAccessTokenSilently } = useAuth0()
    const [image, setImage] = useState<string>('')
    const [file, setFile] = useState<File>()
    console.log({image})
    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files !== null){
            const file = e.target.files[0];
            setFile(file);
            console.log(file)
        }
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files !== null){
            const file = e.target.files[0];
        transformImage(e.target.files[0])
            console.log(file)
        }
    }

    const transformImage = (image:File) => {
        const reader:FileReader = new FileReader()
        if (image) {
            reader.onloadend = () => {
                const base64String = (reader.result as string).replace('data:', '').replace(/^.+,/, '');
                setImage(base64String)
            }
            reader.readAsDataURL(image)
        } else {
            setImage('')
        }
    }


    return (
        <>

            <h1>Vite + React + Home</h1>
            <div className="card">
                <input  accept='image/*,audio/*' type="file" onChange={handleFileInput}/>

                <button onClick={()=>uploadRequest(getAccessTokenSilently,file)}>Upload File Request</button>
                <button onClick={()=>protectedRequest(getAccessTokenSilently)}>Protected Request</button>
                <button onClick={()=>getAllUsers()}>Get Users</button>
                <input  accept='image/*,audio/*' type='file'
                       onChange={handleImageUpload} />
                <button onClick={()=>uploadRequestBase64(getAccessTokenSilently,image)}>Upload Image Base64</button>
                <button onClick={()=>logout()}>Logout</button>
            </div>
        </>
    )
}

export default App
