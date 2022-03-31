import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrievePosts } from "../../action/Home";
import parse from "html-react-parser";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { HeroContent, HeroTitle, HomeContainer, LinkRegister, PostCard, PostsWrapper, RegisterForm } from "./HomeElements";
import { format } from 'date-fns';
import Select from "../../components/Select";
import TextField from "../../components/TextField";
import { useForm, Controller } from "react-hook-form";
import VideoPart from "./VideoPart";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const home = useSelector((state) => state.home)
  const dispatch = useDispatch()
  // check display way u would like to 
  const [queryUrl, setQueryUrl] = useState("https://api.finlogix.com/v1/posts?per_page=12&page=1");
  const { control, handleSubmit } = useForm({
    defaultValues: {
      topic: '',
      first_name: '',
      last_name: '',
      email: '',
    }
  })

  useEffect(() => {
    dispatch(retrievePosts(queryUrl))
  }, [dispatch, queryUrl])

  console.log(home);

  const plusDay = (date) => {
    var res = new Date(date);
    res.setDate(res.getDate() + 10);
    return format(res, 'yyyy/MM/dd hh:mm');
  }

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
              <legend>{new Date(post.created_at).toLocaleDateString("en-US")}</legend>
              <h3>
                {post.title}
              </h3>
              {parse(post.content)}
              <h4>
                {plusDay(post.created_at)}
              </h4>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p={`.5rem`}
              >
                {isLoggedIn ? (
                  <LinkRegister
                    to="register"
                  >
                    Register Now
                  </LinkRegister>
                ) : (
                  <Button
                    color={'#43AA15'}
                    p={`1rem`}
                    link
                    to={`/login`}
                  >
                    Register Now
                  </Button>
                )}
              </Box>
            </PostCard>
          ))}
        </PostsWrapper>
      </Box>
      <VideoPart/>
      <Box 
        id="register"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={`100%`} 
        m={`2rem 0`}
      >
        <RegisterForm >
          <h3>Register for a Webinar now</h3>
          <p>Please fill in the form below and you will be contacted by one of our professional business experts.</p>
          <Controller
            control={control}
            name="topic"
            render={({ field }) => (
              <Box m={`0 0 1.5rem 0`}>
                <Select
                  value={field.value}
                  onChange={field.onChange}
                  label="Topic"
                  fullWidth
                >
                  <option value="">--Please choose an option--</option>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                </Select>
              </Box>
            )}
          />
          <Controller
            control={control}
            name="first_name"
            render={({ field }) => (
              <Box m={`0 0 1.5rem 0`}>
                <TextField
                  label="First Name"
                  value={field.value}
                  onChange={field.onChange}
                  fullWidth
                />
              </Box>
            )}
          />
          <Controller
            control={control}
            name="last_name"
            render={({ field }) => (
              <Box m={`0 0 1.5rem 0`}>
                <TextField
                  label="Last Name"
                  value={field.value}
                  onChange={field.onChange}
                  fullWidth
                />
              </Box>
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Box m={`0 0 1.5rem 0`}>
                <TextField
                  label="Email"
                  type="email"
                  value={field.value}
                  onChange={field.onChange}
                  fullWidth
                />
              </Box>
            )}
          />
        </RegisterForm>
      </Box>
    </HomeContainer>
  )
};

export default Home;