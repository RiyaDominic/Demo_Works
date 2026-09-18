function ProfileDetails({ profile }) {
  return (
    <div className="space-y-6">
      {/* About Section */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          About
        </h2>

        <p className="mt-3 leading-7 text-gray-600">
          {profile.about}
        </p>
      </div>

      {/* Education Section */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          Education
        </h2>

        <p className="mt-3 text-gray-600">
          {profile.education}
        </p>
      </div>

      {/* Experience Section */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          Experience
        </h2>

        <p className="mt-3 text-gray-600">
          {profile.experience}
        </p>
      </div>
    </div>
  );
}

export default ProfileDetails;