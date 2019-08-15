import React, { useState } from 'react'
import styles from '../styles/testimonialcarousel.module.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel'

export default props => {
  return (
    <div className={styles.projects}>
      <div className={styles.project_outer}>
        <Carousel
          autoPlay={6000}
          stopAutoPlayOnHover
          clickToChange
          infinite
          slidesPerPage={1}
        >
          <p className={styles.project_text}>
            Tetra Pak:{' '}
            <span className={styles.testimonial}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              pretium quam vulputate dignissim suspendisse. Metus dictum at
              tempor commodo ullamcorper a lacus.
            </span>{' '}
          </p>
          <p className={styles.project_text}>
            Tetra Pak:{' '}
            <span className={styles.testimonial}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              pretium quam vulputate dignissim suspendisse. Metus dictum at
              tempor commodo ullamcorper a lacus.
            </span>{' '}
          </p>
          <p className={styles.project_text}>
            Tetra Pak:{' '}
            <span className={styles.testimonial}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              pretium quam vulputate dignissim suspendisse. Metus dictum at
              tempor commodo ullamcorper a lacus.
            </span>{' '}
          </p>
          <p className={styles.project_text}>
            Tetra Pak:{' '}
            <span className={styles.testimonial}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              pretium quam vulputate dignissim suspendisse. Metus dictum at
              tempor commodo ullamcorper a lacus.
            </span>{' '}
          </p>
        </Carousel>
      </div>
    </div>
  )
}
