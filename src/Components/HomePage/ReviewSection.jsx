export default function ReviewSection() {
    // Array of reviews
    const reviews = [
        {
            name: "John Doe",
            role: "Visitor",
            reviewText: "A wonderful Eid celebration. The website was easy to navigate and the countdown kept me excited!",
            image: "https://via.placeholder.com/50",
        },
        {
            name: "Sara Smith",
            role: "Visitor",
            reviewText: "A festive experience! I loved the design and the interactive features of the website.",
            image: "https://via.placeholder.com/50",
        },
        {
            name: "Ali Khan",
            role: "Visitor",
            reviewText: "Loved the countdown timer! It really brought the excitement of Eid closer!",
            image: "https://via.placeholder.com/50",
        },
        {
            name: "Ali Khan",
            role: "Visitor",
            reviewText: "Loved the countdown timer! It really brought the excitement of Eid closer!",
            image: "https://via.placeholder.com/50",
        },
    ];

    return (
        <section className="bg-gradient-to-r from-yellow-300 to-orange-500 py-16 px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
                What Our Visitors Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 space-x-8">

                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg w-80 h-auto transform hover:scale-105 transition duration-300 ease-in-out"
                    >
                        <p className="text-lg text-gray-700 mb-4">{review.reviewText}</p>
                        <div className="flex items-center justify-center space-x-2">
                            <img
                                src={review.image}
                                alt="Reviewer"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h4 className="text-xl font-semibold text-yellow-900">
                                    {review.name}
                                </h4>
                                <p className="text-sm text-gray-500">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
