import { BeatLoader } from 'react-spinners'

function Loader() {
  return (
    <div className="flex items-center min-h-screen">
        <BeatLoader size={14} color="#3375FE" className="mx-auto" />
      </div>
  )
}

export default Loader