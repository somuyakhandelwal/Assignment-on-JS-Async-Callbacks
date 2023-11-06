const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getCookies() {
  // Progression 2: using setTimeout()
  setTimeout(() => {
    let output = '';
    cookies.forEach((cookie) => {
      output += `<li>${cookie.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//Progression 3: Create a function to creat cookies
function createCookie(newCookie, CallBack) {
  setTimeout(() => {
    cookies.push(newCookie);
    CallBack();
  }, 1000);
}

// Progression 5: calling function
createCookie(newCookie, getCookies);
