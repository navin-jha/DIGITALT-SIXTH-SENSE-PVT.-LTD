import React from "react";
import { useNavigate } from "react-router-dom";

// ✅ central config (future me file me move kar sakte ho)
const categories = [
    { name: "Interactive Panel", slug: "panel" },
    { name: "Laptop", slug: "laptop" },
    { name: "Desktop", slug: "desktop" },
    { name: "Electronic Accessories", slug: "electronic" },
    { name: "Paper Stationary", slug: "stationary" },
    { name: "Furniture", slug: "furniture" },
    { name: "Solar Products", slug: "solar" },
];

function Products() {
    const navigate = useNavigate();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">
                Our Product Categories
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((cat) => (
                    <div
                        key={cat.slug}
                        onClick={() => navigate(`/products/${cat.slug}`)} // ✅ dynamic path
                        className="border p-4 cursor-pointer hover:shadow rounded-lg"
                    >
                        <h2 className="font-semibold">{cat.name}</h2>
                        <p className="text-sm text-gray-500">
                            Click to explore
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;