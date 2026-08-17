function JobGrid() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Remote",
      salary: "₹4–6 LPA",
    },
    {
      title: "Python Developer",
      company: "Cloud Systems",
      location: "Bangalore",
      salary: "₹5–7 LPA",
    },
    {
      title: "DevOps Intern",
      company: "Startup Labs",
      location: "Remote",
      salary: "₹15K/month",
    },
    {
      title: "React Developer",
      company: "Digital Works",
      location: "Kochi",
      salary: "₹4–6 LPA",
    },
    {
      title: "Backend Developer",
      company: "Software Hub",
      location: "Hyderabad",
      salary: "₹5–8 LPA",
    },
    {
      title: "Cloud Engineer",
      company: "CloudTech",
      location: "Remote",
      salary: "₹6–9 LPA",
    },
  ];

  return (
    <section id="jobs" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Latest Job Opportunities
          </h2>

          <p className="mt-4 text-gray-600">
            Explore opportunities that match your skills and interests.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={`${job.title}-${job.company}`}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {job.title}
              </h3>

              <p className="mt-2 font-medium text-blue-600">
                {job.company}
              </p>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>📍 {job.location}</p>
                <p>💰 {job.salary}</p>
              </div>

              <button className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobGrid;