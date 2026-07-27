// Sample Job Data
const jobs = [
  { title: "Frontend Developer", salary: 40000, experience: 2, applicants: 50 },
  { title: "Backend Developer", salary: 60000, experience: 3, applicants: 35 },
  { title: "Cloud Engineer", salary: 80000, experience: 5, applicants: 20 },
  { title: "React Developer", salary: 55000, experience: 1, applicants: 40 },
];

// 1. Filter jobs by salary
const highSalaryJobs = jobs.filter(job => job.salary > 50000);
console.log("High Salary Jobs:", highSalaryJobs);

// 2. Count total applicants
const totalApplicants = jobs.reduce((sum, job) => sum + job.applicants, 0);
console.log("Total Applicants:", totalApplicants);

// 3. Sort jobs by experience
const sortedJobs = [...jobs].sort((a, b) => a.experience - b.experience);
console.log("Sorted by Experience:", sortedJobs);

// 4. Map job titles
const jobTitles = jobs.map(job => job.title);
console.log("Job Titles:", jobTitles);

// 5. Reduce salary totals
const totalSalary = jobs.reduce((sum, job) => sum + job.salary, 0);
console.log("Total Salary:", totalSalary);

// ES6 Examples
const user = {
  name: "Riya",
  role: "Developer"
};

// Destructuring
const { name, role } = user;
console.log(`${name} is a ${role}`);

// Spread Operator
const newJobs = [...jobs];
console.log(newJobs);