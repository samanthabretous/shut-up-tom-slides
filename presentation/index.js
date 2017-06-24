// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  sam: require("../assets/sam.jpg"),
  openOffice: require("../assets/openOffice.jpg"),
  scream: require("../assets/scream.gif"),
  sut: require("../assets/shut-up-tom-logo.png"),
  cent: require("../assets/cent.jpg"),
  d1: require("../assets/diagram-sup1.png"),
  d2: require("../assets/diagram-sup2.png"),
  thanks: require("../assets/diagram-sup3.png"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  white: "white",
  black: "#1F2022",
  purple: "#CC67C6",
  blue: "#142553",
  lightblue: "#85D8E2",
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

// tranisiton types -- zoom fade slide

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="purple" textColor="blue">
          <Heading size={5} fit caps textColor="blue" lineHeight={1}>Hi, I'm Sam
          </Heading>
          <Heading size={5} fit caps textColor="blue" lineHeight={1}>@samanthabretous</Heading>
            <Image src={images.sam} width={300}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Heading size={2} fit caps lineHeight={1} textColor="lightblue">Open Office</Heading>
          <Image src={images.openOffice} width={400}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Image src={images.scream} width={600}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Image src={images.d1} width={700}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            DEMO TIME
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue" textColor="white">
          <Layout>
            <Fit>
              <BlockQuote>
                <Quote>When in doubt, use Javascript.</Quote>
                <Appear>
                  <Cite>Curtis Jackson</Cite>
                </Appear>
              </BlockQuote>
            </Fit>
            <Fit>
              <Appear>
                <Image src={images.cent} width={300}/>
              </Appear>
            </Fit>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue" textColor="white">
          <Heading size={4} textColor="purple" caps>Front End</Heading>
          <List>
            <ListItem>Electron</ListItem>
            <ListItem>Handlebars</ListItem>
            <ListItem>Typescript</ListItem>
            <ListItem>Gulp</ListItem>
            <ListItem>CSS Animations</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue" textColor="white">
          <Heading size={4} textColor="purple" caps>Hardware</Heading>
          <List>
            <ListItem>Johnny Five JS</ListItem>
            <ListItem>Firmata</ListItem>
            <ListItem>Ardunio</ListItem>
            <ListItem>Wires</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue" textColor="white">
          <Heading size={4} textColor="purple" caps>Back End</Heading>
          <List>
            <ListItem>Slack API - Incoming webhooks and slash commands
            </ListItem>
            <ListItem>
              Express JS - Server-side Rendering and API Routes
            </ListItem>
            <ListItem>
              Superagent - RESTful Communication between Microservices
            </ListItem>
            <ListItem>
              Socket.io - Push Communication to Client
            </ListItem>
            <ListItem>
              Mongo DB - Database Storage
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Image src={images.d2} width={900}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue" textColor="white">
          <Heading size={6} textColor="purple" caps>Next Steps</Heading>
          <List>
            <Appear>
              <ListItem>Finish DOCKER networking and upload to AWS EC2</ListItem>
            </Appear>
            <Appear>
              <ListItem>Add More Slack Commands</ListItem>
            </Appear>
            <Appear>
              <ListItem>Graphs with SVG animations</ListItem>
            </Appear>
            <Appear>
              <ListItem>Automatic scheduling for sound levels</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Image src={images.thanks} width={900}/>
        </Slide>
      </Deck>
    );
  }
}
