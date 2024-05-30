// Cookies are the most traditional form of browser storage
// key value pairs that are always strings
// everything revolves around the document.cookie value
// Default cookie expiration is when the browser closes but that can be overridden
//document.cookie = `course=FrontendExpert; expires=${new Date().toUTCString()}`;
// max-age = 0 on the cookie works the same way
//document.cookie = `user=Clement; secure; samesute=strict`;
//console.log(document.cookie);
/*
const course = document
    .cookie
    .split('; ')
    .find(cookie => cookie.startsWith('course='))
    .split('=')[1];

console.log(course);
*/

// Local storage and session storage provide more space than cookies can allocate
// Local storage does not expire
// Needs to be manually deleted
// Session storage expires at the end of the session
// Cookies are set by the server whereas local and session storages are set by the browser and JS
/*
localStorage.setItem('user', 'Alex');
localStorage.setItem('course', 'FrontendExpert');
console.log(localStorage.getItem('user'));
console.log(localStorage.getItem('course'));
localStorage.removeItem('user');
console.log(localStorage.getItem('user'));
localStorage.clear();
console.log(localStorage.getItem('user'));
*/