const NewArcticle=({articles})=>{

    return(
        <>
        <h1>List of News Arcticle</h1>
        {
            articles.map(art=>{
                return(
                    <div key={art.id}>
                        <p>{art.title}</p>
                    </div>
                )
            })
        }
        </>
    )
}

export default NewArcticle


export async function getServerSideProps(){
    const response =await fetch("http://localhost:4000/news")
    const data=await response.json()
    console.log("asdf")
    return{
        props:{
            articles:data
        }
    }
}