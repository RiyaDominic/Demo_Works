import { useState } from "react";

const initialForm = {
  title: "",
  company: "",
  location: "",
  type: "Full-time",
  category: "Development",
  salary: "",
  description: "",
};

function JobPostForm({ onJobCreate }) {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newJob = {
      ...formData,
      id: Date.now(),
    };

    onJobCreate(newJob);
    setFormData(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Post a New Job
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Add the details of your job opening.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Job Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g. React Developer"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Company
          </label>

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Company name"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="e.g. Remote or Kochi"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Job Type
          </label>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          >
            <option value="Development">Development</option>
            <option value="Cloud">Cloud</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Salary
          </label>

          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
            placeholder="e.g. ₹4 - ₹6 LPA"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Job Description
        </label>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="5"
          placeholder="Describe the job responsibilities and requirements"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        Create Job
      </button>
    </form>
  );
}

export default JobPostForm;