import React from 'react'

const NotFound = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</p>
                <p className="mt-2 text-gray-600">
                    Sorry, the page you are looking for does not exist.
                </p>
                <div className="mt-6">
                    <a
                        href="/"
                        className="inline-block rounded-md bg-red-600 px-5 py-2 text-white hover:bg-red-700 transition"
                    >
                        Go to Homepage
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NotFound