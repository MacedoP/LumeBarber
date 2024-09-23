import ServiceItem from "@/app/_components/service-item";
import { db } from "@/app/_lib/prisma";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, Icon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import  Image  from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


interface BarbershopPageProps {
    params:{
        id: string
    }
}

const BarbershopPage =  async ({params}:BarbershopPageProps) => {
    //Chamando o Banco de Dados
    const barbershop = await db.barbershop.findUnique({
            where: {
                id: params.id,
            },
            include:{
                services: true,
            }
    })

    //VERIFICACAO CASO O ID SEJA INVALIDO
    if(!barbershop){
        return notFound()
    }
    console.log(barbershop.services);

    return (  
        <div>
        {/* <h1>{barbershop?.name}</h1> */}
        {/*IMAGEM DAS BARBEARIAS*/}
        <div className="relative w-full h-[250px]">
            <Image src={barbershop?.imageUrl} fill className="object-cover w-full h-auto"/>

        {/*ICON PARA VOLTAR E MENU MOBILE*/}
            <Button size="icon" variant="secondary" className="absolute top-4 left-4" asChild >
                <Link href="/" rel="prev">
                    <ChevronLeftIcon>
                    
                    </ChevronLeftIcon>
                </Link>
            </Button>

         {/*ICON  MENU MOBILE*/}
            <Button size="icon" variant="secondary" className="absolute top-4 right-4" asChild>
                <MenuIcon></MenuIcon>
            </Button>

          

        </div>
        {/*NOMES DAS BARBEARIAS*/}
        <div className="p-5 border-solid border-b p-5">

            <h1 className="font-bold text-xl mb-2">{barbershop?.name}</h1>

            <div className="flex items-center gap-2 mb-2">
                <MapPinIcon className="text-primary" size={18}></MapPinIcon>
                <p className="text-sm ">{barbershop?.address}</p>

            </div>

            <div className="flex items-center gap-2">
                <StarIcon className="fill-primary text-primary" size={18}></StarIcon>
                <p className="text-sm">5,0 (499 avaliaçoes)</p>

            </div>

        </div>

        {/*DESCRICAO DAS BARBEARIAS*/}
        <div className="p-5 border-b border-solid space-y-3">
            <h2 className="font-bold uppercase text-gray-400">Sobre Nós</h2>
            <p className="text-justify text-sm">{barbershop?.description}</p>

        </div>


        {/*SERVIÇOS*/}
        <div className="p-5 space-y-3">
            <h2 className="font-bold uppercase text-gray-400">Serviços</h2>


           <div className="space-y-3">
               {barbershop.services.map((service) => (
                     <ServiceItem service={service} key={service.id}/>
               ))}
           </div>

        </div>
        </div>
    );
}
 
export default BarbershopPage;