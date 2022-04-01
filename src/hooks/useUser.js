export const getUser = () => {
  let user = JSON.parse(localStorage.getItem("zeroLogixUser"));
  return user
}