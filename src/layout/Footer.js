/**
 * Affichage du Footer
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

const Footer = () => {
    const footer = document.createElement('footer');

    const content = `
        <p>Je suis le footer</p>
    `;

    footer.innerHTML = content;
    return footer;
}
export default Footer;