import Card from '@components/Card';

interface SummaryProps {
  name?: string;
}

const Summary: React.FC<SummaryProps> = ({ name }) => {
  return (
    <Card className='absolute bottom-2.5 left-2.5 z-10 max-w-xs text-black'>
      <div className='flex items-center mb-4'>
        <h2 className='text-xl font-extrabold'>{name}</h2>
        <span className='inline-block ml-1'>- 3 avis</span>
      </div>
      <h3 className='text-l font-extrabold'>Général</h3>
      <progress
        className='progress progress-info w-full mb-2'
        value='35'
        max='100'
      ></progress>

      <h3 className='text-l font-extrabold'>Confort</h3>
      <progress
        className='progress progress-info w-full mb-2'
        value='60'
        max='100'
      ></progress>

      <h3 className='text-l font-extrabold'>Sécurité</h3>
      <progress
        className='progress progress-info w-full mb-2'
        value='55'
        max='100'
      ></progress>

      <h3 className='text-l font-extrabold'>Services</h3>
      <progress
        className='progress progress-info w-full mb-2'
        value='20'
        max='100'
      ></progress>

      <h3 className='text-l font-extrabold'>Efforts</h3>
      <progress
        className='progress progress-info w-full mb-2'
        value='15'
        max='100'
      ></progress>
    </Card>
  );
};

export default Summary;
