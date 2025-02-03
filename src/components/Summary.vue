<template>
  <section
    class="Summary"
    :class="showSummary ? 'Summary--displayed' : 'Summary--hide'"
  >
    <div class="SummaryContainer">
      <div class="SummaryContent">
        <h2>Who am I ?</h2>
        <p>
          Développeur <em>JavaScript/TypeScript</em>, <br />
          <br />
          J'aime créer des <em>interfaces web</em> en variant les designs,
          concevoir des <em>expériences 3D</em> uniques et amusantes qui vont de
          la présentation de produits jusqu'à des <em>jeux</em> ! <br />
          <br />
          Je souhaite à terme pouvoir créer des expériences en
          <em>réalité augmentée</em> pour smartphone, lunettes et casque de
          réalité virtuelle
        </p>
      </div>

      <div class="SummaryContent">
        <h2>My Work</h2>
        <p>
          Mon travail m'a permis de voir et concevoir différentes choses au sein
          du
          <em>front-end</em> ! <br />
          <br />
          Des interfaces soignées avec un <em>design system</em> millimétré, en
          passant par des <em>CMS</em> simples mais robustes faits-maison pour
          améliorer la productivité, des <em>pages de lancements</em> de
          nouveaux produits ou de <em>collaboration prestigieuses</em>.
        </p>

        <div class="SummaryContentContainer">
          <h5>Worked with</h5>
          <div>
            <div
              class="StackProject"
              v-for="(image, idx) in imagesPro"
              :key="idx"
            >
              <img :src="image.img" class="ImagePro" />
              <span v-html="image.description"/>
            </div>
          </div>
        </div>

        <div class="SummaryContentContainer">
          <h5>Pro</h5>
          <p>
            De la nouvelle <em>Homepage Nespresso</em>, en passant par des
            <em>collaborations exclusives</em>, voici mon travail quotidien
            depuis plusieurs années en étroite collaboration avec Nespresso
          </p>
          <span
            >(Pas de lien, les pages changent régulièrement ainsi je vous évite
            de cliquer sur un lien obsolète)</span
          >
          <Grid :project="pro" />
        </div>

        <div class="SummaryContentContainer">
          <h5>My Stack</h5>
          <div class="Stack">
            <img
              v-for="(image, idx) in images"
              :key="idx"
              :src="image"
              class="ImageStack"
            />
          </div>
        </div>
      </div>

      <div class="SummaryContent">
        <h2>Projects</h2>
        <div class="SummaryContentContainer">
          <h5>Games</h5>
          <p>
            J'ai commencé par les jeux <em>2D</em> avant de m'embarquer dans les
            univers <em>3D</em>. <br />Ils sont classés du plus récent au plus
            ancien. <br />
            De la vue à la <em>1ère</em> personne, <em>3ème</em> personne, tour
            par tour, clin d'oeil <em>rétro</em>, il y en a pour tous les goûts,
            et représentent l'ensemble de mon apprentissage dans cet univers.
          </p>
          <span
            >(L'icône de téléphone verte indique que le contenu est compatible
            mobile)</span
          >
          <Grid :project="games" />
        </div>

        <div class="SummaryContentContainer">
          <h5>Tests & tools</h5>
          <p>
            Des tests de portfolios, des <em>outils</em>, des projets
            <em>abandonnés</em>, pas <em>optimisés</em>, tout ce qu'on ne montre
            pas habituellement, c'est pourtant aussi dans ce genre de projets
            que l'on évolue !
          </p>
          <Grid :project="test" />
        </div>
      </div>
    </div>
    <div
      class="Circle CircleRed"
      :style="{ left: circlePos.x + 'px', top: circlePos.y + 'px' }"
    ></div>
    <div
      class="Circle CircleBlue"
      :style="{ left: circlePos.x - 40 + 'px', top: circlePos.y - 40 + 'px' }"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useSettings } from "../composable/settings";
import Grid from "./Grid.vue";

const { showSummary } = useSettings();
const mousePos = ref({
  x: 0,
  y: 0,
});

const circlePos = ref({
  x: 0,
  y: 0,
});

window.addEventListener("mousemove", (e) => {
  mousePos.value.x = e.clientX;
  mousePos.value.y = e.clientY;
});

window.addEventListener("touchmove", (e) => {
  mousePos.value.x = e.touches[0].clientX;
  mousePos.value.y = e.touches[0].clientY;
});

const tick = () => {
  circlePos.value.x = (1 - 0.04) * circlePos.value.x + 0.04 * mousePos.value.x;
  circlePos.value.y = (1 - 0.04) * circlePos.value.y + 0.04 * mousePos.value.y;

  const animate = requestAnimationFrame(() => {
    tick();
  });
};

const images = [
  "/website/images/html.png",
  "/website/images/css.png",
  "/website/images/js.png",
  "/website/images/ts.png",
  "/website/images/vuejslogo.png",
  "/website/images/nuxtlogo.png",
  "/website/images/threelogo.jpg",
  "/website/images/astrologo.jpg",
];

const imagesPro = [
  {
    img: "/website/images/LogNes.jpg",
    description:
      "Création de pages événementielles (<em>Black Friday</em> 2022 & 2023, Collaboration <em>Pierre Hermé</em>, <em>Mory Sacko</em>), page de lancement de nouvelle machine (<em>Vertuo Pop</em>), <em>HomePage</em> modulaire 2024. <br> Création d'un <em>CMS</em> pour aider à la conception des pages. <br> Travail de fond sur la mise en place d'un design system complet. Conception côté B2C majoritairement, mais également en B2B ponctuellement",
  },
  {
    img: "/website/images/VtsLogo.PNG",
    description: "Conception d'outils pour <em>créer</em> des sites simples en Point&Click. <br> Elaboration de thèmes sélectionnables puis customisable grâce aux outils développés. <br> Créer la possibilité d'en générer une version totalement statique pour augmenter les performances.",
  },
  {
    img: "/website/images/CerfLogo.jpg",
    description: "Création et gestion d'une grosse <em>flotte de site</em>. <br> Conception de maquettes complètes avec un gros focus sur <em>l'UI et l'accessibilité</em>. ",
  },
];

const pro = [
  {
    img: "/website/images/project/nes.png",
  },
  {
    img: "/website/images/project/home.png",
  },
  {
    img: "/website/images/project/mory.png",
  },
  {
    img: "/website/images/project/ph.png",
  },
  {
    img: "/website/images/project/pop.png",
  },
  {
    img: "/website/images/project/zambia.png",
  },
];

const games = [
  {
    img: "/website/images/project/fps.png",
    url: "https://ackermiam.github.io/lab-fps/",
    isPhoneComp: false,
  },
  {
    img: "/website/images/project/lab.png",
    url: "https://ackermiam.github.io/labyrinthe/",
    isPhoneComp: true,
  },
  {
    img: "/website/images/project/onroad.png",
    url: "https://ackermiam.github.io/on-road/",
    isPhoneComp: true,
  },
  {
    img: "/website/images/project/rpgame.png",
    url: "https://ackermiam.github.io/rp-game/",
    isPhoneComp: true,
  },
  {
    img: "/website/images/project/invade.png",
    url: "https://ackermiam.github.io/egirl-invaders/",
    isPhoneComp: false,
  },
];
const test = [
  {
    img: "/website/images/project/nesport.png",
    url: "https://ackermiam.github.io/spaceportfolio/",
    isPhoneComp: true,
  },
  {
    img: "/website/images/project/mapedit.png",
    url: "https://ackermiam.github.io/map-editor/",
    isPhoneComp: true,
  },
  {
    img: "/website/images/project/horror.png",
    url: "https://ackermiam.github.io/horror-site/",
    isPhoneComp: true,
  },
  {
    img: "/website/images/project/portfolio.png",
    url: "https://ackermiam.github.io/portfolio/",
    isPhoneComp: true,
  },
];

tick();
</script>

<style>
.Summary {
  position: absolute;
  top: 0;
  left: -100%;
  height: 100vh;
  width: 100vw;
  color: white;
  background: rgb(10, 10, 10);
  padding: 200px 50px 50px 50px;
  box-sizing: border-box;
  overflow-x: hidden;
}

.Summary--hide {
  animation: hide 1s ease-in-out;
}

.Summary--displayed {
  left: 0;
  animation: display 1s ease-in-out;
}

.SummaryContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.SummaryTitle {
  margin-bottom: 100px;
  display: flex;
}
.SummaryContent {
  width: 70%;
  margin-bottom: 250px;
}
.SummaryButton {
  margin-bottom: 25px;
  z-index: 2;
}

.ContainerProjects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.ContainerProject {
  border-radius: 8px;
  aspect-ratio: 16/9;
  transition: all 0.3s;
}

.SummaryContentContainer {
  margin-top: 150px;
}

.Circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 999px;
  z-index: 0;
}
.CircleBlue {
  background: radial-gradient(
    circle,
    rgba(18, 255, 197, 0.3) 0%,
    rgba(255, 255, 255, 0) 65%
  );
}
.CircleRed {
  background: radial-gradient(
    circle,
    rgba(255, 65, 184, 0.3) 5%,
    rgba(255, 255, 255, 0) 70%
  );
}

.Stack {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.Stack img {
  height: auto;
  border-radius: 8px;
  margin-bottom: 30px;
}

.StackProject {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}

.StackProject:last-child {
  margin-bottom: 0;
}

.StackProject span {
  display: block;
}

.ImagePro {
  width: 200px;
  border-radius: 8px;
  margin-right: 20px;
}
.ImageStack {
  width: 100px;
}

.StackProject span {
  font-size: 1em;
  margin: 0;
}

h2 {
  margin: 0;
  font-family: "Mewatonia";
  font-size: 12em;
  line-height: 94%;
  color: white;
  margin-bottom: 50px;
}

h5 {
  margin: 0;
  font-family: "Mewatonia";
  font-size: 4em;
  line-height: 94%;
  color: #ffffff96;
  margin-bottom: 50px;
}

p {
  font-family: "News";
  font-style: italic;
  font-size: 1.5em;
  margin-bottom: 2em;
}

span {
  font-family: "News";
  font-size: 0.8em;
  color: #ffffff96;
  margin-bottom: 2em;
  display: flex;
}

em {
  color: #00ffd0;
}

@media screen and (max-width: 900px) {
  .Summary {
    padding: 150px 30px 30px 30px;
  }

  h2 {
    font-size: 6em;
  }

  p {
    font-size: 1em;
  }

  .SummaryTitle {
    width: 100%;
    margin-right: 0px;
  }
  .SummaryContent {
    width: 100%;
    margin-bottom: 150px;
  }

  .ContainerProjects {
    grid-template-columns: repeat(2, 1fr);
  }

  .SummaryContentContainer {
    margin-top: 80px;
  }

  .Stack {
    gap: 30px;
  }

  .ImagePro {
    width: 150px;
  }
  .ImageStack {
    width: 80px;
  }
}

@media (max-width: 600px) {
  .ContainerProjects {
    grid-template-columns: repeat(1, 1fr);
  }

  .StackProject {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .ImagePro {
    width: 200px;
    margin-right: 0;
    margin-bottom: 30px;
  }
}
</style>
