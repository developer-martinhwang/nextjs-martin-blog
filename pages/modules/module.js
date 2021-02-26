// material-ui core
import {Box} from '@material-ui/core';
// layouts/Storyboard.js
import Storycard from '../../layouts/Storycard';
import Footer from '../../layouts/Footer';
import AccordionCard from '../../layouts/Accordioncard';
// main css 
import styles from '../../styles/Home.module.css';
// image 
// import javascriptImage from '../../assets/images/javascriptImage.jpg';
// import nodeGraphqlImage from '../../assets/images/nodeGraphql.jpg';
// import reactjsNextjsImage from '../../assets/images/reactjsNextjs.jpg';
const storyCardDummy = [
    {title: "Javascript", 
     subtitle: "It is good!! I like it.",
    //  image: `${javascriptImage}`,
    },
    {title: "Reactjs & Nextjs", 
    subtitle: "It is better!!! I love it.",
    // image: `${reactjsNextjsImage}`
    },
    {title: "Nodejs", 
    subtitle: "? I love it.",
    // image: `${nodeGraphqlImage}`
    }
]
const accordionDummy = [
    {summary: "Who is Martin Hwang?", 
     details: "He is a Software Developer",
    },
    {summary: "What does he specialize?", 
     details: "He specializs javascript, React.js, Next.js, Node.js.",
    },
    {summary: "What is his long term goal?", 
     details: "Become an expert of javascript and Frameworks",
  }]
export default function Module () {
    return (
        <Box className={styles.container}>
            <Box>
                {storyCardDummy.map((story, index) => (
                    <Storycard
                            key={story}
                            index={index}
                            title={story.title}
                            subtitle={story.subtitle}
                            
                    />
                ))}
                <AccordionCard items={accordionDummy} />
            </Box>
            <Footer borderTop="10px solid #303436" 
                    marginTop="4em"/>
        </Box>
    )
}