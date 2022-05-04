import React from "react"
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyle";

const Footer = () => {
    return (
        <Box><h1>

        </h1>
        <Container>
            <Row>
                <Column>
                  <Heading>Help Line Call</Heading>
                  <FooterLink href="">One</FooterLink>
                  <FooterLink href="">Two</FooterLink>
                  <FooterLink href="">Three</FooterLink>
                </Column>
                <Column>
                  <Heading>Services</Heading>
                  <FooterLink href="#">Depression Diagnosis</FooterLink>
                  <FooterLink href="#">Words of Affirmations</FooterLink>
                  <FooterLink href="#">Monitoring Tips</FooterLink>
                </Column>
                <Column>
                  <Heading>Pages</Heading>
                  <FooterLink href="">SignUp</FooterLink>
                  <FooterLink href="">Login</FooterLink>
                  <FooterLink href="">Home</FooterLink>
                </Column>
            </Row>
        </Container>
        </Box>
    )
} 

export default Footer;