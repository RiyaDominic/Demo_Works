export const employerStats = [
  {
    title: "Total Jobs",
    value: "24",
    description: "Active job postings",
    color: "blue",
  },
  {
    title: "Total Applicants",
    value: "156",
    description: "Received applications",
    color: "green",
  },
  {
    title: "Shortlisted",
    value: "42",
    description: "Candidates shortlisted",
    color: "purple",
  },
  {
    title: "Interviews",
    value: "18",
    description: "Scheduled interviews",
    color: "orange",
  },
];

export const candidateStats = [
  {
    title: "Applications",
    value: "12",
    description: "Total applications",
    color: "blue",
  },
  {
    title: "Saved Jobs",
    value: "8",
    description: "Jobs saved for later",
    color: "green",
  },
  {
    title: "Shortlisted",
    value: "4",
    description: "Applications shortlisted",
    color: "purple",
  },
  {
    title: "Interviews",
    value: "3",
    description: "Upcoming interviews",
    color: "orange",
  },
];

export const employerMenuItems = [
  { label: "Overview", path: "/dashboard/employer" },
  { label: "Post Jobs", path: "/dashboard/employer/jobs" },
  { label: "Applicants", path: "/dashboard/employer/applicants" },
  { label: "Interviews", path: "/dashboard/employer/interviews" },
];

export const candidateMenuItems = [
  { label: "Overview", path: "/dashboard/candidate" },
  { label: "Browse Jobs", path: "/dashboard/candidate/jobs" },
  { label: "Applications", path: "/dashboard/candidate/applications" },
  { label: "Saved Jobs", path: "/dashboard/candidate/saved" },
];