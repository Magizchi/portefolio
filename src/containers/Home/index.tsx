import React, { useState } from "react";

const Home = () => {
  const [arrayProject] = useState([
    {
      title: "Ohara",
      codeLinkFront: "https://github.com/Magizchi/ohara-ui",
      codeLinkBack: "https://github.com/Magizchi/ohara-api",
      applicationLink: "https://magizchi.github.io/ohara-ui/",
      description: (
        <p>
          Utilisation de l'API{" "}
          <a
            className="underline"
            rel="noreferrer noopener"
            target="_blank"
            href="https://jikan.moe/"
          >
            JIKAN
          </a>{" "}
          pour reproduire le site{" "}
          <a
            className="underline"
            target="_blank"
            rel="noreferrer noopener"
            href="https://myanimelist.net/"
          >
            MyanimeList
          </a>
        </p>
      ),

      tech: [
        "Typescript",
        "Github pages",
        "Travis CI",
        "TailwindCss",
        "React-js",
        "Node-js",
        "Express",
        "Firebase",
        "heroku",
      ],
    },
    {
      title: "Expenses",
      codeLinkBack: "https://github.com/Magizchi/test-LeReacteur-back",
      codeLinkFront: "https://github.com/Magizchi/test-lereacteur-front",
      applicationLink: "https://expense-portefolio.firebaseapp.com/",
      description:
        "Test technique du Reacteur, Gestion des dépenses par utilisateur",
      tech: [
        "React-js",
        "Node-js",
        "Express",
        "TailwindCss",
        "Firebase",
        "heroku",
      ],
    },
    // {
    //   title: "Simplify your links",
    //   codeLinkFront: "https://github.com/Magizchi/Test_2_LeReacteur_front",
    //   codeLinkBack: "https://github.com/Magizchi/Test_2_LeReacteur_Back",
    //   applicationLink: "",
    //   tech: [
    //     "React-js",
    //     "Node-js",
    //     "Express",
    //     "TailwindCss",
    //     "Firebase",
    //     "heroku",
    //   ],
    // },

    {
      title: "Todo liste avec REDUX",
      codeLinkFront: "https://github.com/Magizchi/todo-list-redux",
      applicationLink: "https://todo-list-portefolio.firebaseapp.com/",
      description: "Création d'une todo list avec redux",
      tech: ["REDUX", "React-js", "Firebase"],
    },
    {
      title: "Altyor",
      codeLinkFront: "https://github.com/Magizchi/test-altyor-front",
      codeLinkBack: "https://github.com/Magizchi/test-altyor-back",
      applicationLink: "https://altyor.herokuapp.com/",
      description: "Gestion et création de donnée dans un tableau",
      tech: [
        "Material UI (google)",
        "React-js",
        "Node-js",
        "Express",
        "heroku",
      ],
    },
  ]);

  return (
    <main className="flex flex-col items-center justify-center pt-10 bg-gray-100">
      <section
        id="presentation"
        className="container flex grid items-center justify-center grid-cols-5 gap-10 mb-12"
      >
        <div className="col-span-5 col-start-1 m-2 lg:col-span-3">
          <h2 className="text-2xl">Qui suis-je ?</h2>
          <div className="p-3 bg-white rounded-lg shadow-lg">
            <h2 className="mb-3">
              Rajanan GANESALINGAM, développeur full-stack junior React et
              Node.js
            </h2>
            <p className="">
              Titulaire d'une Licence Professionnelle en Systèmes Automatisés,
              Réseaux et Informatique Industrielle, je dispose d'expérience dans
              le domaine des automates programmables et des parcs réseaux.
              Cependant, j'ai décidé de changer de domaine d'activité pour me
              rapprocher du développement web.
            </p>
          </div>
        </div>
        <div className="col-span-5 m-2 lg:col-end-6 lg:col-span-3">
          <h2 className="text-2xl">Pourquoi le développement web ?</h2>
          <div className="p-3 bg-white rounded-lg shadow-lg">
            {/* <h2 className="mb-3">Apprendre le développement web</h2> */}
            <p className="">
              J'ai commencé à apprendre l'HTML, CSS, JavaScript via les cours
              sur udemy ou OpenClassrooms. Cette apprentissage m'a donné envie
              de découvrir davantage le développement web afin de devenir
              développeur full-stack.
            </p>
          </div>
        </div>
        <div className="col-span-5 col-start-1 m-2 lg:col-span-3">
          <h2 className="text-2xl">Comment je me suis formé ?</h2>
          <div className="p-3 bg-white rounded-lg shadow-xl">
            <div>
              {/* <h2 className="mb-3">Comment je suis devenu developpeur</h2> */}
              <p className="">
                Le principal moyen mis en œuvre afin de devenir développeur est
                la validation de la formation{" "}
                <a
                  href="https://www.lereacteur.io/"
                  rel="noreferrer noopener"
                  className="underline"
                >
                  Reacteur
                </a>
                .
                <br /> C'est une formation intensive sur JavaScript Web et
                Mobile à Paris qui m'a permis d'apprendre et d'utiliser React et
                Node.js.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-5 ">
          <a
            href="#contact"
            className="flex justify-center w-40 p-3 mr-6 font-bold text-white bg-purple-700 border-2 border-purple-600 hover:bg-purple-100 hover:text-purple-700"
          >
            Contactez moi
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://firebasestorage.googleapis.com/v0/b/rajananganesalingam.appspot.com/o/R_GANESALINGAM.pdf?alt=media"
            className="flex justify-center w-40 p-3 font-bold text-purple-700 border-2 border-transparent hover:border-purple-700"
          >
            Voir mon cv
          </a>
        </div>
      </section>

      <section
        id="project"
        className="flex flex-col items-center justify-center w-full py-12 mb-12 bg-purple-700"
      >
        <h2 className="mb-6 text-3xl font-bold text-gray-200">Mes projets</h2>
        <ul className="container grid gap-5 mb-5 grid-coles-1">
          {arrayProject.map((project, index) => (
            <li
              key={index}
              className="grid grid-cols-1 gap-8 p-4 mx-2 bg-gray-100 border-2 border-gray-300 rounded-lg sm:grid-cols-3 hover:border-gray-100 hover:shadow-lg"
            >
              <div className="sm:col-span-1 sm:col-start-1">
                <h3>{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center lg:items-center lg:justify-start lg:flex-row">
                  <a
                    href={project.applicationLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-center w-32 p-3 text-sm font-bold text-white bg-purple-700 border-2 border-purple-600 lg:mr-5 hover:bg-purple-100 hover:text-purple-700"
                  >
                    Voir exemple
                  </a>
                  <a
                    href={project.codeLinkFront}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-center w-32"
                  >
                    <span className="flex items-center justify-center text-sm font-bold text-purple-700 border-b-2 border-transparent hover:border-purple-600">
                      Voir code
                    </span>
                  </a>
                </div>
              </div>
              <div className="sm:col-span-1 sm:col-start-3">
                <p className="text-sm">
                  Technologies:
                  <br />
                  {project.tech.join(", ")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section id="contact" className="py-12 mb-12">
        <div className="flex flex-col justify-center">
          <h2 className="flex justify-center mb-6 text-3xl font-bold text-purple-700">
            Contactez-moi
          </h2>
          <p className="mb-2">
            Contactez moi par mail si mon profil vous interresse.
          </p>
          <a
            href="mailto:Rajan.G@outlook.fr"
            rel="noreferrer noopener"
            className="flex justify-center mb-5 border-transparent hover:border-purple-700 "
          >
            Rajan.G@outlook.fr
          </a>
          <div className="flex justify-center ">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://firebasestorage.googleapis.com/v0/b/rajananganesalingam.appspot.com/o/R_GANESALINGAM.pdf?alt=media"
              className="flex justify-center w-40 p-3 font-bold text-white bg-purple-700 border-2 border-purple-600 hover:bg-purple-100 hover:text-purple-700"
            >
              Mon CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
