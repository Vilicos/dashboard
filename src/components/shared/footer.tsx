
function Footer() {
  const currenYear = (new Date()).getFullYear()
  return (
    <footer className="container text-center">
        <p className="font-medium text-muted-foreground">&copy; {currenYear} | Nijat Hamid | Lazarus Project</p>
    </footer>
  )
}

export default Footer