import { useState } from "react"

// eslint-disable-next-line react/prop-types
const PostForm =({ onSubmit, intialValue}) => {
    const [post, setPost] =useState({
        // eslint-disable-next-line react/prop-types
        title: intialValue.title || "",
        // eslint-disable-next-line react/prop-types
        body: intialValue.body|| ""
    });

    const handleChangeInput = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }
    const renderField = (label) =>(
        <div>
            <label>{label}</label>
            <input onChange={handleChangeInput} type="text" name={label.toLowerCase()} value={post[label.toLowerCase()]}/>

        </div>
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(post);
        setPost({
            title:"",
            body:""
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderField('Title')}
        {renderField('Body')}
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default PostForm
