const ArcticleListByCategory=({arcticles,category})=>{
  return(
      <>
      <h1>Showing news for category</h1>
      {
          arcticles.map((art)=>{
              return(
                  <div>
                      <h2>{art.id} {art.title}</h2>
                      <p>{art.description}</p>
                  </div>
              )
          }
          )
      }
      </>
  )
}

export default  ArcticleListByCategory

export async function getServerSideProps (context){
    const {params}=context
    const {category}=params
   const response=await fetch(
       `http://localhost:4000/news?category=${category}`
       )
   const data=await response.json()
    return {
        props:{
            arcticles:data,
            category,

        }
    }
}