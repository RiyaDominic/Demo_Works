import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

import jobImage from "./assets/job.avif";

function App() {
  return (
    <>
      <Navbar />

      <div className="cards">
        <Card
          title="Frontend Developer"
          description="Build responsive web applications using React."
          image={jobImage}
          buttonLabel="Apply Now"
        />

        <Card
          title="Backend Developer"
          description="Develop scalable APIs using Node.js."
          image={jobImage}
          buttonLabel="View Details"
        />

        <Card
          title="Cloud Engineer"
          description="Manage cloud infrastructure and deployments."
          image={jobImage}
          buttonLabel="Learn More"
        />
      </div>

      <Footer />
    </>
  );
}

export default App;