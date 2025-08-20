import Header from './layout/Header.js';
import Main from './layout/Main.js';
import Footer from './layout/Footer.js';

// import Parallax from './components/hero/Parallax.js';

const root = document.getElementById("root");

async function App() {
    const header = Header();
    const main = Main();
    // const heroContent = Hero(hero);
    const footer = Footer();

    root.appendChild(header);
    // root.appendChild(heroContent);
    root.appendChild(main);
    root.appendChild(footer);

    // Parallax();
}
export default App();