import { Button } from "@/components/ui/button"
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon, Sheet } from "lucide-react"
import { quickSearchOptions } from "../_constants/search"

const MenuRight = () => {
  return (
    <div>
      {/*BOTAO DO MENU LATERAL A DIREITA*/}
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon></MenuIcon>
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-4 border-b border-solid p-5 py-5">
            <Button className="justify-start gap-2" variant="ghost">
              <HomeIcon size={18}></HomeIcon>
              Inicio
            </Button>

            <Button className="justify-start gap-2" variant="ghost">
              <CalendarIcon size={18}></CalendarIcon>
              Agendamentos
            </Button>
          </div>

          {/*DIV QUE CONTEM OS ICONES DO MENU LATERAL*/}
          <div className="flex flex-col gap-4 border-b border-solid p-5 py-5">
            {quickSearchOptions.map((options) => (
              <Button
                className="justify-start gap-2"
                variant="ghost"
                key={options.title}
              >
               
              </Button>
            ))}
          </div>

          <div className="flex flex-col justify-end gap-4 p-5 py-10">
            <Button variant="ghost" className="justify-start gap-2">
              <LogOutIcon size={18}></LogOutIcon>
              Log Out
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuRight
