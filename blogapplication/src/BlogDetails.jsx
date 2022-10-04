
import {useParams} from "react-router-dom"
import { useFetch } from "./useFetch";

import { useNavigate } from "react-router-dom";

const BlogDetails= ()=>{
    const {id}= useParams();

    const { data: blog, isPending, error }= useFetch(`https://royaldatabase.herokuapp.com/blogs${id}`);
const navigate= useNavigate();

    const handleClick=()=>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:"DELETE",
        })
        .then(()=>{
           navigate("/")
        })
    }
    return <>
    
    <div className="blog-details">
 
 {isPending && <div>Loading...</div> }
 {error && <div>{error}</div>}
 {blog && (
    
    <article>
        <h2>{blog.title}</h2>
        <p>written by:{blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick}>delete</button>
    </article>

 )}
    </div>


    </>
}

export {BlogDetails}