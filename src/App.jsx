import Devbar from '@/components/Devbar/Devbar';
import HomePage from '@/pages/HomePage';

const App = () => {
  return (
    <>
      <div className='fixed bottom-0 left-0 top-0'>
        <Devbar />
      </div>
      <div className='ml-[700px]'>
        <div className='flex h-screen flex-col items-center justify-center'>
          <HomePage />
        </div>
      </div>
    </>
  );
};

export default App;
