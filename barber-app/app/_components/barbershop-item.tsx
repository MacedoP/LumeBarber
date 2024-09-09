import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import  Image  from "next/image";

interface BarbershopItemProps {
    barbershop: Barbershop

}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    return ( 
        <Card className="min-w-[159px]">
            {/*Imagens das barbearias*/}
            <CardContent className="p-0">
                <div className="relative h-[159px] w-full">
                   <Image fill className="object-cover" src={barbershop.imageUrl}  alt="Barber Imagens"/>

                </div>
            </CardContent>
        </Card>
     );
}
 
export default BarbershopItem;