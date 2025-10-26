import React from 'react';
import { Link } from 'react-router-dom';
export default function ShopCard({shop}){
return (
        <div className="p-4 bg-gray-900 rounded border border-gold-700">
            <div className="flex items-center justify-between">
                <div>
                    <div className="font-semibold text-gold-200">{shop.name}</div>
                    <div className="text-sm text-gray-300">{shop.address}</div>
                </div>
                <Link to={`/shop/${shop.id}`} className="text-sm px-3 py-1 border border-gold-600 rounded">View</Link>
            </div>
        </div>
    );
}
