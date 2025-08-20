import Api from './api/Api.js';

import Header from './layout/Header.js';
import Main from './layout/Main.js';
import Footer from './layout/Footer.js';

// import Parallax from './components/hero/Parallax.js';

const datasApi = new Api("../src/datas/datas.json");
const root = document.getElementById("root");

async function App() {
    const { menu, photographers, hero, media } = await datasApi.get();

    // const header = new Header(photographers);
    // const headerContent = header.createHeader();
    // ou
    const header = Header(menu);
    const main = Main(hero);
    // const heroContent = Hero(hero);
    const footer = Footer();

    root.appendChild(header);
    // root.appendChild(heroContent);
    root.appendChild(main);
    root.appendChild(footer);

    // Parallax();
}
export default App();