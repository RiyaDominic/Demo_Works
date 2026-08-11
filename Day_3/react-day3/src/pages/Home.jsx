import Navbar from "../components/Navbar";
import JobList from "../components/JobList";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Find Your Dream Job</h1>
        <p>
          Discover opportunities and take the next step in your career.
        </p>
        <button onClick={() => {
  document.getElementById("jobs").scrollIntoView({
    behavior: "smooth",
  });
}}>
  Explore Jobs
</button>
      </section>

      <section className="jobs-section" id="jobs">
        <h2>Latest Job Opportunities</h2>
        <JobList />
      </section>

      <Footer />
    </>
  );
}

export default Home;