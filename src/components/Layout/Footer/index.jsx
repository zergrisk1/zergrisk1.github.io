import React from "react"
import styled from "styled-components"

import { copyright } from "../../../../blog-config"

const FooterWrapper = styled.footer`
  margin-top: 32px;
  padding: 40px 30px;
  border-top: 1px solid ${props => props.theme.colors.divider};
  text-align: center;
  font-size: 11pt;
  font-weight: lighter;
  color: ${props => props.theme.colors.secondaryText};
    & > div#copyright {
        //font-weight: bold;
    }
    & > div#themeby {
        margin-bottom: 15px;
    }
    
`

const Footer = () => {
  return (
    <FooterWrapper>
      <div id={"themeby"}>
        Theme by <a href="https://github.com/rundevelrun/gatsby-starter-rundevelrun" target="blank">
        gatsby-starter-rundevelrun
      </a></div>
      <div id={"copyright"} dangerouslySetInnerHTML={{ __html: copyright }}></div>

    </FooterWrapper>
  )
}

export default Footer
