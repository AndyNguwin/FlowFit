import NavBar from '../components/NavBar.jsx';
import WelcomeMessage from '../components/WelcomeMessage.jsx';
import Week from '../components/Week.jsx';
import Graphs from '../components/Graphs.jsx';

function Home(){
    return (
    <div className="flex flex-col gap-4 h-full">
        <NavBar/>
        {/* <HeatMap/> */}

        <div className='content flex flex-row h-full'>
          <div className='left w-3/4 flex flex-col items-center justify-center gap-4'>
              <WelcomeMessage/>
              <Week/>
          </div>

          <div className='right w-1/4 p-4 h-full'>
            <Graphs/>
          </div>
        </div>



    </div>
  )
}

export default Home;