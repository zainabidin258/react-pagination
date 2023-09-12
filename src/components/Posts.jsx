import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Posts = ({posts , loading }) => {
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
    <ul className='list-group mb-4'>
        {posts.map((post, index) => (
            <div key={index} className='view overlay zoom"'> 
                <img
                    key={index}
                    src={post}
                    className='img-fluid'
                    // style={{Hover}}
                />
                {/* <div className="mask flex-center">zoom effect</div> */}
            </div>
        ))}
    </ul>

)
}

export default Posts;

