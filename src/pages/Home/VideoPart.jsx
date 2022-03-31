import Box from "../../components/Box"
import Button from "../../components/Button";
import { VideoContent, VideoTitle } from "./HomeElements";

const VideoPart = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      width={`min(90%, 70rem)`} 
      m={`2rem 0`}
      flexWrap="wrap"
    >
      <Box 
        width={`min(90%, 540px)`}
      >
        <VideoTitle>Meet Your Host - Alistair Schultz</VideoTitle>
        <VideoContent>
          {`With more than 15 years of experience covering both the FX and CFD markets, Alistair has extensive knowledge covering algorithmic trading, market analysis & an impressive educational background.`}
        </VideoContent>
        <VideoContent>
          {`As the author of ‘Essentials for Trading Students – An Overview of the Basics for Aspiring Traders’, which was released in 2017, Alistair will take any aspiring trader from the basics right through to advanced analytics used in institutional funds.`}
        </VideoContent>
        <VideoContent>
          {`At the core of Alistair’s teachings is the ability to help each trader uncover their ‘Trading DNA', helping them flourish with the skills and timeframes that work best for them.`}
        </VideoContent>
        <Button
          p={`.75rem`}
        >
          {`See more >`}
        </Button>
      </Box>
      <Box
        width={`min(90%, 540px)`}
      >
        <iframe 
          width="540" 
          height="315" 
          src="https://www.youtube.com/embed/fnqETTXexGM" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen></iframe>
      </Box>
    </Box>
  )
};

export default VideoPart;