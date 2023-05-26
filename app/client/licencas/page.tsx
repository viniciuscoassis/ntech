import Card from "@/components/cards/Card";
import CardSession from "@/components/cards/CardSection";

export default function Licencas(){
    return (
      <>
        <h1 className=' text-5xl font-bold mb-10'>Licenças</h1>
        <CardSession>
          <Card quantity={6} title='Licenças contratadas' />
          <Card quantity={4} title='Licenças utilizadas' />
          <Card quantity={2} title='Licenças disponíveis' />
        </CardSession>
      </>
    );
}