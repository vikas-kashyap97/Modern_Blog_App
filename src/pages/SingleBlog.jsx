import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaClock, FaUser } from 'react-icons/fa';
import { MdDateRange } from "react-icons/md";
import SideBar from '../components/SideBar';

const SingleBlog = () => {
  const { blog, error } = useLoaderData();

  if (error) {
    return <div>{error}</div>;
  }

  const { title, image, category, author, published_date, reading_time, content } = blog;

  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4 '>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
      </div>

      {/* Blog details */}
      <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
          <div>
            <img src={image} alt="" className='w-full mx-auto rounded shadow-lg shadow-black' />
          </div>
          <h2 className='text-3xl font-bold mb-4 mt-8 text-blue-500 cursor-pointer'>{title}</h2>
          <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-1' /> {author} | <MdDateRange className='inline-flex items-center mr-1' />{published_date}</p>
          <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-1' /> {reading_time} </p>
          <p className='text-base text-gray-500 mb-6'>{content}</p>
          <div className='text-base text-gray-500 mb-6'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet accusamus pariatur placeat. Ipsam, similique? Nesciunt ab laudantium, vero aperiam doloremque atque dolor in aliquid, enim ullam quod nulla molestias et.</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit numquam commodi, veritatis saepe officiis enim dolor magnam quo alias! Fugiat recusandae voluptatem esse ratione! Officia alias laudantium vitae hic.
              Unde odio dolore sequi, eaque quibusdam ullam fugiat corporis! Voluptas, cum? Tempora perferendis consequatur asperiores quo iusto iste magni blanditiis, praesentium ipsa, aliquam rem sed rerum! Laborum itaque nesciunt eligendi?</p><br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sapiente soluta, reprehenderit quaerat officia rem quisquam ullam odio expedita commodi explicabo. Aliquid aut deserunt neque aspernatur esse nulla optio id!</p><br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, veniam nisi sequi amet cum in reiciendis, vitae labore voluptas totam, obcaecati alias at omnis minus consequatur sit expedita fugit eius?
              Voluptas animi suscipit veritatis, molestias esse quaerat sint? Ab delectus vero, commodi nulla quae, aut, quos ullam ut nostrum numquam ipsum in. Illum, est ipsam? Quo alias blanditiis voluptatem odio.
              Perferendis aperiam delectus facilis reiciendis ab quia sint possimus repellat, dicta amet commodi facere distinctio magni. Doloribus maiores commodi eum in alias voluptatibus corporis, consequatur tempore inventore magni fugit hic.</p><br />
          </div>
        </div>

        <div className='lg:w-1/2'>
          <SideBar />
        </div>

      </div>
    </div>
  )
}

export default SingleBlog;
