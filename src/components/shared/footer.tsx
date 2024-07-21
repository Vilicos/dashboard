function Footer() {
  const currenYear = (new Date()).getFullYear()
  return (
    <div className="container">
        <p className="font-medium">&copy; {currenYear} | Nijat Hamid</p>
        <div>
            <a href="" className="inline-block">
                
            </a>
        </div>
    </div>
  )
}

export default Footer