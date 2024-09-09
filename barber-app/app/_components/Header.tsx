import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./ui/card";
import  Image  from "next/image";
import { MenuIcon } from "lucide-react";


const Header = () => {
    return ( 
        <main>
            <Card>
                <CardContent className="flex justify-between items-center flex-row p-5">
                   <Image src="/logo.png" alt="logo" width={180} height={18}/>

                   <Button size="icon" variant="outline">
                    <MenuIcon>
                        
                    </MenuIcon>
                   </Button>
                </CardContent>
            </Card>
        </main>
     );
}
 
export default Header;