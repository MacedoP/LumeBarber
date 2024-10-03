
import { Input } from "@/components/ui/input";
import Header from "./_components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import BookingItem from "./_components/booking-item";
import { SearchIcon } from "lucide-react";



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

          {/*BUSCA RAPIDA OU FILTRADA CONTEM OS ICON DA TESOURA LAMINA E BARBA*/}
          <div className="gap-3 flex mt-6 overflow-x-scroll scroll-mx-0 [&:: -webkit-scrollbar]:hidden">
            
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

            <Button className="gap-2 text-white" variant="secondary">
              <Image src="/eyesbro.svg" alt="Tesoura" width={16} height={16} />
              Sobracenlhas
            </Button>

            <Button className="gap-2 text-white" variant="secondary">
              <Image src="/msm.svg" alt="Tesoura" width={16} height={16} />
              Measagem
            </Button>

            <Button className="gap-2 text-white" variant="secondary">
              <Image src="/hifratacao.svg" alt="Tesoura" width={16} height={16} />
              Hidratacao
            </Button>
          </div>

          {/*BANNER DA IMAGEM PEQUENA COM OS CARAS SE CORTANDO O CABELO*/}
          <div className="relative w-full h-[150px] mt-6">
            <Image src="/banner04.jpg" fill  className="object-cover rounded-xl"/>
          </div>


           {/*Agendamento*/}
          <BookingItem/>

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
    </div>
   );
}
 
export default Home;