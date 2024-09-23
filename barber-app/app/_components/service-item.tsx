import { Button } from "@/components/ui/button";
import { BarbershopService } from "@prisma/client";
import  Image  from "next/image";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProps{
    service: BarbershopService
}

/*** Componente que guarda as imagens das nossas barberias e os preços assim como os botoes *****/
const ServiceItem = ({service}: ServiceItemProps) => {
    return (  
        <Card>
            <CardContent className="flex items-center gap-4 p-3">
           
            {/* <h1>{service.name}</h1> */}
            <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px] servei_img">
                <Image src={service.imageUrl} alt={"foto barber"} fill className="object-cover rounded-lg move"></Image>

            </div>

            {/****************DIV DOS PRECOS E NOMES DOS CORTES E O BOTAO DE RESERVAR****************/}
            <div className="space-y-2">
                <h3 className="font-semibold text-sm">{service.name}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>

            {/*DIV QUE CONTEM OS PREÇOS*/}
                <div className="flex items-center justify-between w-full">
                    <p className="text-sm font-bold text-primary">
                        {Intl.NumberFormat("pt-BR", {style: 'currency',currency: 'EUR'}).format(Number(service.price))}</p>


                    <Button className="flex justify-self-end items-center " size="sm" variant="secondary">Reservar</Button>

                </div>
            </div>
             {/****************DIV DOS PRECOS****************/}

            </CardContent>
        </Card>
    );
}
 
export default ServiceItem;