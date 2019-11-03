const csBtn = document.querySelector('#btn-cs');
const pprojBtn = document.querySelector('#btn-pproj');

const pprojDisplay = document.querySelectorAll('.flex-box')[1];
const csDisplay = document.querySelectorAll('.flex-box')[0];

pprojDisplay.style.display = 'none';
csDisplay.style.display = 'none';
csDisplay.style.backgroundColor = '#537ec5';
pprojDisplay.style.backgroundColor = '#293a80';

csBtn.addEventListener('click', function() {
	pprojDisplay.style.display = 'none';
	csDisplay.style.display = 'block';
});

pprojBtn.addEventListener('click', function() {
	csDisplay.style.display = 'none';
	pprojDisplay.style.display = 'block';
});
