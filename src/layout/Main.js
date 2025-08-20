import Hero from '../components/hero/Hero.js';
/**
 * Affichage du Main
 * @returns Main layout component
 */
const Main = (hero) => {
    const main = document.createElement('main');
    const heroSection = document.createElement('section');
    heroSection.setAttribute('id', 'hero');

    const heroDiv = Hero(hero);

    heroSection.appendChild(heroDiv);
    
    main.appendChild(heroSection);
    return main;
}
export default Main;