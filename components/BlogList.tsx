import { blog_data } from '@/assets/assets'
import React, { FC } from 'react'
import BlogItem from './BlogItem'

const BlogList: FC = () => {
  return (
    <div>
      {/* Filter buttons */}
      <div className="flex justify-center gap-6 my-10">
        <button className="bg-black text-white py-1 px-4 rounded">All</button>
        <button className="border py-1 px-4">Technology</button>
        <button className="border py-1 px-4">Startup</button>
        <button className="border py-1 px-4">Lifestyle</button>
      </div>

      {/* Blog cards */}
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data.map((item, index) => (
          <BlogItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogList
