import Nav from '../components/Nav.js';
/**
 * Affichage du Header
 * @returns Header layout component
 */
// export default class Header {
//     constructor(photographer){
//         this.photographer = photographer;
//     }

//     createHeader() {
//         const header = document.createElement( 'header' );
//         const content = `
//             <nav>
//                 <a href="">Home</a>
//                 <a href="">Photographes</a>
//                 <a href="">Contacts</a>
//                 <a href="">Info</a>
//             </nav>
//         `;
//         header.innerHTML = content;
//         return header;
//     }
// }

const Header = (menu) => {
    const header = document.createElement('header');
    const nav = Nav(menu);

    // const content = `
    //     <nav>
    //         <a href="">Home</a>
    //         <a href="">Photographes</a>
    //         <a href="">Contacts</a>
    //         <a href="">Info</a>
    //     </nav>
    // `;

    // header.innerHTML = content;
    header.appendChild(nav);
    return header;
}
export default Header;