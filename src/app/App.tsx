import { Outlet } from 'react-router-dom';
import { Footer } from '../widgets/Footer';
import { Header } from '../widgets/Header';
import { NavMenu } from '../widgets/NavMenu';
import './App.css';

function App() {
  return (
    <div className="grid h-full md:grid-cols-[0.2fr_1fr]">
      <NavMenu />
      <div className="flex h-full flex-col">
        <Header />
        <main className="flex-[1_0_auto] bg-gray-200 px-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
