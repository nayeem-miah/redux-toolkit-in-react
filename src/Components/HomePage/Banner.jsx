export default function Banner() {
    return (
        <section className="">
            <div className={`bg-blue-500 text-white`}>
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl">
                        Elevate Your Experience with Our Services
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl">
                        Discover the best solutions tailored for your needs. Join us today and take the first step towards success!
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-white text-blue-600 shadow-md hover:bg-gray-200">
                            Get Started
                        </button>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-white text-white hover:bg-white hover:text-blue-600">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
