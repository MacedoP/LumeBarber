"use client";
import { Button } from "@/components/ui/button";
import { SmartphoneIcon } from "lucide-react";
import { toast } from "sonner";
// import { handleClientScriptLoad } from "next/script";

interface PhoneItemProps{
    phone: string
}

const PhoneItem = ({phone}: PhoneItemProps) => {

     /*FUNCAO DE CLICK PARA OS OBTER O NUMEROS DE PHONE DO NOSSO BANCO DE DADOS*/
     const handleCopyPhoneClick = (phone: string) =>{
        navigator.clipboard.writeText(phone);
        toast.success("Telefone copiado com sucesso");
    }
    
    return ( 
        <div className="flex justify-between" key={phone}>

        {/*ESQUERDA ICON PHONE*/}

        <div className="flex items-center  gap-2">
            <SmartphoneIcon/>
            <p className="text-sm">{phone}</p>
        </div>

        <Button 
            variant="outline" 
            size="sm"
            onClick={()=> handleCopyPhoneClick(phone)}>
            Copiar
        </Button>

    </div>
     );
}
 
export default PhoneItem;