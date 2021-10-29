import Link from "next/link"

const Home = () => {
  return (
    <>

      <h1>Next js Pre-Rendering</h1>
      <Link href="/user">
        <a>
          Users
        </a>
      </Link>
      <Link href="/posts">
        <a>
          Posts
        </a>
      </Link>
    </>
  )
}
export default Home