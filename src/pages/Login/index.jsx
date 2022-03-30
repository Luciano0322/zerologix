import Box from "../../components/Box";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { LoginContainer, LoginField } from "./LoginElement";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { logIn } from "../../action/auth";
import Dialog from "../../components/Dialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const [dialog, setDialog] = useState({
    open: false,
    title: "",
  })
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: 'yuntest@mailinator.com',
      password: 'A123456',
    }
  })
  const sendLogin = (data) => {
    console.log(data);
    dispatch(logIn(data))
    .then(res => res.token && res.user && alert('登入成功'))
    .then(() => navigate('/'))
    .then(() => navigate(0))
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