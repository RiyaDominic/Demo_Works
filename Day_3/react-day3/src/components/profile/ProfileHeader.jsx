function ProfileHeader({ profile, onEdit }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
            {profile.name
              .split(" ")
              .map((name) => name[0])
              .join("")}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {profile.name}
            </h1>

            <p className="mt-1 text-gray-600">
              {profile.headline}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              📍 {profile.location}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;