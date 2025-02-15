import React, { useState, useEffect } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/assets/data/blogs.json')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Blog Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {posts.map((post, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-lg bg-white">
                        <h3 className="text-xl font-semibold">{post.title}</h3>
                        <p className="text-gray-700">{post.description}</p>
                        <a href={post.link} target="_blank" className="text-blue-600 hover:underline mt-2 inline-block">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
