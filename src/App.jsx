import "./App.css";
import Header from './Components/Header'
import banner from '../src/assets/banner.jpg'
import Booking from "./Components/Booking";
import Table from "./Components/Table"


function App() {
  return (
    <div className="bg-[url('../src/assets/banner.jpg')] bg-cover bg-no-repeat">
      <Header/>
      <section className="h-screen">
        <Booking />
        <Table />
      </section>
    </div>
  );
}

export default App;
