window.onload = function () {

	const cookieBlock = document.querySelector('#cookie-block');
	const okButton = document.querySelector('#cookie-ok-button');

	const cookieHandler = () => {
		cookieBlock.classList.remove("active");
		localStorage.setItem("cookiesaccepted", document.cookie);
	}

    if(okButton) {
        okButton.addEventListener("click", cookieHandler);
    }

	const isCookieInLS = localStorage.getItem("cookiesaccepted");

	setTimeout(() => {
		if (!isCookieInLS) {
			cookieBlock.classList.add("active");
		}
	}, 2000);
};

