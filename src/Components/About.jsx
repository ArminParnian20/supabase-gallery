import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { useState,useEffect } from 'react';
import { supabase } from './../client';
import toast, { Toaster } from 'react-hot-toast';

const About = () => {
    const [posts,setposts]=useState([]);
    const [post,setpost]=useState({title:"",context:"",name:""});
    const [storageImage,setstorageImage]=useState([]);
    const [imageurl,setimageurl]=useState([]);
    const {title,context,name}=post;
 const getallImgaes = async ()=>{
    const { data, error } = await supabase
    .storage
    .from('posts')
    .list('', {
      limit: 100,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' },
    })
    setstorageImage(data);
 }
    useEffect(()=>{
        fetchPosts()
    },[])
async function createPost(){
  let name =Math.random(4)
  if(title !=="" && context !=="" && imageurl !==""){
        await supabase
        .from('posts')
        .insert(
            [{title,context,name}]
        )
await supabase
  .storage
  .from('posts')
  .upload(`${name}`,imageurl, {
    cacheControl: '3600',
    upsert: false
  })
         setpost({title:"",context:"",name:""})
        fetchPosts();
        getallImgaes();
        toast.success('Successfully post added!')
  }else{
    toast.error("This didn't work.");
  }

    }
    async function fetchPosts(){
        const {data} =await supabase
        .from('posts')
        .select()
        setposts(data);
    }
    async function deletpost(k,n){
await supabase
  .from('posts')
  .delete()
  .match({ id:k})

  const { data, error } = await supabase
  .storage
  .from('posts')
  .remove([`${n}`])
  console.log(error,n);
  fetchPosts()
  toast.success('post deleted!!!');
    }
    return (<Fragment>
        <div className='about'>
        <Toaster
  position="top-left"
  reverseOrder={false}
/>
           <div className="about-box">
             <input type="text" placeholder='title' value={title} onChange={e=>setpost({...post,title:e.target.value})} />
             <input type="text" placeholder='Context' value={context} onChange={e=>setpost({...post,context:e.target.value})} />
               <input type="file" onChange={e => setimageurl(e.target.files[0]) } />
                <button onClick={createPost}>Create Post</button> 
                {
                    posts.map(post=>(
                        <div key={post.id} className="text-box">
                          <div>
                                <h3>{post.title}</h3>
                                <p>{post.context}</p>
                                <button onClick={()=>deletpost(post.id,post.name)}>delete</button>
                          </div>
                          <img src={`https://vnbyjoiqnxvxjhlqytqx.supabase.co/storage/v1/object/public/posts/${post.name}`} alt="" />
                        </div>
                    ))
                }  
           </div>
        </div>
    </Fragment>);
}
 
export default About;