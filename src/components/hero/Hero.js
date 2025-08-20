/**
 * Affichage du Hero
 * @returns Hero component
 */
// export default class Hero {
//     constructor(hero){
//         this.hero = hero;
//     }    

//     createHero() {
//         const headerHero = document.createElement('div');
//         headerHero.classList.add('hero');

//         var test = `${this.hero[0].src}`;
//         console.log(test);

//         const content = `c
//             <div>
//                 <img style="width:100%;" src="../src/assets/images/${this.hero[0].src}" alt="${this.hero.alt}" />
//             </div>
//         `;

//         headerHero.innerHTML = content;
//         return headerHero;
//     }
// }

export default function Hero() {
        const div = document.createElement('div');
        div.setAttribute('class', 'hero');
        // var test = `${hero[0].src}`;
        // console.log(test);

        // const content = `
        //     <img id="foreground" class="foreground" src="../src/assets/images/${hero[0].src}" alt="${hero[0].alt}" />
        //     <img id="goonies" class="goonies" src="../src/assets/images/${hero[1].src}" alt="${hero[1].alt}" />
        //     <img id="background" class="background" src="../src/assets/images/${hero[2].src}" alt="${hero[2].alt}" />
        // `;
        const content = `
            <div class="bike">
                <img src="../src/assets/images/bike.png" alt="Bike" />
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

{/* <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%"
        }}
      >
        <img style={{ width: "100%" }} src="background.jpg" alt="background" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "26vw",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "30vw"
          }}
          src="/text-img.webp"
          alt="Goonies"
        />
      </Plx>
      <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        ></div>
      </div>
    </div> */}