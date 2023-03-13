import React from 'react'
import ReactDOM from 'react-dom/client'


// const Blog = () => {
//     return <article>
//         <h1>React Components</h1>
//         <ol>
//             <li>Components are building blocks</li>
//             <li>Components helps to reuse</li>
//             <li>Components helps to scale ui</li>
//         </ol>
//     </article>
// }

const BlogHeader = () => <h1>React Components</h1>

//React Fragements: Invisible container element used to escape compile time error when if you miss root element

// const BlogList = () => <div>
//     <li>Components are building blocks</li>
//     <li>Components helps to reuse</li>
//     <li>Components helps to scale ui</li>
// </div>
// const BlogList = () => <React.Fragment>
//     <li>Components are building blocks</li>
//     <li>Components helps to reuse</li>
//     <li>Components helps to scale ui</li>
// </React.Fragment> 

//Fragements <> </>
const BlogList = () => <>
    <li>Components are building blocks</li>
    <li>Components helps to reuse</li>
    <li>Components helps to scale ui</li>
</>

const BlogContent = () => <ol>
    <BlogList />
</ol>

const Article = () => <article>
    <BlogHeader />
    <BlogContent />
</article>

const Blog = () => {
    return <>
        <Article />
        <Article />
    </>
}
//entry Component or root component
const App = () => {
    return <div>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
 
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)



