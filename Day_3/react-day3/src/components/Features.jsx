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
    <section id="features" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Everything you need
          </h2>

          <p className="mt-4 text-gray-600">
            Simple tools to help you move forward in your career.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
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