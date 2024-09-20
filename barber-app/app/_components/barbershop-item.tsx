import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import  Image  from "next/image";
import { Button } from "@/components/ui/button";
import { Badge} from "@/components/ui/badge";
import {StarIcon } from "lucide-react";
import Link from "next/link";

interface BarbershopItemProps {
    barbershop: Barbershop

}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    return ( 
        <Card className="min-w-[167px] rounded-2xl">
            {/*Imagens das barbearias*/}
            <CardContent className=" p-2">
                <div className="relative h-[159px] w-full container_img">
                   <Image fill className="object-cover rounded-2xl barber_img" src={barbershop.imageUrl}  alt="Barber Imagens"/>

                   <Badge className="absolute  left-2 top-2 z-50" variant="secondary">
                        <StarIcon size={12} className="fill-primary text-primary"/>
                        <p className="ml-1 font-semibold text-xs">5,0</p>
                   </Badge>

                </div>

                {/*TEXTOS ABAIXO DAS NOSSAS IMAGENS*/}
                <div className="px-1 py-3">
                    <h3 className="font-semibold overflow-hidden text-nowrap text-ellipsis truncate">{barbershop.name}</h3>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis truncate">{barbershop.address}</p>

                    <Button className="w-full mt-3" variant="secondary">
                          <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
                    </Button>

                </div>

            </CardContent>
        </Card>
     );
}
 
export default BarbershopItem;