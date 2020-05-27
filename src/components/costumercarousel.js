import React, { useRef, useState } from 'react'
import HoverImg from './imagehoover.js'
import Carousel from '@brainhubeu/react-carousel'

import BispebjergColour from '../images/costumerlogos/BispebjergFrederiksberg_Logo_Colour.png'
import BispebjergWhite from '../images/costumerlogos/BispebjergFrederiksberg_Logo_White.png'
import DuuooColour from '../images/costumerlogos/Duuoo_Logo_Colour.png'
import DuuooWhite from '../images/costumerlogos/Duuoo_Logo_White.png'
import RadioboticsColour from '../images/costumerlogos/RB_Logo_Colour.png'
import RadioboticsWhite from '../images/costumerlogos/RB_Logo_White.png'
import RegionSjaellandColour from '../images/costumerlogos/RegionSjaelland_Logo_Colour.png'
import RegionSjaellandWhite from '../images/costumerlogos/RegionSjaelland_Logo_White.png'
import RegionSyddanmarkColour from '../images/costumerlogos/RegionSyddanmark_Logo_Colour.png'
import RegionSyddanmarkWhite from '../images/costumerlogos/RegionSyddanmark_Logo_White.png'
import ScandinavianHighlandsColour from '../images/costumerlogos/ScaninavianHighlands_Logo_Colour.png'
import ScandinavianHighlandsWhite from '../images/costumerlogos/ScaninavianHighlands_Logo_White.png'
import SonistoColour from '../images/costumerlogos/Sonisto_Logo_Colour.png'
import SonistoWhite from '../images/costumerlogos/Sonisto_Logo_White.png'
import TetraPakColour from '../images/costumerlogos/TetraPak_Logo_Colour.png'
import TetraPakWhite from '../images/costumerlogos/TetraPak_Logo_White.png'
import UmeusColour from '../images/costumerlogos/Umeus_Logo_Colour.png'
import UmeusWhite from '../images/costumerlogos/Umeus_Logo_White.png'

import styles from '../styles/costumercarousel.module.css'

import useMediaQuery from '../hooks/media'

export default () => {
  const [logoUrl, setLogoUrl] = useState(RegionSyddanmarkWhite)

  const isMobile = useMediaQuery('(max-width: 800px)')

  return (
    <div className={styles.trustedWrapper}>
      <div className={styles.trusted}>
        <div className={styles.trustedFirms}>
          <Carousel slidesPerPage={isMobile ? 1 : 4} infinite autoPlay={3000}>
            <HoverImg
              nameClass={styles.costumerlogo}
              attributeText="Region Syddanmark"
              notHover={RegionSyddanmarkWhite}
              hover={RegionSyddanmarkColour}
            />
            <a href="https://www.tetrapak.com/">
              <HoverImg
                attributeText="TetraPak logo"
                nameClass={styles.costumerlogo + ' ' + styles.logoTetraPak}
                notHover={TetraPakWhite}
                hover={TetraPakColour}
              />
            </a>
            <HoverImg
              attributeText="Bispebjerg og Frederiksberg Hospital logo"
              nameClass={styles.costumerlogo + ' ' + styles.logoFrederiksberg}
              notHover={BispebjergWhite}
              hover={BispebjergColour}
            />
            <HoverImg
              attributeText="Odense Universitetshospital"
              nameClass={styles.costumerlogo + ' ' + styles.logoOdense}
              notHover={ScandinavianHighlandsWhite}
              hover={ScandinavianHighlandsColour}
            />
            <HoverImg
              attributeText="Roskilde Sygehus"
              nameClass={styles.costumerlogo + ' ' + styles.logoRoskilde}
              notHover={RegionSjaellandWhite}
              hover={RegionSjaellandColour}
            />
            <HoverImg
              attributeText="Duuoo"
              nameClass={styles.costumerlogo}
              notHover={DuuooWhite}
              hover={DuuooColour}
            />
            <HoverImg
              attributeText="Radio Botics"
              nameClass={styles.costumerlogo}
              notHover={RadioboticsWhite}
              hover={RadioboticsColour}
            />
            <HoverImg
              attributeText="Sonisto"
              nameClass={styles.costumerlogo}
              notHover={SonistoWhite}
              hover={SonistoColour}
            />
            <HoverImg
              attributeText="Umeus"
              nameClass={styles.costumerlogo}
              notHover={UmeusWhite}
              hover={UmeusColour}
            />
          </Carousel>
        </div>
      </div>
    </div>
  )
}
