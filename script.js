function getYear() {

fetch('https://whatyearisit-backend-psi-mocha.vercel.app/year')
.then(response => response.json())
.then(data => {
    document.querySelector('#year').textContent = data.year;
})
};

getYear();