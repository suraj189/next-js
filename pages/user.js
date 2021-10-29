import UserList from "../Components/User"

const User=({users})=>{

    return(
        <>
        <h1>List of users</h1>
        {users.map((user,i)=>{
            return(
                <div key={i}>
                  <UserList userList={user}/>
                </div>
            )
        })}
        </>
    )
}

export default  User


export async function  getStaticProps(){
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data);
    return{
        props:{
            users:data,
        }
    }

}