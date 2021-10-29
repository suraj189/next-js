import Link from "next/link" 


const Post = ({ posts }) => {
  const handleGetId=()=>{
     
  }
    return (
        <>
            {posts.map((post) => {
                return (
                    <div   onClick={()=>handleGetId(post.id)}key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                            <h2> {post.id} {post.title}</h2>    
                        </Link>
                       
                        <hr></hr>
                    </div>
                )

            })}
        </>
    )
}

export default Post

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
  
    return {
        props: {
            posts: data.slice(0,3)
        }
    }
}