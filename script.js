function getYear() {

fetch('https://whatyearisit-backend-two-dusky.vercel.app/year')
.then(response => response.json())
.then(data => {
    document.querySelector('#year').textContent = data.year;
})
};

getYear();