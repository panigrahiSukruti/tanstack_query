
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from '../components/PostForm'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPost, updatePost } from '../api/posts';

const EditPost = () => {
    const queryClient = useQueryClient();
    const navigate=useNavigate();
    const { id } = useParams();
    const {
        isLoading,
        isError,
        data: post,
        error,
      } = useQuery({
        queryKey: ["posts",id],
        queryFn: ()=>fetchPost(id),
      });

      const updatePostMutation = useMutation({
        mutationFn: updatePost,
        onSuccess: ()=>{
            queryClient.invalidateQueries({ queryKey: ['posts']});
            navigate("/")
        }

      })
      if (isLoading) return "loading...";
      if (isError) return `Error: ${error.message}`;

      const handleSubmit=(updatedPost)=>{
        updatePostMutation.mutate({id, ...updatedPost})
        console.log(updatedPost)

      }
  return (
    <div>
      <PostForm onSubmit={handleSubmit} intialValue={post}/>
    </div>
  )
}

export default EditPost
