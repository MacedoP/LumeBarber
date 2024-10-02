import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";


//To do Receber Agendamento como Props
const BookingItem = () => {
    return ( 
        <div>
          {/*O CONTEUDO DESTE COMPONENT ESTA NA HOME PAGE ONDE SE ENCONTRA AS DEZEMBRO 12 20:00*/}
            <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">Agendamento</h2>

           <Card className="mt-6">
            <CardContent className="flex justify-between p-0">

              <div className=" flex flex-col gap-2 py-5 pl-5">

                <Badge className="w-fit">Confirmado</Badge>

                <h3 className="font-semibold">Corte de Cabelo</h3>

                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">

                    {/* A IMAGEM ARENDONDA ABAIXO DO BOTAO CONFIRMAR MA HOME PAGE */}
                   <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
                  </Avatar>
                  <p className="text-sm">
                    Barbearia Lumi
                  </p>
                </div>
              </div>

                 {/* DIV QUE CONTEM AS DATA QUE NO CASO SAO DEZEMBRO 12 20: HORAS */}
                <div className="flex flex-col justify-center items-center border-l-2 border-solid px-5">
                  <p className="text-sm">Dezembro</p>
                  <p className="text-3xl">12</p>
                  <p className="text-sm">20:00</p>
                </div>
            </CardContent>
           </Card>
        </div>
     );
}
 
export default BookingItem;