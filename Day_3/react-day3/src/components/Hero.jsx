function Hero() {
  return (
    <section className="bg-blue-50 px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-4 font-semibold text-blue-600">
          FIND YOUR NEXT OPPORTUNITY
        </p>

        <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
          Find a job that
          <span className="text-blue-600"> fits your future.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Explore job opportunities from growing companies and take
          the next step in your career.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Explore Jobs
          </button>

          <button className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-100">
            Post a Job
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;