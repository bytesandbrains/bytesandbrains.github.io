/* global gtag */

import React from 'react'
import { useIntl, FormattedMessage } from '../intl/main.js'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'
import Footer from '../components/footer.js'
import styles from '../styles/cases.module.css'
import ContactBlock from '../components/contact-block.js'
import Vladimir from '../videos/vladimir.webm'
import TetraPakVideo from '../videos/TetraPakCase_Test1.mp4'

const Cases = props => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: 'Meta.cases.title' })}
        description={intl.formatMessage({ id: 'Meta.cases.text' })}
        keywords={['bytesandbrains']}
      />

      <div className={styles.casesWrapper}>
        <h1 className={styles.casesHeadline}>Customer cases</h1>
        <div className={styles.customerCase}>
          <h2 className={styles.customerHeadline}>
            TetraPak - Creating image analysing software
          </h2>
          <p className={styles.customerText}>
            TetraPak provides processing and packaging solutions for food. They
            make machines that create and fill cartons for their customers, and
            their machines can create approximately 10 cartons per second.
            However, sometimes small defects can appear at the cartons, and if a
            defect goes on unnoticed potentially thousands of cartons can have
            been produced with defects, before the problem gets corrected.
            TetraPak wished to identify the defect cartons as quickly as
            possible, so they needed a system that could captures images of
            every single carton that goes through a production line.
            Furthermore, they needed a software, that could analyze these images
            in real time and give a warning when defects start to happen. Bytes
            & Brains where hired to firstly explore how the software best could
            be developed by researching different methods and algorithms.
            Secondly, develop the software for image analysis and thirdly, equip
            the in-house developers to take over the project afterwards. Bytes &
            Brains solved the task and stayed in touch after ended contract, to
            support the in-house developers.
          </p>
          <video width="100%" autoPlay controls className={styles.casesMedia}>
            <source src={TetraPakVideo} type="video/mp4" />
          </video>
        </div>
        <div className={styles.customerCase}>
          <h2 className={styles.customerHeadline}>
            Novo Nordisk - Optimizing software
          </h2>
          <p className={styles.customerText}>
            Novo Nordisk is a Danish founded, global healthcare company with
            more than 95 years experience in working with diabetes care. The
            company makes medicin, and as they have an innovative approach, it
            requires some trial and error when working with the chemicals to
            find out which ratio gives the best yield. The work is often done by
            scientists making educated guesses about the ratio of chemical
            ingredients, but Novo also uses software to support the scientists
            in their work. However, at the time the software did not have all
            the features that was needed for the scientists to do the best job
            possible, so Novo wished to optimize it. Bytes & Brains where hired
            to help adding new features to the software. The work was done in
            close collaboration with Novo, to meet their specific needs of which
            features that needed to be made or improved. The proces is ongoing
            and Bytes & Brains are still helping Novo improve their software
            whenever needed.
          </p>
         
        </div>
        <div className={styles.customerCase}>
          <h2 className={styles.customerHeadline}>Frederiksberg Hospital </h2>
          <p className={styles.customerText}>
            Frederiksberg Hospital is a public hospital in the Capital Region of
            Denmark. The hospital needed to be able to analyse a new types of
            MRI sequences. They already had a script, but it was time consuming
            and were only able to look at a small part of a image. Using theis
            script meant that it would take several months for two PhD students
            to analyse a full data set. Frederiksberg Hospital knew it was
            possible to implement a faster version of the script and that some
            of the manual processes needed to be automated. So they hired Bytes
            & Brains to help. With extensive knowledge within research in
            medical imaging and medical image processing, the Bytes & Brians
            consultants quickly understood the problem, and where able to
            implement a solution based on a open source technology. With this
            new application the PhD students were able to process their entire
            data set automatically and only focus on analysing the results. And
            since they were able to analyse the entire image they could inspect
            other parts of the images as well, which meant that they discovered
            a previously unknown phenomenon that the original inventors of the
            new sequences were unaware of.
          </p>
         
        </div>
        <div className={styles.customerCase}>
          <h2 className={styles.customerHeadline}>
            OUH (Odense Universitetshospital) - developing custom build software
          </h2>
          <p className={styles.customerText}>
            TAs part of a nation-wide screening project about calcifications of
            the large arteries, the research team at OUH needed a custom built
            software to visually identify and measure calcifications found in CT
            scans. At the time, OUH were using a software from Siemens designed
            for detecting coronary (heart) artery calcifications. They wanted a
            similar user interface and to use the same algorithm for calculating
            the calcification volume. Because of technical know-how and
            experience in working with medical staff, Bytes & Brains were hired
            to develop the new software. At first a prototype was build to get
            user feedback from the medical staff at OUH. Through continuous
            feedback loop regarding functionality and interface, it was possible
            to develop a thorough testing plan to verify the correctness of the
            calculations, and to integrate the solution in the OUH internal
            network. During the project GDPR was introduced so the software also
            had to be made GDPR compliant. The result was a fully working
            independent solution, that can be completely maintained by OUH. The
            software is used by MDs and other medical staff daily and
            contributes to Danish health science research.
          </p>
          
        </div>
      </div>
      <ContactBlock />
      <Footer />
    </Layout>
  )
}

export default Cases
