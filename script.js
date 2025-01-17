// Import header and footer variables for each country
import { headerES, footerES, headerFR, footerFR, headerUK, footerUK, headerAT, footerAT, headerBFL, footerBFL, headerBFR, footerBFR, headerCDE, footerCDE, headerCFR, footerCFR, headerCZ, footerCZ, headerDE, footerDE, headerDK, footerDK, headerHU, footerHU, headerIT, footerIT, headerNL, footerNL, headerNO, footerNO, headerPL, footerPL, headerPT, footerPT, headerSE, footerSE, headerSK, footerSK } from "./var.js";

// Retrieve each button used to create forms
const oneProductButton = document.getElementById("oneproduct");
const productButton = document.getElementById("product");
const titleButton = document.getElementById("title");
const bannerButton = document.getElementById("banner");
const ctaButton = document.getElementById("cta");
const contentContainer = document.getElementById("corps");
const submitButton = document.getElementById("submit");

// Initialize counters for each form element type
let productCount = 0;
let titleCount = 0;
let bannerCount = 0;
let ctaCount = 0;
let order = 0; // Used to maintain the creation order for the HTML

// Initialize the array that will store form data
let formEntries = [];

// Create a button to reset all information
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset information';
document.body.appendChild(resetButton);

// Add an event listener for the reset button
resetButton.addEventListener('click', function () {
	localStorage.clear();
	location.reload();
});

// Function to handle form submission
submitButton.addEventListener('click', function (event) {
	event.preventDefault(); // Prevent page reload
	localStorage.setItem('formData', JSON.stringify(formEntries));
});

function createOneProductElement() {
    order++;
    productCount++;
    const currentCounter = productCount;

    const newProductSection = document.createElement('section');
    newProductSection.className = "product-group";
    newProductSection.id = `product-group-${currentCounter}`;

    newProductSection.innerHTML = `
        <form class="form-product">
            <section class="product-line">
                <label for="one_productLink${currentCounter}">Product Link N°${currentCounter}</label>
                <input type="text" id="one_productLink${currentCounter}" name="one_productLink${currentCounter}"><br>

                <label for="one_image${currentCounter}">Image N°${currentCounter}</label>
                <input type="text" id="one_image${currentCounter}" name="one_image${currentCounter}"><br>

                <label for="one_ecolabel${currentCounter}">Eco-Label N°${currentCounter}</label>
                <input type="text" id="one_ecolabel${currentCounter}" name="one_ecolabel${currentCounter}" >
                <button type="button" onclick="window.open('_crit-green-all-pays.html', '_blank')">Eco-Label</button>
                <br>

                <label for="one_title${currentCounter}">Title N°${currentCounter}</label>
                <input type="text" id="one_title${currentCounter}" name="one_title${currentCounter}" maxlength="50"><br>

                <label for="one_text${currentCounter}">Text N°${currentCounter}</label>
                <input type="text" id="one_text${currentCounter}" name="one_text${currentCounter}" maxlength="150"><br>

                <label for="one_label${currentCounter}">Label N°${currentCounter}</label>
                <input type="text" id="one_label${currentCounter}" name="one_label${currentCounter}">
                <button type="button" onclick="window.open('_label-all-pays.html', '_blank')">Label</button>
                <br>

                <label for="one_priceOf${currentCounter}">Price of N°${currentCounter}</label>
                <select id="one_priceOf${currentCounter}" name="one_priceOf${currentCounter}">
                    <option value="">Select</option>
                    <option value="From">Yes</option>
                    <option value="">No</option>
                </select><br>

                <label for="one_price${currentCounter}">Price N°${currentCounter}</label>
                <input type="text" id="one_price${currentCounter}" name="one_price${currentCounter}"><br>

                <label for="one_unit${currentCounter}">Unit N°${currentCounter}</label>
                <input type="text" id="one_unit${currentCounter}" name="one_unit${currentCounter}"><br>
            </section>
        </form>`;

    contentContainer.appendChild(newProductSection);

    const productData = {
        one_productLink: '',
        one_image: '',
        one_ecolabel: '',
        one_title: '',
        one_text: '',
        one_label: '',
        one_priceOf: '',
        one_price: '',
        one_unit: ''
    };

    // Query the elements
    const productLinkInput = newProductSection.querySelector(`#one_productLink${currentCounter}`);
    const imageInput = newProductSection.querySelector(`#one_image${currentCounter}`);
    const ecolabelInput = newProductSection.querySelector(`#one_ecolabel${currentCounter}`);
    const titleInput = newProductSection.querySelector(`#one_title${currentCounter}`);
    const textInput = newProductSection.querySelector(`#one_text${currentCounter}`);
    const labelInput = newProductSection.querySelector(`#one_label${currentCounter}`);
    const priceOfInput = newProductSection.querySelector(`#one_priceOf${currentCounter}`);
    const priceInput = newProductSection.querySelector(`#one_price${currentCounter}`);
    const unitInput = newProductSection.querySelector(`#one_unit${currentCounter}`);

	if (productData.one_ecolabel === '') {
		productData.one_ecolabel = 'https://imgnews.raja-group.com/00-structure/label/ALL-label-blank.png';
	}
	if (productData.one_label === '') {
		productData.one_label = 'https://imgnews.raja-group.com/00-structure/label/ALL-label-blank.png';
	}

    // Add event listeners to update productData
    productLinkInput.addEventListener('input', () => { productData.one_productLink = productLinkInput.value; });
    imageInput.addEventListener('input', () => { productData.one_image = imageInput.value; });
	ecolabelInput.addEventListener('input', () => { productData.one_ecolabel = ecolabelInput.value; });
    titleInput.addEventListener('input', () => { productData.one_title = titleInput.value; });
    textInput.addEventListener('input', () => { productData.one_text = textInput.value; });
    labelInput.addEventListener('input', () => { productData.one_label = labelInput.value; });
    priceOfInput.addEventListener('change', () => { productData.one_priceOf = priceOfInput.value; });
    priceInput.addEventListener('input', () => { productData.one_price = priceInput.value; });
    unitInput.addEventListener('input', () => { productData.one_unit = unitInput.value; });

    formEntries.push({ order: order, type: 'oneProduct', data: productData });
}

// Function to create a product element
function createProductElement() {
	order++;
	productCount += 2; // Increment by 2 since two products are created
	const currentCounter = productCount - 1; // Adjust to get the correct starting number

	const newProductSection = document.createElement('section');
	newProductSection.className = "product-group";
	newProductSection.id = `product-group-${currentCounter}`;

	newProductSection.innerHTML = `
        <form class="form-product">
            <section class="product-line">
                <label for="productLink${currentCounter}">Product Link N°${currentCounter}</label>
                <input type="text" id="productLink${currentCounter}" name="productLink${currentCounter}"><br>

                <label for="image${currentCounter}">Image N°${currentCounter}</label>
                <input type="text" id="image${currentCounter}" name="image${currentCounter}"><br>

                <label for="ecolabel${currentCounter}">Eco-Label N°${currentCounter}</label>
                <input type="text" id="ecolabel${currentCounter}" name="ecolabel${currentCounter}">
                <button type="button" onclick="window.open('_crit-green-all-pays.html', '_blank')">Eco-Label</button>
                <br>

                <label for="title${currentCounter}">Title N°${currentCounter}</label>
                <input type="text" id="title${currentCounter}" name="title${currentCounter}" maxlength="50"><br>

                <label for="text${currentCounter}">Text N°${currentCounter}</label>
                <input type="text" id="text${currentCounter}" name="text${currentCounter}" maxlength="60"><br>

                <label for="label${currentCounter}">Label N°${currentCounter}</label>
                <input type="text" id="label${currentCounter}" name="label${currentCounter}">
                <button type="button" onclick="window.open('_label-all-pays.html', '_blank')">Label</button>
                <br>

                <label for="priceOf${currentCounter}">Price of N°${currentCounter}</label>
                <select id="priceOf${currentCounter}" name="priceOf${currentCounter}">
                    <option value="">Select</option>
                    <option value="From">Yes</option>
                    <option value="">No</option>
                </select><br>

                <label for="price${currentCounter}">Price N°${currentCounter}</label>
                <input type="text" id="price${currentCounter}" name="price${currentCounter}"><br>

                <label for="unit${currentCounter}">Unit N°${currentCounter}</label>
                <input type="text" id="unit${currentCounter}" name="unit${currentCounter}"><br>
            </section>

            <section class="product-line">
                <label for="productLink${currentCounter + 1}">Product Link N°${currentCounter + 1}</label>
                <input type="text" id="productLink${currentCounter + 1}" name="productLink${currentCounter + 1}"><br>

                <label for="image${currentCounter + 1}">Image N°${currentCounter + 1}</label>
                <input type="text" id="image${currentCounter + 1}" name="image${currentCounter + 1}"><br>

                <label for="ecolabel${currentCounter + 1}">Eco-Label N°${currentCounter + 1}</label>
                <input type="text" id="ecolabel${currentCounter + 1}" name="ecolabel${currentCounter + 1}">
                <button type="button" onclick="window.open('_crit-green-all-pays.html', '_blank')">Eco-Label</button>
                <br>

                <label for="title${currentCounter + 1}">Title N°${currentCounter + 1}</label>
                <input type="text" id="title${currentCounter + 1}" name="title${currentCounter + 1}" maxlength="50"><br>

                <label for="text${currentCounter + 1}">Text N°${currentCounter + 1}</label>
                <input type="text" id="text${currentCounter + 1}" name="text${currentCounter + 1}" maxlength="60"><br>

                <label for="label${currentCounter + 1}">Label N°${currentCounter + 1}</label>
                <input type="text" id="label${currentCounter + 1}" name="label${currentCounter + 1}">
                <button type="button" onclick="window.open('_label-all-pays.html', '_blank')">Label</button>
                <br>

                <label for="priceOf${currentCounter + 1}">Price of N°${currentCounter + 1}</label>
                <select id="priceOf${currentCounter + 1}" name="priceOf${currentCounter + 1}">
                    <option value="">Select</option>
                    <option value="From">Yes</option>
                    <option value="">No</option>
                </select><br>

                <label for="price${currentCounter + 1}">Price N°${currentCounter + 1}</label>
                <input type="text" id="price${currentCounter + 1}" name="price${currentCounter + 1}"><br>

                <label for="unit${currentCounter + 1}">Unit N°${currentCounter + 1}</label>
                <input type="text" id="unit${currentCounter + 1}" name="unit${currentCounter + 1}"><br>
            </section>
        </form>`;

	// Append the new section to the container before querying elements
	contentContainer.appendChild(newProductSection);

	// Initialize productData object
	const productData = {
		ecolabel1: 'https://imgnews.raja-group.com/00-structure/label/ALL-label-blank.png',
		label1: 'https://imgnews.raja-group.com/00-structure/label/ALL-label-blank.png',
		ecolabel2: 'https://imgnews.raja-group.com/00-structure/label/ALL-label-blank.png',
		label2: 'https://imgnews.raja-group.com/00-structure/label/ALL-label-blank.png',
		title1: '',
		text1: '',
		priceOf1: '',
		price1: '',
		unit1: '',
		title2: '',
		text2: '',
		priceOf2: '',
		price2: '',
		unit2: '',
		productLink1: '',
		productLink2: '',
		image1: '',
		image2: ''
	};

	// Now query the elements
	const ecolabel1 = newProductSection.querySelector(`#ecolabel${currentCounter}`);
	const title1 = newProductSection.querySelector(`#title${currentCounter}`);
	const text1 = newProductSection.querySelector(`#text${currentCounter}`);
	const label1 = newProductSection.querySelector(`#label${currentCounter}`);
	const priceOf1 = newProductSection.querySelector(`#priceOf${currentCounter}`);
	const price1 = newProductSection.querySelector(`#price${currentCounter}`);
	const unit1 = newProductSection.querySelector(`#unit${currentCounter}`);
	const ecolabel2 = newProductSection.querySelector(`#ecolabel${currentCounter + 1}`);
	const title2 = newProductSection.querySelector(`#title${currentCounter + 1}`);
	const text2 = newProductSection.querySelector(`#text${currentCounter + 1}`);
	const label2 = newProductSection.querySelector(`#label${currentCounter + 1}`);
	const priceOf2 = newProductSection.querySelector(`#priceOf${currentCounter + 1}`);
	const price2 = newProductSection.querySelector(`#price${currentCounter + 1}`);
	const unit2 = newProductSection.querySelector(`#unit${currentCounter + 1}`);
	const pLink1 = newProductSection.querySelector(`#productLink${currentCounter}`);
	const pLink2 = newProductSection.querySelector(`#productLink${currentCounter + 1}`);
	const img1 = newProductSection.querySelector(`#image${currentCounter}`);
	const img2 = newProductSection.querySelector(`#image${currentCounter + 1}`);

	// Ensure elements are not null before adding event listeners
	if (ecolabel1) ecolabel1.addEventListener('change', () => {
		productData.ecolabel1 = ecolabel1.value || 'https://imgnews.raja-group.com/00-structure/label/ALL-label-blank.png';
	});
	if (title1) title1.addEventListener('input', () => { productData.title1 = title1.value; });
	if (text1) text1.addEventListener('input', () => { productData.text1 = text1.value; });
	if (label1) label1.addEventListener('input', () => {
		productData.label1 = label1.value || 'https://imgnews.raja-group.com/00-structure/label/ALL-label-blank.png';
	});

	if (ecolabel2) ecolabel2.addEventListener('change', () => {
		productData.ecolabel2 = ecolabel2.value || 'https://imgnews.raja-group.com/00-structure/label/ALL-label-blank.png';
	});
	if (title2) title2.addEventListener('input', () => { productData.title2 = title2.value; });
	if (text2) text2.addEventListener('input', () => { productData.text2 = text2.value; });
	if (label2) label2.addEventListener('input', () => {
		productData.label2 = label2.value || 'https://imgnews.raja-group.com/00-structure/label/ALL-label-blank.png';
	});

	if (priceOf1) priceOf1.addEventListener('change', () => { productData.priceOf1 = priceOf1.value; });
	if (priceOf2) priceOf2.addEventListener('change', () => { productData.priceOf2 = priceOf2.value; });

	if (price1) price1.addEventListener('input', () => { productData.price1 = price1.value; });
	if (price2) price2.addEventListener('input', () => { productData.price2 = price2.value; });

	if (unit1) unit1.addEventListener('input', () => { productData.unit1 = unit1.value; });
	if (unit2) unit2.addEventListener('input', () => { productData.unit2 = unit2.value; });

	if (pLink1) pLink1.addEventListener('input', () => { productData.productLink1 = pLink1.value; });
	if (pLink2) pLink2.addEventListener('input', () => { productData.productLink2 = pLink2.value; });

	if (img1) img1.addEventListener('input', () => { productData.image1 = img1.value; });
	if (img2) img2.addEventListener('input', () => { productData.image2 = img2.value; });

	// Add the new element to the array
	formEntries.push({ order: order, type: 'product', data: productData });
}

// Function to create a title element
function createTitleElement() {
	order++;
	titleCount++;
	const currentCounter = titleCount;

	const newTitleSection = document.createElement('section');
	newTitleSection.className = "title-group";
	newTitleSection.id = `title-group-${currentCounter}`;
	newTitleSection.innerHTML = `
        <form class="form-title">
            <label for="big-title${currentCounter}">Title N°${currentCounter}</label>
            <input type="text" id="big-title${currentCounter}" name="big-title${currentCounter}"><br>
        </form>`;

	const bigTitleInput = newTitleSection.querySelector(`#big-title${currentCounter}`);

	const titleData = {
		bigTitle: ''
	};

	bigTitleInput.addEventListener('input', () => {
		titleData.bigTitle = bigTitleInput.value;
	});

	formEntries.push({ order: order, type: 'title', data: titleData });
	contentContainer.appendChild(newTitleSection);
}

// Function to create a banner element
function createBannerElement() {
	order++;
	bannerCount++;
	const currentCounter = bannerCount;

	const newBannerSection = document.createElement('section');
	newBannerSection.className = "banner-group";
	newBannerSection.id = `banner-group-${currentCounter}`;
	newBannerSection.innerHTML = `
        <form class="form-banner">
            <label for="banner-image${currentCounter}">Banner Image N°${currentCounter}</label>
            <input type="text" id="banner-image${currentCounter}" name="banner-image${currentCounter}"><br>

            <label for="banner-link${currentCounter}">Banner Link N°${currentCounter}</label>
            <input type="text" id="banner-link${currentCounter}" name="banner-link${currentCounter}"><br>
        </form>`;

	const bannerImageInput = newBannerSection.querySelector(`#banner-image${currentCounter}`);
	const bannerLinkInput = newBannerSection.querySelector(`#banner-link${currentCounter}`);

	const bannerData = {
		bannerImage: '',
		bannerLinkText: ''
	};

	bannerImageInput.addEventListener('input', () => {
		bannerData.bannerImage = bannerImageInput.value;
	});
	bannerLinkInput.addEventListener('input', () => {
		bannerData.bannerLinkText = bannerLinkInput.value;
	});

	formEntries.push({ order: order, type: 'banner', data: bannerData });
	contentContainer.appendChild(newBannerSection);
}

// Function to create a link element
function createCtaElement() {
	order++;
	ctaCount++;
	const currentCounter = ctaCount;

	const newCtaSection = document.createElement('section');
	newCtaSection.className = "cta-group";
	newCtaSection.id = `cta-group-${currentCounter}`;
	newCtaSection.innerHTML = `
        <form class="form-cta">
			<label for="cta-image${currentCounter}">CTA Image N°${currentCounter}</label>
            <input type="text" id="cta-image${currentCounter}" name="cta-image${currentCounter}"><br>

            <label for="cta-link${currentCounter}">CTA Link N°${currentCounter}</label>
            <input type="text" id="cta-link${currentCounter}" name="cta-link${currentCounter}"><br>
        </form>`;

	const ctaLinkInput = newCtaSection.querySelector(`#cta-link${currentCounter}`);
	const ctaImageInput = newCtaSection.querySelector(`#cta-image${currentCounter}`);

	const ctaData = {
		ctaImage: '',
		ctaLinkText: ''
	};

	ctaLinkInput.addEventListener('input', () => {
		ctaData.ctaLinkText = ctaLinkInput.value;
	});
	ctaImageInput.addEventListener('input', () => {
		ctaData.ctaImage = ctaImageInput.value;
	});

	formEntries.push({ order: order, type: 'cta', data: ctaData });
	contentContainer.appendChild(newCtaSection);
}

// Event listener for adding a product
productButton.addEventListener('click', function (event) {
	event.preventDefault();
	createProductElement();
});

oneProductButton.addEventListener('click', function (event) {
	event.preventDefault();
	createOneProductElement();
});

ctaButton.addEventListener('click', function (event) {
	event.preventDefault();
	createCtaElement();
});

// Event listener for adding a large title
titleButton.addEventListener('click', function (event) {
	event.preventDefault();
	createTitleElement();
});

// Event listener for adding a banner
bannerButton.addEventListener('click', function (event) {
	event.preventDefault();
	createBannerElement();
});


document.addEventListener('DOMContentLoaded', () => {
	// Retrieve the language <select> element
	const languageSelect = document.getElementById('language');

	// Add an event listener for changing the selected language
	languageSelect.addEventListener('change', (event) => {
		const selectedLanguage = event.target.value;
		// Store the selected language in localStorage
		localStorage.setItem('langue', selectedLanguage);
	});

	// Retrieve the language from localStorage
	const storedLanguage = localStorage.getItem('langue');

	// Pick the correct header and footer based on the language
	let header, footer;
	switch (storedLanguage) {
		case 'fr':
			header = headerFR;
			footer = footerFR;
			break;
		case 'es':
			header = headerES;
			footer = footerES;
			break;
		case 'uk':
			header = headerUK;
			footer = footerUK;
			break;
		case 'at':
			header = headerAT;
			footer = footerAT;
			break;
		case 'bfl':
			header = headerBFL;
			footer = footerBFL;
			break;
		case 'bfr':
			header = headerBFR;
			footer = footerBFR;
			break;
		case 'cde':
			header = headerCDE;
			footer = footerCDE;
			break;
		case 'cfr':
			header = headerCFR;
			footer = footerCFR;
			break;
		case 'cz':
			header = headerCZ;
			footer = footerCZ;
			break;
		case 'de':
			header = headerDE;
			footer = footerDE;
			break;
		case 'dk':
			header = headerDK;
			footer = footerDK;
			break;
		case 'hu':
			header = headerHU;
			footer = footerHU;
			break;
		case 'it':
			header = headerIT;
			footer = footerIT;
			break;
		case 'nl':
			header = headerNL;
			footer = footerNL;
			break;
		case 'no':
			header = headerNO;
			footer = footerNO;
			break;
		case 'pl':
			header = headerPL;
			footer = footerPL;
			break;
		case 'pt':
			header = headerPT;
			footer = footerPT;
			break;
		case 'se':
			header = headerSE;
			footer = footerSE;
			break;
		case 'sk':
			header = headerSK;
			footer = footerSK;
			break;
		default:
			header = headerUK; // Default value
			footer = footerUK;
	}
});

// Generate the HTML file

// Retrieve the generation button
const generateBtn = document.getElementById('generateHTML');

// Retrieve the input element for the document title
const documentTitleInput = document.getElementById('documentTitle');

// Function to generate the HTML file
function generateHTMLDocument() {
	// Retrieve the document title
	const documentTitle = documentTitleInput.value || 'Newsletter'; // Default value if empty

	// Retrieve form data from localStorage
	const formData = JSON.parse(localStorage.getItem('formData')) || [];
	const storedLanguage = localStorage.getItem('langue');

	if (formData.length === 0) {
		return;
	}

	// Pick the correct header and footer based on the language
	let header, footer;
	switch (storedLanguage) {
		case 'fr':
			header = headerFR;
			footer = footerFR;
			break;
		case 'es':
			header = headerES;
			footer = footerES;
			break;
		case 'uk':
			header = headerUK;
			footer = footerUK;
			break;
		case 'at':
			header = headerAT;
			footer = footerAT;
			break;
		case 'bfl':
			header = headerBFL;
			footer = footerBFL;
			break;
		case 'bfr':
			header = headerBFR;
			footer = footerBFR;
			break;
		case 'cde':
			header = headerCDE;
			footer = footerCDE;
			break;
		case 'cfr':
			header = headerCFR;
			footer = footerCFR;
			break;
		case 'cz':
			header = headerCZ;
			footer = footerCZ;
			break;
		case 'de':
			header = headerDE;
			footer = footerDE;
			break;
		case 'dk':
			header = headerDK;
			footer = footerDK;
			break;
		case 'hu':
			header = headerHU;
			footer = footerHU;
			break;
		case 'it':
			header = headerIT;
			footer = footerIT;
			break;
		case 'nl':
			header = headerNL;
			footer = footerNL;
			break;
		case 'no':
			header = headerNO;
			footer = footerNO;
			break;
		case 'pl':
			header = headerPL;
			footer = footerPL;
			break;
		case 'pt':
			header = headerPT;
			footer = footerPT;
			break;
		case 'se':
			header = headerSE;
			footer = footerSE;
			break;
		case 'sk':
			header = headerSK;
			footer = footerSK;
			break;
		default:
			header = headerUK; // Default value
			footer = footerUK;
	}

	// Start constructing the HTML
	let htmlContent = `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!--[if !mso]><!-->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--<![endif]-->
	<meta name="x-apple-disable-message-reformatting" />

	<title>${documentTitle}</title>

	<style>
		@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&family=Raleway:wght@500;600;900&display=swap');
	</style>
	<!--[if !mso]><!-->
	<style type="text/css">
		@font-face {
			font-family: Open sans, Raleway, Arial;
			src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
			src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;900&display=swap');
			font-weight: normal;
			font-style: normal;
		}
	</style>
	<!--<![endif]-->

	<style type="text/css">
		/* Removes spacing in Outlook - bug between cells */
		table,
		td {
			border-collapse: collapse !important;
			position: relative !important;
			border-spacing: 0 !important;
			mso-table-lspace: 0pt;
			mso-table-rspace: 0pt;
		}

		img {
			-ms-interpolation-mode: bicubic;
			border: 0;
			display: block !important;
		}

		html {
			width: 100%;
			background-color: #EDF1F7;
		}

		body {
			min-width: 100%;
			width: 100% !important;
			color: #393E46 !important;
			background-color: #EDF1F7 !important;
			font-family: Open sans, Arial, sans-serif !important;
			margin: 0;
			padding: 0;
			-webkit-font-smoothing: antialiased;
			-webkit-text-size-adjust: none;
			-ms-text-size-adjust: none;
			-ms-font-family: Open sans, Arial, sans-serif !important;
			font-size: 12px;
		}

		div[style*="margin:16px 0;"] {
			margin: 0 !important;
		}
	</style>
	<!--[if mso]>
<style>
body, table, td, span, a { font-family:Arial,sans-serif!important; text-decoration:none!important; }
table, td { border-collapse:collapse!important; position:relative!important; border-spacing:0!important; mso-table-lspace:0pt; mso-table-rspace:0pt; }
img { -ms-interpolation-mode: bicubic; border:0; display:block!important; }
</style>
<![endif]-->

	<style type="text/css">
		@media only screen and (max-width:600px) {
			.resize {
				width: 100% !important;
				height: auto !important;
			}
			.resize_bolder {
				width: 100% !important;
				font-weight: 700 !important;
			}
			.none {
				display: none !important;
			}
			.view {
				display: block !important;
			}
			.center {
				text-align: center !important;
			}
			.center_table {
				text-align: center !important;
				margin: 0 auto !important;
			}
			.resize_w90 {
				width: 90% !important;
				height: auto !important;
				padding: 0 !important;
			}
			.resize_w96 {
				width: 96% !important;
				height: auto !important;
				padding: 0 !important;
			}
			.resize_w80 {
				width: 80% !important;
				height: auto !important;
				padding: 0 !important;
			}
			.resize_w70 {
				width: 70% !important;
				height: auto !important;
				padding: 0 !important;
			}
			.resize_w60 {
				width: 60% !important;
				height: auto !important;
				padding: 0 !important;
			}
			.resize_w50 {
				width: 50% !important;
				height: auto !important;
				padding: 0 !important;
			}
			.resize_w45 {
				width: 45% !important;
				height: auto !important;
				padding: 0 !important;
			}
			.resize_w40 {
				width: 40% !important;
				height: auto !important;
				padding: 0 !important;
			}
			.resize_w33 {
				width: 33% !important;
				height: auto !important;
				padding: 0 !important;
			}
			.resize_w30 {
				width: 30% !important;
				height: auto !important;
				padding: 0 !important;
			}
			.resize_gif {
				width: 100% !important;
			}
			.gifAnim {
				max-width: 100% !important;
				width: 100% !important;
				height: auto !important;
				margin: 0 !important;
				padding: 0 !important;
			}
			.resize_height {
				height: auto !important;
			}
			.resize_h10 {
				height: 10px !important;
				width: auto !important;
			}
			.resize_h20 {
				height: 20px !important;
				width: auto !important;
			}
			.resize_h30 {
				height: 30px !important;
				width: auto !important;
			}
			.resize_h40 {
				height: 40px !important;
				width: auto !important;
			}
			.resize_h46 {
				height: 46px !important;
				width: auto !important;
			}
			.resize_h50 {
				height: 50px !important;
				width: auto !important;
			}
			.resize_h90 {
				height: 90px !important;
				width: auto !important;
			}
			.resize_sep_noBorder {
				width: 100% !important;
				height: auto !important;
				border: 0 solid #F00000 !important;
			}
			.resize_sep_borderTop {
				width: 100% !important;
				height: auto !important;
				border-top: 2px solid #EDF1F7 !important;
			}
			.resize_sep_borderBot {
				border-bottom: 2px solid #276EF1 !important;
			}
			.resize_sep_borderBotGreen {
				border-bottom: 2px solid #d9e367 !important;
			}
			.resize_text10 {
				font-size: 10px !important;
			}
			.resize_text11 {
				font-size: 11px !important;
			}
			.resize_text12 {
				font-size: 12px !important;
			}
			.resize_text14 {
				font-size: 14px !important;
			}
			.resize_text16 {
				font-size: 16px !important;
			}
			.resize_text18 {
				font-size: 18px !important;
			}
			.resize_text20 {
				font-size: 20px !important;
			}
			.resize_text22 {
				font-size: 22px !important;
			}
			.resize_text24 {
				font-size: 24px !important;
			}
			.resize_text26 {
				font-size: 26px !important;
			}
			.resize_text28 {
				font-size: 28px !important;
			}
			.resize_text30 {
				font-size: 30px !important;
			}
			.resize_text32 {
				font-size: 32px !important;
			}
			.resize_text36 {
				font-size: 36px !important;
			}
			.resize_textCat {
				font-size: 16px !important;
				font-weight: 600 !important;
				color: #393E46 !important;
			}
		}
	</style>

	<style>
		/* Desktop style for 3-2 columns */
		.tablePRD {
			float: left;
			box-sizing: border-box;
		}

		.td_tables_PRD {
			text-align: center;
		}

		.tdSIDE {
			box-sizing: border-box;
		}

		.tdPRD {
			padding: 16px 8px 0px 0px;
			margin: 0px;
		}
	</style>

	<style type="text/css">
		@media only screen and (max-width:600px) {
			/* Mobile style for 3-2 columns */
			.tablePRD {
				width: 50% !important;
				padding: 0px !important;
			}
			.td_tables_PRD {
				width: auto !important;
			}
			.tdLEFT {
				width: 30px !important;
			}
			.tdRIGHT {
				width: 25px !important;
			}
			.prd10 {
				display: inline-block !important;
			}
		}
	</style>
</head>

<body>
    ${header}
`;

	// Sort formData by creation order
	formData
		.sort((a, b) => a.order - b.order)
		.forEach((item) => {
			switch (item.type) {
				// Product block
				case 'oneProduct':
					htmlContent += `
					<!--07 BIG PDT - div-->

<table class="resize" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#FFFFFF;">
	<tr>
		<td dir="ltr" style="text-align:center; vertical-align:top; font-size:0; background-color:#FFFFFF;">
			<!--[if (gte mso 9)|(IE)]>
			<table dir="ltr" width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
				<tr>
					<td width="50%" dir="ltr">
			<![endif]-->
			<div class="resize" dir="ltr" style="width:50%; display:inline-block; vertical-align:top;">
				<table class="resize" align="left" width="300" border="0" cellspacing="0" cellpadding="0" style="text-align: center; background-color:#FFFFFF;">
					<tr><td style="font-size:0; display:block; height:20px;">&nbsp;</td></tr>
					<tr>
						<td>
							<table class="resize" width="298" border="0" align="center" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF;">
								<tr>
									<td style="font-size:0;"><a href="${item.data.one_productLink}" target="_blank"><img class="resize_w90" src="${item.data.one_image}" width="297" height="272" style="display:block; padding:0; margin:0 auto; border:0; width:297px; height:272px;" alt="Boîte ronde en carton RAJA"/></a></td>
								</tr>
							</table>
						</td>
					</tr>
					<tr><td class="none" style="font-size:0; display:block; height:10px;">&nbsp;</td></tr>
				</table>
			</div>
			<!--[if (gte mso 9)|(IE)]>
					</td>
					<td width="50%" dir="ltr">
			<![endif]-->
			<div class="resize" dir="ltr" style="width:50%; display:inline-block; vertical-align:top; text-align: center;">
				<table class="resize" align="right" width="300" border="0" cellspacing="0" cellpadding="0" style="text-align: center; background-color:#FFFFFF;">
					<tr><td class="resize_h20" style="font-size:0; display:block; height:20px;">&nbsp;</td></tr>
					<tr>
						<td>
							<table class="resize_w90" width="268" border="0" align="center" valign="top" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF;">
								<!--CRIT GREEN-->
								<tr>
									<td><a href="${item.data.one_productLink}" target="_blank"><img class="resize_h40" src="${item.data.one_ecolabel}" height="30" width="197" alt="Recyclable" style="display:block; padding:0; margin:0; border:0; height:30px; width:197px;"></a></td>
								</tr>
								<tr><td style="font-size:0; display:block; height:5px;">&nbsp;</td></tr>
								<!--END CRIT GREEN-->
								<tr>
									<td align="left" style="font-weight:800; font-size:16px; color:#393E46;"><a class="resize_text20" href="${item.data.one_productLink}" target="_blank" style="color:#393E46; text-decoration:none;">${item.data.one_title}</a></td>
								</tr>
								<tr><td style="font-size:0; display:block; height:10px;">&nbsp;</td></tr>
								<tr>
									<td align="left" style="font-size:14px; color:#656F84;"><a class="resize_text18" href="${item.data.one_productLink}" target="_blank" style="color:#656F84; text-decoration:none;">${item.data.one_text}</a>
									</td>
								</tr>
								<tr><td style="font-size:0; display:block; height:20px;">&nbsp;</td></tr>
								<!--LABEL-->
								<tr>
									<td align="left" style="font-size:0; display:block;"><a href="${item.data.one_productLink}" target="_blank"><img class="resize" src="${item.data.one_label}" height="26" width="268" alt="OFFRE SPÉCIALE" style="display:block; padding:0; margin:0; border:0; height:26px; width:268px;"></a></td>
								</tr>
								<!--END LABEL-->
								<tr><td style="font-size:0; display:block; height:10px;">&nbsp;</td></tr>
								<tr>
									<td align="left" style="font-size:14px; color:#FE9600;"><a class="resize_text16" href="${item.data.one_productLink}" target="_blank" style="color:#FE9600; text-decoration:none;"> ${item.data.one_priceOf}<br>
										<span class="resize_text30" style="font-size:20px; font-weight:800; color:#FE9600; text-decoration:none;">&nbsp;${item.data.one_price}</span>&nbsp;<br>
										${item.data.one_unit}</a>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr><td class="resize_h30" style="font-size:0; display:block; height:20px;">&nbsp;</td></tr>
				</table>
			</div>
			<!--[if (gte mso 9)|(IE)]>
					</td>
				</tr>
			</table>
			<![endif]-->
		</td>
	</tr>
	<tr><td style="display:block; font-size:0; height:15px;">&nbsp;</td></tr>
	
	<tr><td style="display:block; font-size:0; background-color:#EDF1F7; height:2px;">&nbsp;</td></tr>
	<tr><td style="display:block; font-size:0; height:15px; background-color:#FFFFFF;">&nbsp;</td></tr>
</table>
<!--END 07 BIG PDT - div-->	`
					break;

				case 'product':
					htmlContent += `
                    <!--L1-div-->
				<table class="resize" width="600" border="0" align="center" cellpadding="0" cellspacing="0"
					style="max-width:600px;">
					<tr>
						<td dir="ltr"
							style="text-align:center; vertical-align:top; font-size:0; background-color:#FFFFFF;">
							<!--[if (gte mso 9)|(IE)]>
			<table dir="ltr" width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
				<tr>
					<td width="50%" dir="ltr">
			<![endif]-->
							<div class="resize" dir="ltr" style="width:50%; display:inline-block; vertical-align:top;">
								<table class="center_table" width="100%" border="0" cellpadding="0" cellspacing="0">
									<tr>
										<td align="center">
											<table class="resize_sep_noBorder" align="left" width="300" border="0"
												cellspacing="0" cellpadding="0"
												style="text-align: center; border-right:1px solid #EDF1F7; background-color:#FFFFFF;">
												<tr>
													<td style="font-size:0; display:block; height:10px;">&nbsp;</td>
												</tr>
												<tr>
													<td>
														<table class="resize" width="298" border="0" align="center"
															cellpadding="0" cellspacing="0"
															style="background-color:#FFFFFF;">
															<tr>
																<td style="font-size:0;"><a
																		href="${item.data.productLink1}"
																		target="_blank"><img class="resize"
																			src="${item.data.image1}"
																			width="297" height="222"
																			style="display:block; padding:0; margin:0; border:0; width:297px; height:222px;"
																			alt="Test Phase" /></a>
																</td>
															</tr>
														</table>
														<table class="resize_w90" width="268" border="0" align="center"
															cellpadding="0" cellspacing="0"
															style="background-color:#FFFFFF;">
															<tr>
																<td style="font-size:0; display:block; height:10px;">&nbsp;</td>
															</tr>
															<!--CRIT GREEN : supprimer le 1er TR et transfo du 2eme à 35px si critère opposé et ajout de la classe "none" sur le TR / zone encadrée à supprimer si pas de critère-->
															<tr>
																<td style="font-size:0; display:block;"><a
																		href="${item.data.productLink1}"
																		target="_blank"><img class="resize_h40"
																			src="${item.data.ecolabel1}"
																			height="30" width="197"
																			alt="Test Phase"
																			style="display:block; padding:0; margin:0; border:0; height:30px; width:197px;"
																			id="pdt-badge-1-test"></a>
																</td>
															</tr>
															<tr>
																<td style="font-size:0; display:block; height:5px;">
																	&nbsp;</td>
															</tr>
															<!--END CRIT GREEN-->
															<tr>
																<!--TAILLE DU TD A MODIFIER (de 10px en 10px) POUR ALIGNEMENT DES PRIX !-->
																<td class="resize_height" valign="top"
																	style="height:90px;">
																	<!-- -->
																	<table align="left" border="0" cellpadding="0"
																		cellspacing="0">
																		<tr>
																			<td align="left"
																				style="font-weight:800; font-size:16px; color:#393E46;">
																				<a id="pdt-titre-1-test"
																					class="resize_text20"
																					href="${item.data.productLink1}"
																					target="_blank"
                                                                                        style="font-weight:800; font-size:16px; color:#393E46; text-decoration:none;">${item.data.title1}</a>
																			</td>
																		</tr>
																		<tr>
																			<td
																				style="font-size:0; display:block; height:5px;">
																				&nbsp;</td>
																		</tr>
																		<tr>
																			<td class="none" align="left"
																				style="font-size:14px; color:#656F84;">
																				<a id="pdt-desc-1-test"
																					href="${item.data.productLink1}"
																					target="_blank"
																					style="font-size:14px; color:#656F84; text-decoration:none;">${item.data.text1}</a>
																			</td>
																		</tr>
																	</table>
																</td>
															</tr>
															<tr>
																<td style="font-size:0; display:block; height:10px;">
																	&nbsp;</td>
															</tr>
															<!--LABEL : supprimer le 1er TR et transfo du 2eme à 30px si critère opposé et ajout de la classe "none" sur le TR / zone encadrée à supprimer si pas de label-->
															<tr>
																<td align="left" style="font-size:0; display:block;"><a
																		href="${item.data.productLink1}"
																		target="_blank"><img class="resize"
																			src="${item.data.label1}"
																			height="26" width="268" alt="Test Phase"
																			style="display:block; padding:0; margin:0; border:0; height:26px; width:268px;"></a>
																</td>
															</tr>
															<tr>
																<td style="font-size:0; display:block; height:4px;">
																	&nbsp;</td>
															</tr>
															<!--END LABEL-->
															<tr>
																<td align="left" style="font-size:14px; color:#FE9600;">
																	<a class="resize_text16"
																		href="${item.data.productLink1}"
																		target="_blank"
																		style="font-size:14px; color:#FE9600; text-decoration:none;">
																		${item.data.priceOf1}<br>
																		<span class="resize_text30"
																			style="font-size:20px; font-weight:800; color:#FE9600; text-decoration:none;">${item.data.price1}</span>&nbsp;<br>
																		${item.data.unit1}
																	</a>
																</td>
															</tr>
														</table>
													</td>
												</tr>
												<tr>
													<td class="resize_h30"
														style="font-size:0; display:block; height:10px;">&nbsp;</td>
												</tr>
											</table>
										</td>
									</tr>
								</table>
							</div>
							<!--[if (gte mso 9)|(IE)]>
					</td>
					<td width="50%" dir="ltr">
			<![endif]-->
							<div class="resize" dir="ltr"
								style="width:50%; display:inline-block; vertical-align:top; text-align: center;">
								<table class="resize_w90 resize_sep_borderTop" width="270" border="0" align="center"
									valign="top" cellpadding="0" cellspacing="0">
									<tr>
										<td>
											<table class="resize" width="298" border="0" align="center" cellpadding="0"
												cellspacing="0" style="background-color:#FFFFFF;">
												<tr>
													<td class="resize_h20"
														style="font-size:0; display:block; height:10px;">&nbsp;</td>
												</tr>
												<tr>
													<td style="font-size:0;"><a
															href="${item.data.productLink2}"
															target="_blank"><img class="resize"
																src="${item.data.image2}"
																width="297" height="222"
																style="display:block; padding:0; margin:0; border:0; width:297px; height:222px;"
																alt="Test Phase" /></a>
													</td>
												</tr>
											</table>
											<table class="resize_w90" width="268" border="0" align="center"
												cellpadding="0" cellspacing="0" style="background-color:#FFFFFF;">
												<tr>
													<td style="font-size:0; display:block; height:10px;">&nbsp;</td>
												</tr>
												<!--CRIT GREEN : supprimer le 1er TR et transfo du 2eme à 35px si critère opposé et ajout de la classe "none" sur le TR / zone encadrée à supprimer si pas de critère-->
												<tr>
													<td style="font-size:0; display:block;"><a
															href="${item.data.productLink2}"
															target="_blank"><img class="resize_h40"
																src="${item.data.ecolabel2}"
																height="30" width="197" alt="Test Phase"
																style="display:block; padding:0; margin:0; border:0; height:30px; width:197px;"
																id="pdt-badge-2-test"></a>
													</td>
												</tr>
												<tr>
													<td style="font-size:0; display:block; height:5px;">&nbsp;</td>
												</tr>
												<!--END CRIT GREEN-->
												<tr>
													<!--TAILLE DU TD A MODIFIER (de 10px en 10px) POUR ALIGNEMENT DES PRIX !-->
													<td class="resize_height" valign="top" style="height:90px;">
														<!-- -->
														<table align="left" border="0" cellpadding="0" cellspacing="0">
															<tr>
																<td align="left"
																	style="font-weight:800; font-size:16px; color:#393E46;">
																	<a class="resize_text20"
																		href="${item.data.productLink2}"
																		target="_blank"
																		style="font-weight:800; font-size:16px; color:#393E46; text-decoration:none;"
																		id="pdt-titre-2-test">${item.data.title2}</a>
																</td>
															</tr>
															<tr>
																<td style="font-size:0; display:block; height:5px;">
																	&nbsp;</td>
															</tr>
															<tr>
																<td class="none" align="left"
																	style="font-size:14px; color:#656F84;"><a
																		href="${item.data.productLink2}"
																		target="_blank"
																		style="font-size:14px; color:#656F84; text-decoration:none;"
																		id="pdt-desc-2-test">${item.data.text2}</a>
																</td>
															</tr>
														</table>
													</td>
												</tr>
												<tr>
													<td style="font-size:0; display:block; height:10px;">&nbsp;</td>
												</tr>
												<!--LABEL : supprimer le 1er TR et transfo du 2eme à 30px si critère opposé et ajout de la classe "none" sur le TR / zone encadrée à supprimer si pas de label-->
												<tr>
													<td align="left" style="font-size:0; display:block;"><a
															href="${item.data.productLink2}"
															target="_blank"><img class="resize"
																src="${item.data.label2}"
																height="26" width="268" alt="Test Phase"
																style="display:block; padding:0; margin:0; border:0; height:26px; width:268px;"></a>
													</td>
												</tr>
												<tr>
													<td style="font-size:0; display:block; height:4px;">&nbsp;</td>
												</tr>
												<!--END LABEL-->
												<tr>
													<td align="left" style="font-size:14px; color:#FE9600;">
														<a class="resize_text16"
															href="${item.data.productLink2}"
															target="_blank"
															style="font-size:14px; color:#FE9600; text-decoration:none;">
															${item.data.priceOf2}<br>
															<span class="resize_text30"
																style="font-size:20px; font-weight:800; color:#FE9600; text-decoration:none;">${item.data.price2}</span>&nbsp;<br>
															${item.data.unit2}
														</a>
													</td>
												</tr>
												<tr>
													<td class="view" style="font-size:0; display:none; height:15px;">
														&nbsp;</td>
												</tr>
											</table>
										</td>
									</tr>
								</table>
							</div>
							<!--[if (gte mso 9)|(IE)]>
					</td>
				</tr>
			</table>
			<![endif]-->
						</td>
					</tr>
					<tr>
						<td style="display:block; font-size:0; height:15px; background-color:#FFFFFF;">&nbsp;</td>
					</tr>
					<tr>
						<td style="display:block; font-size:0; height:15px; background-color:#FFFFFF;">&nbsp;</td>
					</tr>
				</table>
				<!--L1-div-->
                    `;
					break;

				case 'title':
					htmlContent += `
				<table class="resize" align="center" width="600" border="0" cellspacing="0" cellpadding="0"
					style="background-color:#FFFFFF;">
					<tr>
						<td style="font-size:0; height:10px;">&nbsp;</td>
					</tr>
					<tr>
						<td align="center" valign="top" style="font-size:24px; font-weight:800; color:#656F84; ">
							<table class="resize_w90" align="center" width="540" border="0" cellspacing="0"
								cellpadding="0">
								<tr>
									<td align="center" style="font-size:22px; font-weight:800; color:#656F84;">
										${item.data.bigTitle}
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td style="display:block; font-size:0; background-color:#EDF1F7; height:2px;">&nbsp;</td>
					</tr>
					<tr>
						<td style="font-size:0; height:20px;">&nbsp;</td>
					</tr>
				</table>
                    `;
					break;

				case 'banner':
					htmlContent += `
				<table class="resize" align="center" width="600" border="0" cellpadding="0" cellspacing="0"
					style="background-color:#FFFFFF;">
					<tr>
						<td class="none" style="font-size:0; display:block; width:600px;">
                            <a href="${item.data.bannerLinkText}"
							    target="_blank" title="Test Phase">
                                <img src="${item.data.bannerImage}"
                                    width="600" height="180"
                                    style="display:block; padding:0; margin:0; border:0; width:600px; height:180px;"
                                    alt="Test Phase" />
                            </a>
                        </td>
					</tr>
					<tr>
						<td class="view" style="display:none; font-size:0;">
                            <a href="${item.data.bannerLinkText}"
							    target="_blank" title="Test Phase">
                                <img class="resize"
								    src="${item.data.bannerImage}"
								    width="600" height="400"
								    style="display:block; padding:0; margin:0; border:0; width:600px; height:400px;"
								    alt="Test Phase" />
                            </a>
                        </td>
					</tr>
				</table>
                    `;
					break;

				case 'cta':
					htmlContent += `
				<table class="resize" align="center" width="600" border="0" cellpadding="0" cellspacing="0"
					style="background-color:#FFFFFF;">
					<tr>
						<td class="none" style="font-size:0; display:block; width:600px;">
                            <a href="${item.data.ctaLinkText}"
							    target="_blank" title="Test Phase">
                                <img src="${item.data.ctaImage}"
								    width="600" height="120"
								    style="display:block; padding:0; margin:0; border:0; width:600px; height:120px;"
								    alt="Test Phase" />
                            </a>
                        </td>
					</tr>
					<tr>
						<td class="view" style="display:none; font-size:0;">
                            <a href="${item.data.ctaLinkText}"
							    target="_blank" title="Test Phase">
                                <img class="resize"
								    src="${item.data.ctaImage}"
								    width="600" height="160"
								    style="display:block; padding:0; margin:0; border:0; width:600px; height:160px;"
								    alt="Test Phase" />
                            </a>
                        </td>
					</tr>
				</table>
				`;
					break;

				default:
					// Unknown type fallback
					htmlContent += `
    <section>
        <p>Unknown type: ${item.type}</p>
    </section>
                    `;
			}
		});

	// Finish the HTML by adding the footer
	htmlContent += `
    ${footer} <!-- Insert footer here -->
    </body>
    </html>`;

	// Create a Blob with the HTML content
	const blob = new Blob([htmlContent], { type: 'text/html' });

	// Create a download link
	const link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = 'newsletter.html';
	link.textContent = 'Download HTML File';

	// Append the link, trigger click, then remove it
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

// Listen for the "Generate" button click
generateBtn.addEventListener('click', generateHTMLDocument);

// If you want to clear localStorage before leaving the page:
window.addEventListener('beforeunload', () => {
	localStorage.removeItem('formData');
});
