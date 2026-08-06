// import JobCard from "./JobCard";

// function JobList() {
//   const jobs = [
//     {
//       id: 1,
//       title: "Frontend Developer",
//       company: "Google",
//       experience: "2 Years",
//       salary: "₹8 LPA",
//     },
//     {
//       id: 2,
//       title: "Backend Developer",
//       company: "Microsoft",
//       experience: "3 Years",
//       salary: "₹10 LPA",
//     },
//     {
//       id: 3,
//       title: "Cloud Engineer",
//       company: "Amazon",
//       experience: "1 Year",
//       salary: "₹9 LPA",
//     },
//     {
//       id: 4,
//       title: "React Developer",
//       company: "Infosys",
//       experience: "Freshers",
//       salary: "₹5 LPA",
//     },
//   ];

//   return (
//     <div className="job-list">
//       <h1>Available Jobs</h1>

//       {jobs.map((job) => (
//         <JobCard key={job.id} job={job} />
//       ))}
//     </div>
//   );
// }

// export default JobList;
// import { useEffect, useState } from "react";

// function JobList() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const fetchJobs = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts?_limit=10"
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const data = await response.json();
//       setJobs(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();

//     const interval = setInterval(() => {
//       fetchJobs();
//     }, 30000);

//     return () => clearInterval(interval);
//   }, []);

//   if (loading) {
//     return <h2 className="status">Loading jobs...</h2>;
//   }

//   if (error) {
//     return <h2 className="status error">{error}</h2>;
//   }

//   return (
//     <div className="container">
//       <h1>Job Listings</h1>

//       {jobs.map((job) => (
//         <div key={job.id} className="card">
//           <h3>{job.title}</h3>
//           <p>{job.body}</p>

//           <button>Apply Now</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default JobList;

import { useEffect, useState } from "react";
import { fetchJobs } from "../services/jobService";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadJobs = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchJobs();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();

    const interval = setInterval(loadJobs, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <h2>Loading jobs...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  return (
    <div className="container">
      <h1>Job Listings</h1>

      {jobs.map((job) => (
        <div className="card" key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.body}</p>

          <button>Apply Now</button>
        </div>
      ))}
    </div>
  );
}

export default JobList;