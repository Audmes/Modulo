/**
 * Affichage de la Navigation
 * @returns Nav component
 */
const Nav = () => {
    const nav = document.createElement('nav');

    const content = `
        <a href="#">Accueil</a>
        <a href="#">A Propos</a>
        <a href="#">Comment ça marche ?</a>
        <a href="#">Contact</a>
    `;

    nav.innerHTML = content;
    return nav;
}
export default Nav;