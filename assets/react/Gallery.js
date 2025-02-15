import React, { useState } from 'react';

const categories = ["wildlife", "macro", "travel"];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("wildlife");

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Photography Gallery</h2>
            <div className="flex space-x-4 mb-4">
                {categories.map(category => (
                    <button key={category} className={`px-4 py-2 rounded ${selectedCategory === category ? "bg-gray-900 text-white" : "bg-gray-300"}`} onClick={() => setSelectedCategory(category)}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5].map((img) => (
                    <div key={img} className="relative group">
                        <img src={`/assets/images/${selectedCategory}/${img}.jpg`} alt={`${selectedCategory} ${img}`} className="w-full h-64 object-cover rounded shadow-lg" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-bold">View</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
