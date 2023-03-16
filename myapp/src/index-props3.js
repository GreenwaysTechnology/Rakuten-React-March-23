import React from 'react'
import ReactDOM from 'react-dom/client'
import { POSTS } from './mock-data/posts'
import { Header } from './header/Header'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'


// const Post = props => {
//     const { posts } = props
//     return <div>
//         {
//             posts.map(post => {
//                 return <div>
//                     <h2>ID {post.id} UserId {post.userId}</h2>
//                     <h3>{post.title}</h3>
//                     <p>{post.body}</p>
//                 </div>
//             })
//         }
//     </div>
// }

// const Post = ({ posts }) => <div>
//     {
//         posts.map(({ userId, id, title, body }) => <div key={id}>
//             <h2>ID {id} UserId {userId}</h2>
//             <h3>{title}</h3>
//             <p>{body}</p>
//         </div>)
//     }
// </div>

const Post = ({ posts }) => <div className="App">
    {
        posts.map(post => <div key={post.id} className="card" style={{ width: '18rem' }}>
            <PostDetails post={post} />
        </div>)
    }
</div>
// const PostDetails = ({post}) => <>
//     <h2>ID {post.id} UserId {post.userId}</h2>
//     <h3>{post.title}</h3>
//     <p>{post.body}</p>
// </>
const PostDetails = ({ post: { id, userId, title, body } }) => <>
    <div class="card-body">
        <h5 className="card-title">id  {id} userId {userId}</h5>
        <h5 className="card-title">{title}</h5>
        <p className="card-body">{body}</p>
    </div>
</>

const App = () => {
    return <>
     
        <div className="container">
        <Header>
            <h1>IBM Blog</h1>
        </Header>
            <div className="row">
                <div className="col-sm">
                  <Post posts={POSTS} />
                </div>
            </div>
        </div>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

