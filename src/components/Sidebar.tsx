import * as React from "react"
import styled from "@emotion/styled"
import { useIntl } from "gatsby-plugin-intl"

import { colors } from "../styles/variables"
import { LogoText, Header1, Header2 } from "./typography"
import { Checkmark } from "../icons/svgs"

interface SidebarProps {
  step1Complete?: boolean
  step2Complete?: boolean
  step3Complete?: boolean
}

const StyledDiv = styled.div`
  width: 296px;
  min-width: 296px;
  background: ${colors.black};
  height: calc(100vh - 80px);
  border-radius: 8px;
  padding: 32px;
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 26px;
    height: 26px;
    border: 2px solid ${colors.yellow};
    border-radius: 100%;

    margin-right: 16px;
  }

  div > p {
    color: ${colors.white};
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
  }
`

export const Sidebar: React.FC<SidebarProps> = ({ step1Complete, step2Complete, step3Complete }) => {
  const intl = useIntl()
  return (
    <StyledDiv>
      <div style={{ marginBottom: 48 }}>
        <div style={{ marginBottom: 6 }}>
          <LogoText color={colors.yellow}>Ringmera.se</LogoText>
        </div>
        <Header1 color={colors.white}>{intl.formatMessage({ id: "hashtag" })}</Header1>
      </div>

      <ItemWrapper>
        <div style={{ background: step1Complete ? colors.yellow : "none" }}>{step1Complete ? <Checkmark /> : <p>1</p>}</div>
        <Header2 color={colors.white}>{intl.formatMessage({ id: "sidebar-step-1" })}</Header2>
      </ItemWrapper>

      <ItemWrapper>
        <div style={{ background: step2Complete ? colors.yellow : "none" }}>{step2Complete ? <Checkmark /> : <p>2</p>}</div>
        <Header2 color={colors.white}>{intl.formatMessage({ id: "sidebar-step-2" })}</Header2>
      </ItemWrapper>

      <ItemWrapper>
        <div style={{ background: step3Complete ? colors.yellow : "none" }}>{step3Complete ? <Checkmark /> : <p>3</p>}</div>
        <Header2 color={colors.white}>{intl.formatMessage({ id: "sidebar-step-3" })}</Header2>
      </ItemWrapper>
    </StyledDiv>
  )
}