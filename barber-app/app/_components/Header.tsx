import { Button } from "@/components/ui/button"
import {Sheet,SheetContent,SheetTrigger} from "@/components/ui/sheet"
import {MenuIcon} from "lucide-react"
import { Card, CardContent } from "./ui/card"
import Sidebar from "./Sidebar"
import Image from "next/image"

const Header = () => {
  return (
    <main>
      <Card>
        <CardContent className="flex flex-row items-center  justify-between p-5">
          <Image src="/logo.png" alt="logo" width={180} height={18}/>
          {/* <div className="logo_container">
            <h1 className="logo">Lumi Barber Shop</h1>
          </div> */}

          {/*BOTAO DO MENU LATERAL A DIREITA COM ICON DO MENU NO HEADER*/}
          <Sheet>
            <SheetTrigger asChild >
              <Button size="icon" variant="outline">
                <MenuIcon/>
              </Button>
            </SheetTrigger>

            <SheetContent>
                <Sidebar />
            </SheetContent>
                
          </Sheet>

          
        </CardContent>
      </Card>
    </main>
  )
}

export default Header
