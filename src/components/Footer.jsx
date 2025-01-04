import React from 'react';

const Footer = () => {
    return (
        <section className="bg-dark">
            <footer className="max-w-7xl mx-auto px-4">
                <p className="text-white py-4 text-center">Created by <span className="text-red-600 font-bold text-lg">Gulam Jakaria</span> |  &copy; {new Date().getFullYear()} All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Footer;