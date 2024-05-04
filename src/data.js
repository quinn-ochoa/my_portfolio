import archImg from "./assets/building.svg";
import frontendImg from "./assets/chrome.svg";
import softwareImg from "./assets/computer.svg";
import graphicImg from "./assets/palette.svg";

import ecommerceGif from "./assets/e-commerce.gif";
import campsiteGif from "./assets/camping_site.gif";

export const ABOUT_ME = [
  {
    image: frontendImg,
    title: "Front End Development",
    description:
      "HTML, CSS, Bootstrap, JavaScript, React.js, Vue.js, Responsive Design, React Native.",
  },
  {
    image: softwareImg,
    title: "Software Development",
    description:
      "Spring Boot, Java, PostgreSQL, IntelliJ, Git, Unit Testing (JUnit), E/R diagrams, Integration Testing, Node JS, Express, MongoDB.",
  },
  {
    image: graphicImg,
    title: "Graphic Design",
    description:
      "Figma, Adobe Suite: Illustrator, Photoshop, InDesign, Lightroom.",
  },
  {
    image: archImg,
    title: "Architecture",
    description:
      "Revit, Sketchup, Enscape, AutoCAD, 3Ds max & V-Ray, Bluebeam.",
  },
];

export const WORKS = {
  commerce: {
    title: "E-commerce - L&G Lighting Fixtures",
    description:
      "The e-commerce website showcases the creativity and craftsmanship of local lighting artisans, offering a seamless experience for both browsing and purchasing. It serves as the go-to destination for custom lighting fixtures crafted by talented designers in New York City.",
    gif: ecommerceGif,
  },
  app: {
    title: "Movie application - WeWatchWhat",
    description:
      "With WeWatchWhat, users can favorite movies they love, add reviews to share their thoughts, and engage in community discussions. The app also prioritizes user security and convenience by offering password reset options and a feature to view all added reviews. Enhance your movie-watching experience with WeWatchWhat and discover your next favorite film effortlessly.",
    gif: "",
  },
  site: {
    title: "Camping site",
    description:
      "The Camping Site Reservation Application is a comprehensive web-based solution developed using a combination of HTML, CSS, React.js, and the Redux library. This dynamic platform empowers users with a range of functionalities aimed at enhancing their camping experience.\n With this application, users can seamlessly browse through a catalogue of available campsites, equipped with detailed descriptions, amenities, and real-time availability status. The intuitive interface enables users to effortlessly make reservations for their preferred campsites, providing them with a hassle-free booking experience.\n Furthermore, the application facilitates communication and engagement among campers by allowing them to leave comments and share their experiences with fellow outdoor enthusiasts. Users can also mark their favorite campsites for future reference, streamlining the process of planning and organizing future camping trips.\n",
    gif: campsiteGif,
  },
};
