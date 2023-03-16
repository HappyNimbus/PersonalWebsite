import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'
const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Test1",
      desc: "hello"
    },
    {
      id: 2,
      title: "Test2",
      desc: "I WOULD LIKE TO THANK YOU FOR USING THIS, THIS IS A DEMO FOR LONG SETNACES. NENENENENNENENENENENEN"
    },
    {
      id: 3,
      title: "Test3",
      desc: "helloWorld"
    }


  ]

  return (
    <div className = 'home'>
        <div className ='posts'>
          {posts.map(post=>(
            <div className = 'post' key={post.id}>
              <div className = 'imgP'>
                <img src = "" alt = "" />
              </div>
              <div className='contentP'>
                <Link to={`/post/${post.id}`} style ={{textDecoration: 'none'}}>
                <h1 className = 'h1'>{post.title}</h1>
                </Link>
                <p className = 'p'>{post.desc}</p>
                <button className = 'buttonHome'>Read More</button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
//35.03

export default Home