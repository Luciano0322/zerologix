import Box from "../../components/Box";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { LoginContainer, LoginField } from "./LoginElement";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  })
  const sendLogin = (data) => {
    console.log(data);
    
  }
  return (
    <LoginContainer onSubmit={handleSubmit(sendLogin)}>
      <h3 style={{textAlign: 'center'}}>Log in form</h3>
      <LoginField>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              value={field.value}
              onChange={e => field.onChange(e.target.value)} 
              label="email"
              type="email"
              fullWidth 
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              value={field.value}
              onChange={e => field.onChange(e.target.value)} 
              label="password" 
              type="password"
              fullWidth 
            />
          )}
        />
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Button type="submit" p={`.75rem`} variant="containted">
            submit
          </Button>
        </Box>
      </LoginField>
    </LoginContainer>
  )
};

export default Login;