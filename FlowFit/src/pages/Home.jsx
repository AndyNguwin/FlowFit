import NavBar from '../components/NavBar.jsx';
import WelcomeMessage from '../components/WelcomeMessage.jsx';

function Home(){
    return (
    <div className="flex flex-col gap-10">
        <NavBar/>
        <WelcomeMessage/>
        {/* <HeatMap/> */}
    
    </div>
  )
}

export default Home;