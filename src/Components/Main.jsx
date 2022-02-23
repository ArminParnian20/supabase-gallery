import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { supabase } from './../client';
const Main = () => {
    const [posts,setposts]=useState([]);
    const [storageImage,setstorageImage]=useState([]);
    const getallImgaes = async ()=>{

        const { data, error } = await supabase
        .storage
        .from('posts')
        .list('', {
          limit: 100,
          offset: 0,
          sortBy: { column:'name', order: 'asc' },
        })
        setstorageImage(data);
     }
    useEffect(()=>{
        fetchPosts()
    },[])
    async function fetchPosts(){
        const {data} =await supabase
        .from('posts')
        .select()
        setposts(data);
    }
    return (<Fragment>
        <div className="main">
           <div className="cantainer">
           {
          posts.map(post=>(
                        <div key={post.id} className="image-box">
                          <img src={`https://vnbyjoiqnxvxjhlqytqx.supabase.co/storage/v1/object/public/posts/${post.name}`} alt="" />
                          <div>
                                <h2>{post.title}</h2>
                                <p>{post.context}</p>
                          </div>
                        </div>
                    ))
            }
           </div>
        </div>
    </Fragment>  );
}
 
export default Main;