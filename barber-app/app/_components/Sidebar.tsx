import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { quickSearchOptions } from "../_constants/search"

const Sidebar = () => {
  return (
    <div>
        
      {/*BOTAO DO MENU LATERAL A DIREITA*/}
      {/* <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon></MenuIcon>
          </Button>
        </SheetTrigger> */}

        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>

          <div className="flex items-center gap-5 border-b border-solid py-5">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1596362601603-b74f6ef166e4?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </Avatar>

            <div>
              <p className="font-bold">Lumi Barber</p>
              <p className="text-xs">lumibarber53@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-b border-solid p-5 py-5">
            <SheetClose asChild>
              <Button className="justify-start gap-2" variant="ghost" asChild>
                <Link href="/">
                  <HomeIcon size={18} />
                  Inicio
                </Link>
              </Button>
            </SheetClose>

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
                <Image
                  src={options.imageUrl}
                  height={18}
                  width={18}
                  alt={options.title}
                ></Image>
                {options.title}
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
      {/* </Sheet> */}

    </div>
  )
}

export default Sidebar;
