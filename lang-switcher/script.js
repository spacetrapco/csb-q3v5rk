// Map to store the country code and language name
const languageMap = {
	id: "Indonesia",
	en: "English",
	my: "Melayu",
	af: "Afrikaans",
	sq: "Albanian",
	am: "Amharic",
	ar: "Arabic",
	hy: "Armenian",
	az: "Azerbaijani",
	eu: "Basque",
	be: "Belarusian",
	bn: "Bengali",
	bs: "Bosnian",
	bg: "Bulgarian",
	ca: "Catalan",
	ceb: "Cebuano",
	ny: "Chichewa",
	zh: "Chinese (Simplified)",
	co: "Corsican",
	hr: "Croatian",
	cs: "Czech",
	da: "Danish",
	nl: "Dutch",
	eo: "Esperanto",
	et: "Estonian",
	tl: "Filipino",
	fi: "Finnish",
	fr: "French",
	fy: "Frisian",
	gl: "Galician",
	ka: "Georgian",
	de: "German",
	el: "Greek",
	gu: "Gujarati",
	ht: "Haitian Creole",
	ha: "Hausa",
	haw: "Hawaiian",
	he: "Hebrew",
	iw: "Hebrew",
	hi: "Hindi",
	hmn: "Hmong",
	hu: "Hungarian",
	is: "Icelandic",
	ig: "Igbo",
	ga: "Irish",
	it: "Italian",
	ja: "Japanese",
	jw: "Javanese",
	kn: "Kannada",
	kk: "Kazakh",
	km: "Khmer",
	rw: "Kinyarwanda",
	ko: "Korean",
	ku: "Kurdish",
	ky: "Kyrgyz",
	lo: "Lao",
	la: "Latin",
	lv: "Latvian",
	lt: "Lithuanian",
	lb: "Luxembourgish",
	mk: "Macedonian",
	mg: "Malagasy",
	ms: "Malay",
	ml: "Malayalam",
	mt: "Maltese",
	mi: "Maori",
	mr: "Marathi",
	mn: "Mongolian",
	ne: "Nepali",
	no: "Norwegian",
	or: "Oriya",
	ps: "Pashto",
	fa: "Persian",
	pl: "Polish",
	pt: "Portuguese",
	pa: "Punjabi",
	ro: "Romanian",
	ru: "Russian",
	sm: "Samoan",
	gd: "Scots Gaelic",
	sr: "Serbian",
	st: "Sesotho",
	sn: "Shona",
	sd: "Sindhi",
	si: "Sinhala",
	sk: "Slovak",
	sl: "Slovenian",
	so: "Somali",
	es: "Spanish",
	su: "Sundanese",
	sw: "Swahili",
	sv: "Swedish",
	tg: "Tajik",
	ta: "Tamil",
	tt: "Tatar",
	te: "Telugu",
	th: "Thai",
	tr: "Turkish",
	tk: "Turkmen",
	uk: "Ukrainian",
	ur: "Urdu",
	ug: "Uyghur",
	uz: "Uzbek",
	vi: "Vietnamese",
	cy: "Welsh",
	xh: "Xhosa",
	yi: "Yiddish",
	yo: "Yoruba",
	zu: "Zulu"
};

const flagMap = {
	id: "🇮🇩",
	en: "🇬🇧",
	my: "🇲🇾",
	af: "🇿🇦",
	sq: "🇦🇱",
	am: "🇪🇹",
	ar: "🇸🇦",
	hy: "🇦🇲",
	az: "🇦🇿",
	eu: "🇪🇺",
	be: "🇧🇾",
	bn: "🇧🇩",
	bs: "🇧🇦",
	bg: "🇧🇬",
	ca: "🇪🇸",
	ceb: "",
	ny: "🇲🇼",
	zh: "🇨🇳",
	co: "🇫🇷",
	hr: "🇭🇷",
	cs: "🇨🇿",
	da: "🇩🇰",
	nl: "🇳🇱",
	eo: "",
	et: "🇪🇪",
	tl: "🇵🇭",
	fi: "🇫🇮",
	fr: "🇫🇷",
	fy: "🇳🇱",
	gl: "🇪🇸",
	ka: "🇬🇪",
	de: "🇩🇪",
	el: "🇬🇷",
	gu: "🇮🇳",
	ht: "",
	ha: "🇳🇬",
	haw: "",
	he: "🇮🇱",
	iw: "🇮🇱",
	hi: "🇮🇳",
	hmn: "",
	hu: "🇭🇺",
	is: "🇮🇸",
	ig: "🇳🇬",
	ga: "🇮🇪",
	it: "🇮🇹",
	ja: "🇯🇵",
	jw: "",
	kn: "🇮🇳",
	kk: "🇰🇿",
	km: "🇰🇭",
	rw: "🇷🇼",
	ko: "🇰🇷",
	ku: "🇮🇶",
	ky: "🇰🇬",
	lo: "🇱🇦",
	la: "",
	lv: "🇱🇻",
	lt: "🇱🇹",
	lb: "🇱🇺",
	mk: "🇲🇰",
	mg: "🇲🇬",
	ms: "🇲🇾",
	ml: "🇮🇳",
	mt: "🇲🇹",
	mi: "🇳🇿",
	mr: "🇮🇳",
	mn: "🇲🇳",
	ne: "🇳🇵",
	no: "🇳🇴",
	or: "🇮🇳",
	ps: "🇦🇫",
	fa: "🇮🇷",
	pl: "🇵🇱",
	pt: "🇵🇹",
	pa: "🇮🇳",
	ro: "🇷🇴",
	ru: "🇷🇺",
	sm: "",
	gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
	sr: "🇷🇸",
	st: "🇱🇸",
	sn: "🇿🇼",
	sd: "🇵🇰",
	si: "🇱🇰",
	sk: "🇸🇰",
	sl: "🇸🇮",
	so: "🇸🇴",
	es: "🇪🇸",
	su: "",
	sw: "🇹🇿",
	sv: "🇸🇪",
	tg: "🇹🇯",
	ta: "🇮🇳",
	tt: "🇹🇲",
	te: "🇮🇳",
	th: "🇹🇭",
	tr: "🇹🇷",
	tk: "🇹🇲",
	uk: "🇺🇦",
	ur: "🇵🇰",
	ug: "🇨🇳",
	uz: "🇺🇿",
	vi: "🇻🇳",
	cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
	xh: "",
	yi: "",
	yo: "🇳🇬",
	zu: "🇿🇦"
};

function injectStyles(css) {
	const style = document.createElement("style");
	style.type = "text/css";
	style.appendChild(document.createTextNode(css));
	document.head.appendChild(style);
}

const css = `
select {
	-webkit-appearance: none;
	-moz-appearance: none;
	backdrop-filter: blur(5px);
  border: 0;
  outline: 0;
  font: inherit;
  width: auto;
  height: 3em;
  padding: 0 4em 0 1em;
  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9a/Caret_down_font_awesome.svg) no-repeat right 0.8em center / 1.4em,
    linear-gradient(to left, rgba(255, 255, 255, 0.3) 3em, rgba(255, 255, 255, 0.2) 3em);
  
  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
select option {
  color: inherit;
  background-color: #320a28;
}
select:focus {
  outline: none;
}
select::-ms-expand {
  display: none;
}

`;

// Create and populate the language switcher
function createLanguageSwitcher(langSelect) {
	const selectedLanguages = langSelect.split(",").map((lang) => lang.trim());

	// Create the container element
	const container = document.createElement("div");
	container.id = "language-switcher";
	container.style.display = "inline-flex";
	container.style.paddingLeft = "0.5rem";
	container.style.paddingRight = "0.5rem";
	container.style.paddingTop = "0.35rem";
	container.style.paddingBottom = "0.35rem";
	container.style.borderRadius = "0.1rem";

	// Create the select element
	const select = document.createElement("select");
	select.id = "lang-select";
	select.addEventListener("change", toggleLanguage);

	// Create and append option elements
	selectedLanguages.forEach((lang) => {
		const option = document.createElement("option");
		option.value = lang;
		option.textContent = `${flagMap[lang]} ${languageMap[lang]}`; // Add the flag before the language name
		select.appendChild(option);
	});

	// Append label and select to the container
	container.appendChild(select);

	return container;
}

function getURLParameter(name) {
	const regex = new RegExp("[?&]" + name + "=([^&]*)");
	const match = regex.exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}

function setSelectedOption() {
	const langParam = getURLParameter("lang");
	const langSelect = document.getElementById("lang-select");

	if (langParam && langSelect) {
		langSelect.value = langParam;
		toggleLanguage();
	}
}

document.addEventListener("DOMContentLoaded", () => {
	injectStyles(css);

	const targetElement = document.querySelector("[switcher]");

	if (targetElement) {
		const langSelect = targetElement.getAttribute("switcher");
		const languageSwitcher = createLanguageSwitcher(langSelect);
		targetElement.appendChild(languageSwitcher);
	}

	const allElements = document.querySelectorAll("*");

	const langElements = Array.from(allElements).filter((element) => {
		return Array.from(element.attributes).some((attr) =>
			attr.name.startsWith("lang-")
		);
	});

	langElements.forEach((element) => {
		const text = element.textContent.trim();

		element.setAttribute("main-lang", text);
	});

	setSelectedOption();
});

function toggleLanguage() {
	var languageSelect = document.getElementById("lang-select");
	var selectedLanguage = languageSelect.value;

	var elements = document.querySelectorAll("[main-lang]");

	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];

		// Add this condition to prevent modifying the select element
		if (element.tagName.toLowerCase() === "select") {
			continue;
		}

		var originalText = element.getAttribute("main-lang");
		var translatedText = element.getAttribute("lang-" + selectedLanguage);

		if (translatedText && translatedText !== originalText) {
			element.innerText = translatedText;
		} else {
			element.innerText = originalText;
		}
	}
}
