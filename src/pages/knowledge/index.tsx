import PageHeading from "@components/shared/page-heading"
import TestAgent from "./components/test-agent"
import Files from "./components/files"
import Conversation from "./components/conversation"

function Knowledge() {
  return (
    <>
    <div className="flex items-start justify-between">
      <div>
        <PageHeading heading="Knowledge Base" description="Provide powerful resources to improve agent performance." />
      </div>
      <TestAgent/>
    </div>
    <Files/>
    <Conversation/>
  </>
  )
}

export default Knowledge