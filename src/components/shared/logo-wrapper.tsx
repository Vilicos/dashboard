import { Link } from 'react-router-dom'

function LogoWrapper() {
  return (
    <Link to='/' title="Vilicos" className="inline-block w-[142px] h-10">
        <img src="/img/logo.png" alt="Vilicos" className="w-full h-full object-cover" />
      </Link>
  )
}

export default LogoWrapper