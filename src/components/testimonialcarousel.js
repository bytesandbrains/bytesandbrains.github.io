import React, { useState } from 'react'
import styles from '../styles/testimonialcarousel.module.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel'

export default props => {
  return (
    <div className={styles.projects}>
      <div className={styles.project_outer}>
        <Carousel
          autoPlay={10000}
          stopAutoPlayOnHover
          clickToChange
          infinite
          slidesPerPage={2}
        >
          <p className={styles.project_text}>
            - {' '}
            <span className={styles.testimonial}>
              "Working with Bytes & Brains was like a breath of fresh air. They are very pleasant people and they quickly and translated our business challenge into a functional algorithm in 3 months.", <i>Astrid Nielsen</i>, <i>Data Science Manager</i>, <i>TetraPak</i>
            </span>{' '}
          </p>
        </Carousel>
      </div>
    </div>
  )
}
