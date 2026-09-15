import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Modal from "../components/ui/Modal";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

function UIComponentsDemo() {
  const [name, setName] = useState("");
  const [jobType, setJobType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoaderDemo = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
    }, 1500);
  };

  const jobOptions = [
    { value: "full-time", label: "Full Time" },
    { value: "part-time", label: "Part Time" },
    { value: "internship", label: "Internship" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          UI Component Library
        </h1>

        <p className="text-center text-gray-600 mt-2 mb-8">
          Reusable and props-driven React components
        </p>

        {/* Buttons */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Buttons
          </h2>

          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Delete</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </section>

        {/* Inputs */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Input
          </h2>

          <Input
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </section>

        {/* Select */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Select Dropdown
          </h2>

          <Select
            label="Job Type"
            name="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            options={jobOptions}
          />
        </section>

        {/* Modal */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Modal
          </h2>

          <Button onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Job Details"
          >
            <p className="text-gray-600 mb-4">
              This is a reusable modal component.
            </p>

            <Button onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </Modal>
        </section>

        {/* Loader */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Loader
          </h2>

          <div className="flex flex-wrap gap-6 items-center">
            <Loader size="small" />
            <Loader size="medium" />
            <Loader size="large" text="Loading..." />
          </div>

          <div className="mt-5">
            <Button
              onClick={handleLoaderDemo}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Test Loading"}
            </Button>
          </div>
        </section>

        {/* Toast */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Toast Notification
          </h2>

          <Button onClick={() => setShowToast(true)}>
            Show Success Toast
          </Button>
        </section>

        {showToast && (
          <Toast
            message="Action completed successfully!"
            type="success"
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
    </div>
  );
}

export default UIComponentsDemo;