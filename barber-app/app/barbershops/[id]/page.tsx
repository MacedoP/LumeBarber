import PhoneItem from "@/app/_components/phone-item"
import ServiceItem from "@/app/_components/service-item"
import Sidebar from "@/app/_components/Sidebar"
import { db } from "@/app/_lib/prisma"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, MapPinIcon, MenuIcon,StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {Sheet,SheetContent,SheetTrigger} from "@/components/ui/sheet"


interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  //Chamando o Banco de Dados
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  //VERIFICACAO CASO O ID SEJA INVALIDO
  if (!barbershop) {
    return notFound()
  }
  console.log(barbershop.services)

  return (
    <div>
      {/* <h1>{barbershop?.name}</h1> */}
      {/*IMAGEM DAS BARBEARIAS*/}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          fill
          className="h-auto w-full object-cover"
          alt={"fotos barber"}
        />

        {/*ICON PARA VOLTAR E MENU MOBILE*/}
        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/" rel="prev">
            <ChevronLeftIcon></ChevronLeftIcon>
          </Link>
        </Button>

        {/*ICON  MENU MOBILE*/}
        {/* <Button size="icon" variant="secondary" className="absolute top-4 right-4" asChild>
                <MenuIcon></MenuIcon>
            </Button> */}
             <Sheet>
                <SheetTrigger asChild >
                    <Button size="icon" variant="outline" className="absolute top-4 right-4">
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>

                <SheetContent>
                    <Sidebar />
                </SheetContent>
          </Sheet>




       
      </div>
      {/*NOMES DAS BARBEARIAS*/}
      <div className="border-b border-solid p-5">
        <h1 className="mb-2 text-xl font-bold">{barbershop?.name}</h1>

        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18}></MapPinIcon>
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={18}></StarIcon>
          <p className="text-sm">5,0 (499 avaliaçoes)</p>
        </div>
      </div>

      {/*DESCRICAO DAS BARBEARIAS*/}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="font-bold uppercase text-gray-400">Sobre Nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      {/*SERVIÇOS*/}
      <div className="space-y-2 p-5">
        <h2 className="font-bold uppercase text-gray-400">Serviços</h2>

        <div className="space-y-3 border-b border-solid p-5">
          {barbershop.services.map((service) => (
            <ServiceItem service={service} key={service.id} />
          ))}
        </div>
      </div>

      {/*CONTATOS BARBEARIA*/}
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem phone={phone} key={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
