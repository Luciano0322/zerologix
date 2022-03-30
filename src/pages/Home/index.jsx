import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrievePosts } from "../../action/Home";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { HeroContent, HeroTitle, HomeContainer, PostCard, PostsWrapper } from "./HomeElements";

const Home = () => {
  const home = useSelector((state) => state.home)
  const dispatch = useDispatch()
  const [queryUrl, setQueryUrl] = useState("https://api.finlogix.com/v1/posts?per_page=12&page=1");

  useEffect(() => {
    dispatch(retrievePosts(queryUrl))
  }, [dispatch, queryUrl])

  console.log(home);

  return (
    <HomeContainer>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p={`4rem 1.5rem`}
        width={`min(800px, 100%)`}
      >
        <HeroTitle>Forex Webinars</HeroTitle>
        <HeroContent>
          Whether you are new to foreign exchange trading or already have some market experience, we believe that a solid FX trading education is vital to your success as a trader.
        </HeroContent>
      </Box>
      <Box
        width={`100%`} 
        bgColor={`#F2F2F2`}
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={`3rem 0`}
      >
        <PostsWrapper>
          {home.data?.map((post) => (
            <PostCard key={post.id}>
              <p>{new Date(post.created_at).toLocaleDateString("en-US")}</p>
            </PostCard>
          ))}
        </PostsWrapper>
      </Box>
    </HomeContainer>
  )
};

export default Home;