const getUserData = () => {
  const savedName = localStorage.getItem('user');
  
  if (!savedName) {
    localStorage.setItem('user', JSON.stringify({userName: 'Jamoliddin', email: '1234g@gmail.com', password: 'Jamoliddin123'}));
    return localStorage.getItem('user');
  }
  
  return savedName;
};

const updateUserData = (newData) => {
  if (newData && newData.userName && newData.userName.trim() !== "") {
    localStorage.setItem('user', JSON.stringify(newData));
  }
};
export { getUserData, updateUserData };