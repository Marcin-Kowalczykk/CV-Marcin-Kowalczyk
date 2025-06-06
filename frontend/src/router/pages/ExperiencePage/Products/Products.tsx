import { useEffect, useRef, useState } from 'react'
import AnimatedDrawer from './AnimatedDrawer/AnimatedDrawer'
import {
  PlaceholderCard,
  ProductCard,
  ProductImage,
  ProductImageWrapper,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  ProductDesc,
  ProductsGrid,
} from './Products.styles'
import { PRODUCT_DATA, PLACEHOLDER_IMAGES, PROJECTS, RESPONSIBILITIES } from './constants'
import StarsOpinions from './StarsOpinions/StarsOpinions'

const Products = () => {
  const [drawerContentVisible, setDrawerContentVisible] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerRect, setDrawerRect] = useState<{
    top: number
    left: number
    height: number
    width: number
  }>({ top: 0, left: 0, height: 0, width: 0 })
  const [drawerClickedOutside, setDrawerClickedOutside] = useState(false)
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!drawerOpen) return
    const handleClick = (e: MouseEvent) => {
      if (
        !(e.target as HTMLElement).closest('.drawer-content') &&
        !(e.target as HTMLElement).closest('.drawer-card')
      ) {
        setDrawerClickedOutside(true)
        setTimeout(() => setDrawerOpen(false), 200)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [drawerOpen])

  useEffect(() => {
    if (!drawerOpen) setDrawerContentVisible(false)
  }, [drawerOpen])

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    if (drawerOpen && activeCardIndex === idx) {
      setDrawerOpen(false)
      setActiveCardIndex(null)
      return
    }
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    if (gridRef.current) {
      const gridRect = gridRef.current.getBoundingClientRect()
      setDrawerRect({
        top: rect.top - gridRect.top,
        left: rect.left - gridRect.left + rect.width,
        height: rect.height,
        width: rect.width,
      })
    }
    setDrawerOpen(true)
    setDrawerClickedOutside(false)
    setActiveCardIndex(idx)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
    setActiveCardIndex(null)
  }

  const handleDrawerTransitionEnd = () => {
    if (drawerOpen && !drawerContentVisible) setDrawerContentVisible(true)
  }

  return (
    <div style={{ position: 'relative' }} ref={gridRef}>
      <ProductsGrid>
        {PRODUCT_DATA.map((product, i) => (
          <ProductCard
            key={i}
            pulse={!drawerOpen && i === 0}
            onClick={i === 0 ? (e) => handleCardClick(e, i) : undefined}
            className={i === 0 ? 'drawer-card' : ''}
            elevated={drawerOpen && i === activeCardIndex}
            noRightRadius={drawerOpen && i === 0 && activeCardIndex === 0}
          >
            <ProductImageWrapper>
              <ProductImage
                src={product.img}
                alt={product.title}
                loading="lazy"
                decoding="async"
                onLoad={(e) => {
                  const img = e.target as HTMLImageElement
                  img.style.opacity = '1'
                }}
                style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
              />
            </ProductImageWrapper>
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.price}</ProductPrice>
              <StarsOpinions opinions={product.opinions} />
            </ProductInfo>
          </ProductCard>
        ))}
        {PLACEHOLDER_IMAGES.map((img, i) => (
          <PlaceholderCard key={i} bg={img} />
        ))}
      </ProductsGrid>
      <AnimatedDrawer
        open={drawerOpen && activeCardIndex === 0 && !drawerClickedOutside}
        top={drawerRect.top}
        left={drawerRect.left}
        height={drawerRect.height}
        width={drawerRect.width}
        drawerContentVisible={drawerContentVisible}
        onClose={handleDrawerClose}
        onTransitionEnd={handleDrawerTransitionEnd}
        projects={PROJECTS}
        responsibilities={RESPONSIBILITIES}
      />
    </div>
  )
}

export default Products
