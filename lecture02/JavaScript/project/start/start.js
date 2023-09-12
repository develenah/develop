// axios library

// Login Promise
axios.post('https://api.marktube.tv/v1/me', {
    eamil,
    password,
}).then(res => {});

// Login Async-Await
const res = await axios.post('https://api.marktube.tv/v1/me', {
    eamil,
    password,
});
