import { useState } from "react";

import { useNavigate } from "react-router-dom";
const Create = () => {

  const [title,setTitle]= useState("")
  const [body,setBody]= useState("")
  const [author,setAuthor]= useState("anand")
const [isPending, setIsPending]= useState(false);
const navigate= useNavigate();

  const handleSubmit=(e)=>{

    e.preventDefault();
    const blog= {title,body,author};
    console.log(blog);
    setIsPending(true)

   fetch("https://royaldatabase.herokuapp.com/blogs", {
    method:'POST',
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify(blog)
   })
   
   .then(()=>{

    console.log("new blog added")
   setIsPending(false)
   navigate("/")

  })

}



  return (
    <>


      <div className="create">
        <h2>add new blog</h2>
        <form onSubmit={handleSubmit}>
          <label>blog title:</label>
          <input 
          type="text"
          required
           value={title}
           onChange={(e)=>{setTitle(e.target.value)}}
            />
          <label>blog body:</label>
          <textarea
          required
           value={body}
           onChange={(e)=>{setBody(e.target.value)}}
          ></textarea>
          <label>Blog author </label>
          <select 
          value={author}
                  onChange={(e)=>{setAuthor(e.target.value)}}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>

          { !isPending && <button>Add blog</button>}
          { isPending && <button disabled>adding blog........</button>}




        </form>
      </div>
    </>
  );
};

export { Create };
