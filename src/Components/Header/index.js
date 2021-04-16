import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Links } from './styles'

function Header() {
  return (
    <> 
        <Container>
          <Links>
            <p>Why GitHub</p>
            <p>Team</p>
            <p>Enterprise</p>
            <p>Explore</p>
            <p>Marketplace</p>
            <p>Pricing</p>
          </Links>

        <Link to="SignIn">SignIn</Link>
        </Container>
    </>
  );
}

export default Header;
