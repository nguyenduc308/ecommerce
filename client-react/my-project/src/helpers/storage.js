const keyToken = "token";

const storage = {
  setToken(token) {
    localStorage.setItem(keyToken, token);
  },
  getToken() {
    return localStorage.getItem(keyToken);
  },
};

export default storage;
