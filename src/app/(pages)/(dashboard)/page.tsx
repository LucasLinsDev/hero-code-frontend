import { BannerPrimary } from "@/app/components/BannerPrimary";
import { BannerSecondary } from "@/app/components/BannerSecondary";
import { Event } from "@/app/components/Event";
import { HeaderSection } from "@/app/components/HeaderSection";
import { categories } from "@/app/utils/category";

export default function Dashboard() {
  return (
    <main className="container mx-auto">
      <BannerPrimary/>
      <HeaderSection title='Eventos em Destaque' subtitle='Se divirta com os principais eventos de Minas Gerais e do Brasil'/>
      <div className="grid grid-cols-3 gap-4 mb-4">
       {[1,2,3].map(()=>(
         <BannerSecondary/>
       ))}
      
      </div>
      <HeaderSection title='Navegue por tipo de evento' subtitle='Vá ao evento que é a sua cara :D'/>
      <div className="grid md:grid-cols-7 grid-cols-2 lg:gap-2 sm:gap-1">
       {categories.map((category)=>(
        <Event name={category.name} icon={category.icon} />
       ))}
      </div>
    </main>
  );
}
