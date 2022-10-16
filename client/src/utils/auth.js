import decode from 'jwt-decode';

class AuthService {
//retrieve data from token
getProfile() {
    return decode(this.getToken());
}

//check if user is logged in
loggedIn(){
    // checks for saved token & whether said token is valid
    const token = this.getToken();
// coersion to check that token isn't undefined & isn't expired
    return !!token && !this.isTokenExpired(token);
}

//check if token is expired
isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }
//   retrieve token from localStorage
getToken() {
    // return user token
    return localStorage.getItem('id_token');
}

// set token in localStorage, reload homepage
login(idToken){
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
}

// clear token from lS, forcing logout with a reload
logout() { 
    //clear data from lS
    localStorage.removeItem('id_token');
    window.location.assign('/');
}
}

export default new AuthService(); 