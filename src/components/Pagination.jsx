import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(i => i + 1);

    return (
        <div className="flex justify-center mt-4">
            <nav className="inline-flex">
                <ul className="flex space-x-2">
                    {pages.map(page => (
                        <li key={page}>
                            <button
                                onClick={() => onPageChange(page)}
                                className={`px-4 py-2 rounded-md ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;

