const data = {
    "pricing-img":
        "https://media.discordapp.net/attachments/1054611138312151070/1096256566593863731/Group_4.png?width=940&height=671",
    "work": [
        {
            id: "work-1",
            thumbnail: "https://cdn.discordapp.com/attachments/1057924910644736010/1064767514384531506/2023-01-16_20-36-29.mp4",
            name: "Dead Eye Replica",
            date: "January 2023",
            description:
                'This system was a recreation of the Dead Eye system in RDR2',
        },
        {
            id: "work-2",
            thumbnail:
                "https://cdn.discordapp.com/attachments/1054611138312151070/1065188754177929276/2023-01-18_00-33-24.mp4",
            name: "Character Customization",
            date: "November 2022",
            description:
                "This is a simple character customization I made for a commission.",
        },
        {
            id: "work-3",
            thumbnail:
                "https://cdn.discordapp.com/attachments/1054611138312151070/1069008392431075368/RPReplay_Final1674941771.mov",
            name: "Sword Fighting System",
            date: "June 2022",
            description:
                "This is a sword fighting system I created whilst I was bored, I did not have time to finish it.",
        },
        {
            id: "work-4",
            thumbnail:
                "https://cdn.discordapp.com/attachments/1054611138312151070/1069192062152482856/2023-01-29_01-42-32.mp4",
            name: "Basic Building System",
            date: "February 2023",
            description:
                "Here is a simple building system I made with placement, resource collection, and crafting.",
        },
        {
            id: "work-5",
            thumbnail:
                "https://cdn.discordapp.com/attachments/1014713861317861446/1124620205864276048/2023-07-01_01-37-30.mp4",
            name: "Luck Spinner",
            date: "June 2023",
            description:
                "Here is a simple spinner I made for a simulator, every second the green gets bigger and bigger, and if you land in the green you gain a rebirth.",
        },
        {
            id: "work-6",
            thumbnail:
                "https://cdn.discordapp.com/attachments/1014713861317861446/1124620518612533329/2023-07-01_01-38-51.mp4",
            name: "Vehicle Setup",
            date: "June 2023",
            description:
                "Here is a vehicle that I set up for someone using A-Chassis",
        },
        {
            id: "work-7",
            thumbnail:
                "https://cdn.discordapp.com/attachments/1014713861317861446/1124621345603465216/2023-07-01_01-42-14_Trim.mp4",
            name: "Zombie Grab",
            date: "June 2023",
            description:
                "Here is an NPC grab system similar to the grabbing in the game Vampire Hunters. To fight the grip you continuously left-click",
        },
        {
            id: "work-8",
            thumbnail:
                "https://cdn.discordapp.com/attachments/1014713861317861446/1124625389180948490/2023-07-01_01-54-53.mp4",
            name: "Drill Rifle",
            date: "April 2023",
            description:
                "Here is a very simplistic drill rifle made for a roleplay group. This rifle features different states, stabbing, and shooting. The gun was made to be inaccurate.",
        },
        {
            id: "work-9",
            thumbnail:
                "https://cdn.discordapp.com/attachments/1115165918243332106/1131473344605208596/skyrim_spell_compressed.mp4",
            name: "Skyrim Shouts System",
            date: "July 2023",
            description:
                "Here is a recreation of the shouts you can find in the game Skyrim. These feature certain abilities where you can unlock words and charge by holding Q, and depending on what word you charge up to you get a different effect.",
        },
    ],
};


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

//0: about, 
// 1: pastwork, 
// 2: pricing, 
// 3: availability, 
// 4: get in touch

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

	if (window.scrollY >= getSection.offsetTop - 160) {
		btns[6].classList.add("blue-highlight");
		btns[5].classList.remove("blue-highlight");
	}

	if (window.scrollY > headerSticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

//0: about, 
// 1: pastwork, 
// 2: pricing, 
// 3: availability, 
// 4: terms, 
// 5: notable, 
// 6: get in touch

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

	if (window.scrollY >= getSection.offsetTop - 100) {
		btnsM[6].classList.add("blue-highlight");
		btnsM[5].classList.remove("blue-highlight");
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
