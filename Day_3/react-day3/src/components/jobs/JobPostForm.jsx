
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

const inputClass =
  "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const labelClass =
  "mb-1 block text-sm font-medium text-gray-700";

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
      className="space-y-6 rounded-xl bg-white p-4 shadow-sm sm:p-6"
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
          <label className={labelClass} htmlFor="job-title">
            Job Title
          </label>

          <input
            id="job-title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g. React Developer"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="job-company">
            Company
          </label>

          <input
            id="job-company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Company name"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="job-location">
            Location
          </label>

          <input
            id="job-location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="e.g. Remote or Kochi"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="job-type">
            Job Type
          </label>

          <select
            id="job-type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="job-category">
            Category
          </label>

          <select
            id="job-category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="Development">Development</option>
            <option value="Cloud">Cloud</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="job-salary">
            Salary
          </label>

          <input
            id="job-salary"
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
            placeholder="e.g. ₹4 - ₹6 LPA"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="job-description">
          Job Description
        </label>

        <textarea
          id="job-description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="5"
          placeholder="Describe the job responsibilities and requirements"
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 hover:shadow-sm sm:w-auto"
      >
        Create Job
      </button>
    </form>
  );
}

export default JobPostForm;