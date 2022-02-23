import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { supabase } from './../client';
import toast, { Toaster } from 'react-hot-toast';

const Managemant = () => {
    const [explanationLength,setexplanationLength]=useState("0");
    const [titleLength,settitleLength]=useState("0");
    const [title,settitle]=useState('');
    const [context,setcontext]=useState('');
    const [posts,setposts]=useState([]);
    const [post,setpost]=useState({title:"",context:"",name:""});
    const [storageImage,setstorageImage]=useState([]);
    const [imageurl,setimageurl]=useState([]);
    const handelTitle=(e)=>{
        settitleLength(e.target.value.length)
        if(e.target.value.length < 15){
            settitle(e.target.value)
        }
    }
    const handlexplanation = (e)=>{
        setexplanationLength(e.target.value.length);
        if(e.target.value.length < 100){
            setcontext(e.target.value)
        }
    }
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
             setcontext("");
             settitle("");
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
    return ( <Fragment>
        <div className='main'>
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
          <div className='manage-form'>
           <div>
               <i className='fas fa-pen-alt t'></i>
               <input type="text" placeholder='title' onChange={e=>handelTitle(e)} value={title}/>
           </div>
           <span className={titleLength > 14 ? 'r':""}>{`15/${titleLength}`}</span>
           <div>
           <i className='fas fa-pen-alt t'></i>
               <textarea placeholder='explanation' onChange={e=>handlexplanation(e)} value={context}></textarea>
           </div>
           <span className={explanationLength > 99 ? 'r':""}>{`100/${explanationLength}`}</span>
           <div>
               <i className='fas fa-image t'></i>
               <input type="file" className='select-file'  onChange={e => setimageurl(e.target.files[0])} />
           </div>
           <div>
               <i  className='fas fa-save t'></i>
               <button onClick={createPost}>send</button>
           </div>
          </div>
          <div className='cantainer'>
                     {
          posts.map(post=>(
                        <div key={post.id} className="text-box">
                          <img src={`https://vnbyjoiqnxvxjhlqytqx.supabase.co/storage/v1/object/public/posts/${post.name}`} alt="" />
                          <div>
                                <h3>{post.title}</h3>
                                <p>{post.context}</p>
                                <i className='fas fa-trash-alt t' onClick={()=>deletpost(post.id,post.name)}></i>
                          </div>
                        </div>
                    ))
            }   
          </div>
  
        </div>
    </Fragment> );
}
 
export default Managemant;