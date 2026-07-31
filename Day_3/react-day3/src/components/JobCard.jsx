function JobCard({ job }) {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Experience:</strong> {job.experience}</p>
      <p><strong>Salary:</strong> {job.salary}</p>

      <button>Apply Now</button>
    </div>
  );
}

export default JobCard;