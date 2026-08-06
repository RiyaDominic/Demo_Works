import { API_URL } from "../constants/api";

export async function fetchJobs() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return response.json();
}