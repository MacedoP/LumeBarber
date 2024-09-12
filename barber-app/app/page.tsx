
import { Input } from "@/components/ui/input";
import Header from "./_components/Header";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";



const Home = async () => {
  //Chamar o nosso banco de dados aqui

  const barbershops = await db.barbershop.findMany({})
  // console.log({barbershops});
  const barbeariaspopulares = await db.barbershop.findMany({
    orderBy:{
      name: "desc",
    }
  })

  return ( 
    <div>
    <Header/>

      <div className="p-5">

          <h2 className="text-xl">Olá, Macedo</h2>
          <p>
            Segunda Feita, 09 Setembro
          </p>

           {/*Imput Search*/}
          <div className="flex items-center gap-2 mt-6">
            <Input placeholder="Faça sua busca..."/>

            <Button>
              <SearchIcon/>
            </Button>
          
          </div>

          {/*BUSCA RAPIDA OU FILTRADA*/}
          <div className="gap-3 flex">
            <Button className="gap-2 text-white" variant="secondary">
              <Image src="/scissor.svg" alt="Tesoura" width={16} height={16} />
              Cabelo
            </Button>

            <Button className="gap-2 text-white" variant="secondary">
              <Image src="/bigode.svg" alt="Tesoura" width={16} height={16} />
              Barba
            </Button>

            <Button className="gap-2 text-white" variant="secondary">
              <Image src="/Vector.svg" alt="Tesoura" width={16} height={16} />
              Acabamento
            </Button>

          </div>

          {/*Banner abaixo*/}
          <div className="relative w-full h-[150px] mt-6">
            <Image src="/Banner.png" fill  className="object-cover rounded-xl"/>
          </div>


           {/*Agendamento*/}
           <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">Agendamento</h2>
           <Card className="mt-6">
            <CardContent className="flex justify-between p-0">

              <div className=" flex flex-col gap-2 py-5 pl-5">

                <Badge className="w-fit">Confirmado</Badge>

                <h3 className="font-semibold">Corte de Cabelo</h3>

                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                   <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
                  </Avatar>
                  <p className="text-sm">
                    Barbearia Lumi
                  </p>
                </div>
              </div>

                <div className="flex flex-col justify-center items-center border-l-2 border-solid px-5">
                  <p className="text-sm">Dezembro</p>
                  <p className="text-3xl">12</p>
                  <p className="text-sm">20:00</p>
                </div>
            </CardContent>
           </Card>

           <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">
            Recomendados

           </h2>


           {/*BARBEARIA RECOMENDADAS*/}
           <div className="flex gap-4 overflow-auto [&:: -webkit-scrollbar]:hidden">
             {barbershops.map((barbershop) => (
                <BarbershopItem  key={barbershop.id} barbershop={barbershop}/>
             ))}
           </div>



           {/*BARBERRIA POPULATIOS DO GUETO*/}
           <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">
            Populares

           </h2>

           <div className="flex gap-4 overflow-auto [&:: -webkit-scrollbar]:hidden">
             {barbeariaspopulares.map((barbershop) => (
                <BarbershopItem  key={barbershop.id} barbershop={barbershop}/>
             ))}
           </div>

           
      </div>


      <footer>
        <Card className="p-[10px]">
               <CardContent className="p-[10px] text-center text-sm">
                    © 2024 Copyright Lumi Barber
               </CardContent>
             </Card>
      </footer>
    </div>
   );
}
 
export default Home;