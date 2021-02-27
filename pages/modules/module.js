// material-ui core
import {Box} from '@material-ui/core';
// layouts/Storyboard.js
import Storycard from '../../src/layouts/Storycard';
import Footer from '../../src/layouts/Footer';
import AccordionCard from '../../src/layouts/Accordioncard';
// main css 
import styles from '../../styles/Home.module.css';
const storyCardDummy = [
    {title: "Javascript", 
     subtitle: "It is good!! I like it.",
     image: "/images/javascript.jpg",
    },
    {title: "Reactjs & Nextjs", 
     subtitle: "It is better!!! I love it.",
     image: "/images/nextReact.jpg",
    },
    {title: "Nodejs", 
     subtitle: "I can develop back-end. I love it.",
     image: "/images/nodeGraphql.jpg",
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
                            image={story.image}
                            
                    />
                ))}
                <AccordionCard items={accordionDummy} />
            </Box>
            <Footer borderTop="10px solid #303436" 
                    marginTop="4em"/>
        </Box>
    )
}