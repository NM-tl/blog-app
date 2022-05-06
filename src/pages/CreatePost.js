import React, {useEffect, useState} from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] =useState("");

    const postCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postCollectionRef, {title, postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid} });
        navigate("/");
    };

    useEffect(() => {
        if(!isAuth) {
            navigate("/Login");
        }
    }, []);

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create A Post</h1>
                <div className="inputGp">
                    <label>Title:</label>
                    <input placeholder="Title..." onChange={(event) => { setTitle(event.target.value);}}></input>
                </div>
                <div className="inputGp">
                    <label>Post: </label>
                    <textarea placeholder="Post..." onChange={(event) => { setPostText(event.target.value);}}></textarea>
                </div>
                <button onClick={ createPost }>Submit</button>
            </div>
        </div>
    );

}

export default CreatePost;