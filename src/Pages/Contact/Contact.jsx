import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log('Form submitted:', formData);
        toast.success("success send message")
    };

    return (
        <div className=" py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Contact Us
                </h2>


                {/* Additional text section */}
                <div className="mb-12 text-center">
                    <p className="text-lg text-gray-700">
                        We value your feedback and are always happy to hear from you. Whether it's an inquiry, suggestion, or concern, your message will be given our full attention.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        If you're in need of support, please provide as much detail as possible so we can assist you more effectively. We look forward to connecting with you!
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Your email"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Write your message here"
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-8 py-3 m-2 text-lg font-semibold rounded bg-yellow-500 text-white shadow-lg w-full hover:bg-yellow-600"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Social Media Links Section */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-gray-700">
                        You can also connect with us on social media or reach us directly through the following methods:
                    </p>
                    <div className="mt-4 flex justify-center space-x-6">
                        <a href="https://facebook.com" className="text-indigo-600 hover:text-indigo-800">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" className="text-indigo-600 hover:text-indigo-800">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://linkedin.com" className="text-indigo-600 hover:text-indigo-800">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
