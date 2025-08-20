/**
 * Affichage de la Navigation
 * @returns Nav component
 */
const Nav = (menu) => {
    console.log(menu);
    const nav = document.createElement('nav');

    const content = `
        <a href="#">${menu[0].name}</a>
        <a href="#">${menu[1].name}</a>
        <a href="#">${menu[2].name}</a>
        <a href="#">${menu[3].name}</a>
    `;

    nav.innerHTML = content;
    return nav;
}
export default Nav;