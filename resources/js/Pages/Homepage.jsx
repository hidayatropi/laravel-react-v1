import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import NavBar from '@/Components/Navbar';
import PostList from '@/Components/Homepage/PostList';

export default function Homepage(props) {
  // console.log(props.title);
  return (
      <div className="flex justify-center items-center min-h-screen bg-slite-50">
        <Head title={props.title} />
        <NavBar/>
        <div>
          {/* <PostList/> */}
          {props.news ? props.news.map((data, i) => {
            return (
              <div key={i} className='p-4 m-2 bg-white text-black shadow-md rounded-md'>
                <p className='text-2xl'>{data.title}</p>
                <p className='text-sm'>{data.description}</p>
              </div>
            )
          }) : <p>Saat Ini belum ada berita</p> }
        </div>
      </div>
  )
}