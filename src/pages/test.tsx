import { Button } from "@/components/ui/button"
import { useThemeStore } from "@context/use-theme"

function Test() {
  const {setTheme} = useThemeStore()

  return (
   <div>
     <Button onClick={()=>setTheme('dark')}>
        Dark
     </Button>
     <Button onClick={()=>setTheme('light')}>
        Light
     </Button>
   </div>
  )
}

export default Test