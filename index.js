const data = {
	"pricing-img":
		"https://media.discordapp.net/attachments/1057924910644736010/1061458215302336552/pricing_sheet.png?width=940&height=671",
	"work": [
		{
			id: "work-1",
			thumbnail: "https://cdn.discordapp.com/attachments/1057924910644736010/1064767514384531506/2023-01-16_20-36-29.mp4",
			name: "Dead Eye Replica",
			date: "January 2023",
			description:
				"This system is heavily based off of the Dead Eye system found in Red Dead Redemption II. The system, when caps lock or middle mouse is clicked, slows down time and allows you to \"paint\" enemies with X's. If you left click or run out of marks (ammo capacity), it will begin to fire your weapon at said marks. ",
		},
		{
			id: "work-2",
			thumbnail:
				"https://cdn.discordapp.com/attachments/1054611138312151070/1065188754177929276/2023-01-18_00-33-24.mp4",
			name: "Character Customization",
			date: "Novemeber 2022",
			description:
				"This character customization system is simple yet effective. The system allows you to build a custom character to be used ingame with an easy to use user interface, and supports saving/loading characters, as well as editing the loaded character.",
		},
		{
			id: "work-3",
			thumbnail:
				"https://www.youtube.com/watch?v=mtr4eHSEYyo&ab_channel=Memezy",
			name: "Sword Fighting System",
			date: "June 2022",
			description:
				"This is a sword system I created a few months back. The system is pretty simple, yet effective. I wanted to complete it, however I got busy with other commissions and forgot about it. The system allows you to attack with a katana that you can either equip and unequip, along with camera bobbing and a running system.",
		},
	],
};

document.getElementById("pricing-img").src = data["pricing-img"];

data.work.forEach((work) => {
	const workSelector = document.getElementById(work.id);
	const workImage = workSelector.getElementsByClassName("work--image")[0].getElementsByTagName("video")[0];
	const workHeader = workSelector.getElementsByClassName("work--heading")[0];

	workHeader.getElementsByTagName("h1")[0].innerText = work.name;
	workHeader.getElementsByTagName("span")[0].innerText = work.date;
	workSelector.getElementsByTagName("p")[0].innerText = work.description;

	workImage.src = work.thumbnail;
});

const header = document.getElementsByClassName("heading-section")[0];
const pastWorkSection = document.getElementsByClassName("past-work-section")[0];
const availabilitySection = document.getElementsByClassName("availability-section")[0];
const pricingSection = document.getElementsByClassName("pricing-section")[0];
const termsSection = document.getElementsByClassName("terms-section")[0];
const getSection = document.getElementsByClassName("get-section")[0];

const btns = document.getElementsByClassName("pc-btn-head");
const btnsM = document.getElementsByClassName("m-btn-head");

const headerSticky = header.offsetTop;

window.onload = function () {
	window.onscroll = function () {
		show();
		showM();
	};
};

function show() {
	if (window.scrollY < pastWorkSection.offsetTop - 100) {
		btns[0].classList.add("blue-highlight");
		btns[1].classList.remove("blue-highlight");
	}

	if (window.scrollY >= pastWorkSection.offsetTop - 100) {
		btns[1].classList.add("blue-highlight");
		btns[0].classList.remove("blue-highlight");
		btns[2].classList.remove("blue-highlight");
	}

	if (window.scrollY >= availabilitySection.offsetTop - 100) {
		btns[2].classList.add("blue-highlight");
		btns[1].classList.remove("blue-highlight");
		btns[3].classList.remove("blue-highlight");
	}

	if (window.scrollY >= pricingSection.offsetTop - 160) {
		btns[3].classList.add("blue-highlight");
		btns[2].classList.remove("blue-highlight");
		btns[4].classList.remove("blue-highlight");
		console.log("e");
	}

	if (window.scrollY >= termsSection.offsetTop - 160) {
		btns[4].classList.add("blue-highlight");
		btns[3].classList.remove("blue-highlight");
		btns[5].classList.remove("blue-highlight");
	}

	if (window.scrollY >= getSection.offsetTop - 160) {
		btns[5].classList.add("blue-highlight");
		btns[4].classList.remove("blue-highlight");
	}

	if (window.scrollY > headerSticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

function showM() {
	if (window.scrollY < pastWorkSection.offsetTop - 100) {
		btnsM[0].classList.add("blue-highlight");
		btnsM[1].classList.remove("blue-highlight");
	}

	if (window.scrollY >= pastWorkSection.offsetTop - 100) {
		btnsM[1].classList.add("blue-highlight");
		btnsM[0].classList.remove("blue-highlight");
		btnsM[2].classList.remove("blue-highlight");
	}

	if (window.scrollY >= availabilitySection.offsetTop - 100) {
		btnsM[2].classList.add("blue-highlight");
		btnsM[1].classList.remove("blue-highlight");
		btnsM[3].classList.remove("blue-highlight");
	}

	if (window.scrollY >= pricingSection.offsetTop - 100) {
		btnsM[3].classList.add("blue-highlight");
		btnsM[2].classList.remove("blue-highlight");
		btnsM[4].classList.remove("blue-highlight");
	}

	if (window.scrollY >= termsSection.offsetTop - 100) {
		btnsM[4].classList.add("blue-highlight");
		btnsM[3].classList.remove("blue-highlight");
		btnsM[5].classList.remove("blue-highlight");
	}

	if (window.scrollY >= getSection.offsetTop - 100) {
		btnsM[5].classList.add("blue-highlight");
		btnsM[4].classList.remove("blue-highlight");
	}

	if (window.scrollY > headerSticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

function scrollToSection(section, btn, isMobileMenu) {
	const sectionToScroll = document.getElementsByClassName(section)[0];
	const sectionY = sectionToScroll.getBoundingClientRect().top + window.pageYOffset + -150;

	window.scrollTo({ top: sectionY, behavior: "smooth" });
	setTimeout(() => {
		btn.classList.add("blue-highlight");
		for (const btnT of btns) {
			if (btnT == btn) continue;
			btnT.classList.remove("blue-highlight");
		}

		for (const btnM of btnsM) {
			if (btnM == btn) continue;
			btnM.classList.remove("blue-highlight");
		}
	}, 500);
	if (isMobileMenu) toggleMenu();
}

function toggleMenu() {
	const menu = document.getElementsByClassName("menu")[0];
	const isOpen = menu.style.display === "inherit";

	const menuBG = document.getElementById("menu-bg");
	if (!isOpen) {
		menu.classList.add("show-blur-transition");
		menuBG.classList.add("show-menu-transition");
		menu.style.display = isOpen ? "none" : "inherit";

		setTimeout(() => {
			menu.classList.remove("show-blur-transition");
			menuBG.classList.remove("show-menu-transition");
		}, 600);
	} else {
		menu.classList.add("close-blur-transition");
		menuBG.classList.add("close-menu-transition");

		setTimeout(() => {
			menu.classList.remove("close-blur-transition");
			menuBG.classList.remove("close-menu-transition");
			menu.style.display = "none";
		}, 220);
	}
}
