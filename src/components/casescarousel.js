import React, { useState } from 'react'
import styles from '../styles/casecarousel.module.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import Vladimir from '../videos/vladimir.webm'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default props => {
  return (
    <div className={styles.casesCarouselWrapper}>
      <h2 className={styles.casesCarouselHeadline}> Cases</h2>
      <Carousel
        infinite
        autoPlay={30000}
        arrowLeft={
          <IoIosArrowBack className={styles.arrowIcon} name="arrow-left" />
        }
        arrowRight={
          <IoIosArrowForward className={styles.arrowIcon} name="arrow-right" />
        }
        addArrowClickHandler
      >
        <div>
          <h3 className={styles.casesCarouselText}>
            {' '}
            <span className={styles.casesCarouselCostumer}>
              {' '}
              comrade vladimir{' '}
            </span>{' '}
            he is very nice musicer - love his artsy fartsy videos
          </h3>
          <video width="100%" autoPlay controls>
            <source src={Vladimir} type="video/webm" />
          </video>
        </div>
        <div>
          <h3 className={styles.casesCarouselText}>
            {' '}
            <span className={styles.casesCarouselCostumer}>
              {' '}
              comrade vladimir{' '}
            </span>{' '}
            he is very nice musicer - love his artsy fartsy videos
          </h3>
          <video width="100%" autoPlay controls>
            <source src={Vladimir} type="video/webm" />
          </video>
        </div>
        <div>
          <h3 className={styles.casesCarouselText}>
            {' '}
            <span className={styles.casesCarouselCostumer}>
              {' '}
              comrade vladimir{' '}
            </span>{' '}
            he is very nice musicer - love his artsy fartsy videos
          </h3>
          <video width="100%" autoPlay controls>
            <source src={Vladimir} type="video/webm" />
          </video>
        </div>
      </Carousel>
    </div>
  )
}
