import PageHeading from "@components/shared/page-heading";
import TeamCard from "./components/team-card";
import InviteMember from "./components/invite-member";

function Team() {
  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <PageHeading heading="Team Management" description="Invite and manage team members." />
        </div>
        <InviteMember/>
      </div>
      <TeamCard/>
    </>
  );
}

export default Team;
