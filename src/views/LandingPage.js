import React from "react";
import Header from "../components/Header/Header";
import Artists from "../components/Artists/Artists";
import Events from "../components/Events/Events";
import Music from "../components/Music/Music";
import Shop from "../components/Shop/Shop";
import Footer from "../components/Footer/Footer";


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";



const LandingPage = () => {


  return (
      <>
        <Header/>
        <Artists/>
        <Events/>
        <Music/>
        <Shop/>
        <Footer/>
      </>
  )
}

export default LandingPage
