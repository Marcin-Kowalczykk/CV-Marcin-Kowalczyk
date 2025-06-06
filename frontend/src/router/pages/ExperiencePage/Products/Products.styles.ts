import styled, { css } from 'styled-components'
import { pulseBorder } from '../ExperiencePage.styles'

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: end;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  height: 90vh;
  grid-auto-rows: 1fr;
  @media (min-width: 1500px) {
    gap: 36px;
    max-width: 1600px;
  }
`

export const ProductCard = styled.div<{
  pulse?: boolean
  elevated?: boolean
  noRightRadius?: boolean
  noLeftRadius?: boolean
}>`
  background: #fff;
  border-radius: 8px;
  border-top-right-radius: ${({ noRightRadius }) => (noRightRadius ? '0' : '8px')};
  border-bottom-right-radius: ${({ noRightRadius }) => (noRightRadius ? '0' : '8px')};
  border-top-left-radius: ${({ noLeftRadius }) => (noLeftRadius ? '0' : '8px')};
  border-bottom-left-radius: ${({ noLeftRadius }) => (noLeftRadius ? '0' : '8px')};
  box-shadow:
    0 2px 16px rgba(0, 0, 0, 0.07),
    ${({ elevated }) => (elevated ? '16px 0 32px -16px rgba(0,0,0,0.18)' : 'none')};
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 29vw;
  max-width: 370px;
  min-width: 260px;
  height: 60vh;
  max-height: 520px;
  min-height: 320px;
  overflow: hidden;
  ${({ pulse }) =>
    pulse &&
    css`
      animation: ${pulseBorder} 1.5s infinite;
      cursor: pointer;
    `}
  z-index: ${({ elevated }) => (elevated ? 201 : 1)};
  @media (min-width: 1500px) {
    width: 33vw;
    max-width: 500px;
    height: 65vh;
    max-height: 700px;
    min-width: 320px;
    min-height: 400px;
  }
`

export const ProductImageWrapper = styled.div`
  flex: 4;
  width: 100%;
  height: 0;
  padding-bottom: 75%;
  position: relative;
`

export const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 12px 12px 12px;
  background: #fff;
`

export const ProductTitle = styled.div`
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 4px;
  text-align: center;
`

export const ProductDesc = styled.div`
  color: #888;
  font-size: 15px;
  margin-bottom: 6px;
  text-align: center;
`

export const ProductPrice = styled.div`
  font-weight: 600;
  font-size: 15px;
  text-align: center;
`

export const PlaceholderCard = styled(ProductCard)<{ bg?: string }>`
  background: ${({ bg }) => (bg ? `url(${bg}) center top/cover no-repeat` : '#f2f2f2')};
  box-shadow: none;
  color: #bdbdbd;
  height: 28vh;
  max-height: 200px;
  min-height: 100px;
  @media (min-width: 1500px) {
    height: 35vh;
    max-height: 260px;
    min-height: 120px;
  }
`
