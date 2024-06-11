import {Routes, Route} from "react-router-dom";
import PostLists from "./pages/PostLists";
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
function App() {

  return (
    <div className='App'>
     <h1>Awesome blog</h1>
     <Routes>
        <Route path="/" element={<PostLists />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
     </Routes>
    </div>
    
  )
}

export default App
