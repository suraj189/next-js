import { useEffect,useState } from "react";
import useSWR from "swr";

const Dashboard=()=>{

    
    const [dashboardData,setDashboardData]=useState(null)
     const fetcher=async()=>{
        const response= await fetch('http://localhost:4000/dashboard')
        const data=await response.json()
        return data
     }
   
     const {data,error}=useSWR('dashboard',fetcher)

     if(error) return "AN Error has occur"
     if(!data) return 'Loading'


   

    return(
        <div>
            <h2>Dashboard</h2>
            <h2>Posts-{data.posts}</h2>
            <h2>Likes-{data.likes}</h2>
            <h2>Followers-{data.followers}</h2>
            <h2>Following-{data.following}</h2>
        </div>
    )
}

export default Dashboard