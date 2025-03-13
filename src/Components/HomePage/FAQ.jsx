import React from 'react';

const FAQ = () => {
    return (
        <div className=" ">
            <div className=" container mx-auto py-12">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    <div className="border-b border-gray-300 pb-6">
                        <h3 className="text-xl font-semibold text-gray-700">
                            What is EID Festival?
                        </h3>
                        <p className="text-gray-600 mt-2">
                            EID Festival is a special celebration of the Islamic holiday Eid. It's a time to gather, celebrate, and enjoy the festivities with family, friends, and loved ones.
                        </p>
                    </div>
                    <div className="border-b border-gray-300 pb-6">
                        <h3 className="text-xl font-semibold text-gray-700">
                            How do I participate in the EID Festival?
                        </h3>
                        <p className="text-gray-600 mt-2">
                            You can participate in the EID Festival by visiting our website and signing up for various events and activities. Stay tuned for our festival schedule and enjoy the fun!
                        </p>
                    </div>
                    <div className="border-b border-gray-300 pb-6">
                        <h3 className="text-xl font-semibold text-gray-700">
                            Are there any special discounts for EID?
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Yes! We offer exclusive EID discounts on select items. Be sure to check out our store for special offers during the festival season.
                        </p>
                    </div>
                    <div className="border-b border-gray-300 pb-6">
                        <h3 className="text-xl font-semibold text-gray-700">
                            How can I contact customer support during the festival?
                        </h3>
                        <p className="text-gray-600 mt-2">
                            You can reach our customer support team through our contact page. We will also have a live chat feature available to assist you during the festival days.
                        </p>
                    </div>
                    <div className="border-b border-gray-300 pb-6">
                        <h3 className="text-xl font-semibold text-gray-700">
                            Is there a registration fee for the EID Festival events?
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Most of our EID Festival events are free to join, but some may require a small registration fee for exclusive experiences. Check the event details for more information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
