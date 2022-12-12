const adviceNumber = document.querySelector('.advice-number');
const advice = document.querySelector('.advice');
const btn = document.querySelector('.advice-btn');

const randomQuote = () => {
	const URL = '	https://api.adviceslip.com/advice';
	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			adviceNumber.textContent = data.slip.id;
			advice.textContent = data.slip.advice;
		})
		.catch((error) => console.error(error));
};

randomQuote();
btn.addEventListener('click', randomQuote);
