import LogixDataV1 from "../https/zeroLogix"

const login = (loginData) => {
  return LogixDataV1.post(`/auth/email/login`, loginData)
};

const AuthService = {
  login
}

export default AuthService;