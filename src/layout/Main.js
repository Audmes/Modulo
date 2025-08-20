import Hero from '../components/hero/Hero.js';
/**
 * Affichage du Main
 * @returns Main layout component
 */
const Main = () => {
    const main = document.createElement('main');
    const heroSection = document.createElement('section');
    heroSection.setAttribute('id', 'hero');

    const heroDiv = Hero();

    heroSection.appendChild(heroDiv);
    
    main.appendChild(heroSection);
    return main;
}
export default Main;