import { Container } from "react-bootstrap";
import { AboutComp } from "../component/about/AboutComp";
import { ContactComp } from "../component/contact/ContactComp";
import { FooterComp } from "../component/footer/FooterComp";

export const Aboutus = () => {
  return (
    <Container className="g-0">
      <div className="ptop"></div>
      <AboutComp />
      <ContactComp />
      <FooterComp />
    </Container>
  )
}

