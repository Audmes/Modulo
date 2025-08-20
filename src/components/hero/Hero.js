/**
 * Affichage du Hero
 * @returns Hero component
 */

export default function Hero() {
        const div = document.createElement('div');
        div.setAttribute('class', 'hero');

        const content = `
            <div class="bike">
                <img src="./src/assets/images/bike.png" alt="Bike" />
            </div>    
            <div class="column-6">
                <h1>Modulo</h1>
                <p class="">Compose ton vélo</p>
            </div>
            <div class="column-6">
                <div class="bande"></div>
            </div>
        `;

        div.innerHTML = content;
        return div;
}