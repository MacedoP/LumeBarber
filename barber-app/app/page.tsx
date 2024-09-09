
import { Input } from "@/components/ui/input";
import Header from "./_components/Header";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";



const Home = () => {
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

          {/*Banner abaixo*/}
          <div className="relative w-full h-[150px] mt-6">
            <Image src="/Banner.png" fill  className="object-cover rounded-xl"/>
          </div>

        
      </div>

    </div>
   );
}
 
export default Home;