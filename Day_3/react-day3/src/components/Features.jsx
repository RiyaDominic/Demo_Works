function Features() {
  const features = [
    {
      title: "Find Jobs",
      description:
        "Discover job opportunities based on your skills and career interests.",
    },
    {
      title: "Build Your Career",
      description:
        "Connect with companies and find opportunities that match your goals.",
    },
    {
      title: "Easy Applications",
      description:
        "Explore opportunities and apply to suitable positions easily.",
    },
  ];

  return (
    <section id="features" className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
            Simple tools to help you move forward in your career.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;