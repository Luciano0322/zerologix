import LogixV1WithToken from "../https/withToken";
import LogixDataV1 from "../https/zeroLogix"

const login = (loginData) => {
  return LogixDataV1.post(`/auth/email/login`, loginData)
};

const logout = () => {
  return LogixV1WithToken.post(`/auth/logout`)
}

const AuthService = {
  login,
  logout
}

export default AuthService;