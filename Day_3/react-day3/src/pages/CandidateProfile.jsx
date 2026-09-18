import { useState } from "react";
import { candidateProfile } from "../data/profileData";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileDetails from "../components/profile/ProfileDetails";
import SkillsSection from "../components/profile/SkillsSection";
import ProfileEditForm from "../components/profile/ProfileEditForm";
import ResumeUpload from "../components/profile/ResumeUpload";

function CandidateProfile() {
  const [profile, setProfile] = useState(candidateProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedProfile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  const handleResumeChange = (resume) => {
    setProfile((previous) => ({
      ...previous,
      resume,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        {isEditing ? (
          <ProfileEditForm
            profile={profile}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <>
            <ProfileHeader
              profile={profile}
              onEdit={() => setIsEditing(true)}
            />

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <ProfileDetails profile={profile} />
              </div>

              <div className="space-y-6">
                <SkillsSection skills={profile.skills} />

                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Contact Information
                  </h2>

                  <div className="mt-4 space-y-3 text-sm text-gray-600">
                    <p>📧 {profile.email}</p>
                    <p>📞 {profile.phone}</p>
                    <p>📍 {profile.location}</p>
                  </div>
                </div>

                <ResumeUpload
                  resume={profile.resume}
                  onResumeChange={handleResumeChange}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CandidateProfile;