import './App.css'
import Header from './assets/Header/Header';
import { NavBar } from './assets/NavBar/NavBar';
import { RoutesLibrary } from './controller/RoutesLibrary/RoutesLibrary';

function App() {

  return (
    <>
      <Header />
      <NavBar />

      {/* **Footer** */}
      <section>
      <RoutesLibrary />
      </section>
    </>
  )
}

export default App
