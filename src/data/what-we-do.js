import Android from '../images/logos/Android_robot.png'
import Cpp from '../images/logos/cpp_logo.png'
import Docker from '../images/logos/docker.png'
import GraphQL from '../images/logos/GraphQL_Logo.png'
import Nodejs from '../images/logos/Node.js_logo.png'
import Python from '../images/logos/Python-logo-notext.png'
import Pytorch from '../images/logos/pytorch.png'
import RLogo from '../images/logos/R_logo.png'
import React from '../images/logos/React-icon.png'
import TensorFlow from '../images/logos/Tensorflow_logo.png'
import GoogleCloud from '../images/logos/GoogleCloud.png'
import AWS from '../images/logos/AWS.png'
import Azure from '../images/logos/Azure.png'
//import Csharp from "../images/logos/csharp-logo.png";
//import ITK from "../images/logos/ITK-JPEG.jpg";
//import Java from "../images/logos/Java.png";
//import JavaScript from "../images/logos/JavaScript-logo.png";
//import Matlab from "../images/logos/Matlab_Logo.png";
//import Postgresql from "../images/logos/Postgresql_elephant.png";
//import Redux from "../images/logos/Redux.png";
//import Swift from "../images/logos/Swift_logo.png";
//import Eigen from "../images/logos/eigen.png";
//import AWS from "../images/logos/AWS.png";
import { MdExplore, MdSchool, MdBuild, MdCode } from 'react-icons/md'

const whatWeDoBody = [
  {
    iconLeft: MdExplore,
    headlineLeft: 'Headlineleft.first',
    keywordsleft: 'Keywordsleft.first',

    bodyLeft: 'Bodyleft.first',

    techLogo1: TensorFlow,
    techLogo2: Pytorch,
    techLogo3: Python,
  },
  {
    iconLeft: MdSchool,
    headlineLeft: 'Headlineright.first',
    keywordsleft: 'Keywordsright.first',
    bodyLeft: 'Bodyright.first',
    techLogo3: RLogo,
    techLogo4: Cpp,
  },
  {
    iconLeft: MdBuild,
    headlineLeft: 'Headlineleft.second',
    keywordsleft: 'Keywordsleft.second',
    bodyLeft: 'Bodyleft.second',
    techLogo1: Docker,
    techLogo2: GoogleCloud,
    techLogo3: AWS,
    techLogo4: Azure,
  },
  {
    iconLeft: MdCode,
    headlineLeft: 'Headlineright.second',
    keywordsleft: 'Keywordsright.second',
    bodyLeft: 'Bodyright.second',
    techLogo1: React,
    techLogo2: GraphQL,
    techLogo3: Nodejs,
    techLogo4: Android,
  },
]

export default whatWeDoBody
