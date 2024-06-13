import { ALLRoutes } from './routes/ALLRoutes';
import { Footer, Header} from './components';
import './App.css';

function App() {
  return (
    <div className="App dark:bg-gray-900">
      <Header></Header>
      <ALLRoutes></ALLRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
