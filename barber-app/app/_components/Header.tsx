import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./ui/card";
import  Image  from "next/image";
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";


const Header = () => {
    return ( 
        <main>
            <Card>
                <CardContent className="flex justify-between items-center flex-row p-5">

                   <Image src="/logo.png" alt="logo" width={180} height={18}/>

                   

                    {/*BOTAO DO MENU LATERAL A DIREITA*/}
                   <Sheet>

                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline">
                                <MenuIcon>
                                    
                                </MenuIcon>
                            </Button>
                        </SheetTrigger>

                        <SheetContent className="overflow-y-auto">

                            <SheetHeader>

                                <SheetTitle className="text-left">Menu</SheetTitle>

                            </SheetHeader>

                            <div className="py-5 border-b flex items-center border-solid gap-5">
                                <Avatar >
                                    <AvatarImage src="https://images.unsplash.com/photo-1596362601603-b74f6ef166e4?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                                </Avatar>

                                <div >
                                    <p className="font-bold">Lumi Barber</p>
                                    <p className="text-xs">lumibarber53@gmail.com</p>
                                </div>
                            </div>


                            <div className="flex flex-col p-5 gap-4 py-5 border-b border-solid ">
                                <SheetClose asChild>
                                    <Button className="justify-start gap-2" variant="ghost" asChild>
                                    <Link href="/">
                                    <HomeIcon size={18} />
                                    Inicio
                                    </Link>
                                    </Button>

                                </SheetClose>

                            
                                <Button  className="justify-start gap-2  " variant="ghost">
                                    <CalendarIcon size={18}></CalendarIcon>
                                    Agendamentos
                                </Button>

                            </div>

                            {/*DIV QUE CONTEM OS ICONES DO MENU LATERAL*/}
                            <div className="flex flex-col p-5 gap-4 py-5 border-b border-solid ">
                                {quickSearchOptions.map((options) => (
                                    
                                     <Button className="justify-start gap-2" variant="ghost" key={options.title}>
                                            <Image src={options.imageUrl} height={18} width={18} alt={options.title}></Image>
                                            {options.title}

                                     </Button>

                                ))}
                               
                               

                            </div>

                            <div className="flex flex-col justify-end p-5 gap-4 py-10  ">
                              <Button variant="ghost" className="justify-start gap-2">
                                <LogOutIcon size={18} >

                                </LogOutIcon>
                                Log Out
                              </Button>
                               
                                
                            </div>

                        </SheetContent>
                   </Sheet>
                </CardContent>
            </Card>
        </main>
     );
}
 
export default Header;