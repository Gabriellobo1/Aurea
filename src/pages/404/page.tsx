import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='absolute top-1/2 left-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center'>
      <span className='from-foreground bg-linear-to-b to-transparent bg-clip-text text-[10rem] leading-none font-extrabold text-transparent'>
        404
      </span>
      <h2 className='font-heading my-2 text-2xl font-bold'>
        Algo está faltando
      </h2>
      <p>
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <div className='mt-8 flex justify-center gap-2'>
        <Button onClick={() => navigate(-1)} variant='default' size='lg'>
          Voltar
        </Button>
        <Button
          onClick={() => navigate('/')}
          variant='ghost'
          size='lg'
        >
          Voltar para o início
        </Button>
      </div>
    </div>
  );
}