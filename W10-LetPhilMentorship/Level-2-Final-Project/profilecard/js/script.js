const authButton = document.getElementById("auth-button");
const adminView = document.getElementById("admin-view");

document.getElementById("site-title-button").addEventListener("click", () => {
    authButton.classList.toggle("hidden");
});

authButton.addEventListener("click", () => {
    adminView.classList.toggle("hidden");
});

//-----------------------------------------------------------------

const aboutMeInput = document.getElementById("about-me-input");
const aboutMeCounter = document.getElementById("about-me-counter");

aboutMeInput.addEventListener("input", () => {
    updateAboutMeCounter();
});

function updateAboutMeCounter () {
    const charCounter =aboutMeInput.value.length;
    aboutMeCounter.textContent = `${charCounter}/${aboutMeInput.maxLength}`;
}

//-----------------------------------------------------------------

const profileForm = document.getElementById("profile-form");
const userName = document.getElementById("user-name");
const position = document.getElementById("position");
const aboutMe = document.getElementById("about-me");
const displayNameInput = document.getElementById("display-name-input");
const positionNameInput = document.getElementById("position-name-input");

profileForm.addEventListener("submit", event => {
    event.preventDefault();

    userName.textContent = displayNameInput.value;
    localStorage.setItem('userName', displayNameInput.value);

    position.textContent = positionNameInput.value;
    localStorage.setItem('position', positionNameInput.value);
    
    if (positionNameInput.value === "") {
        position.classList.add("hidden");
    } else {
        position.classList.remove("hidden");
    }

    aboutMe.textContent = aboutMeInput.value;
    localStorage.setItem('aboutMe', aboutMeInput.value);

    if (aboutMeInput.value === "") {
        aboutMe.classList.add("hidden");
    } else {
        aboutMe.classList.remove("hidden");
    }

    profilePicture.src = profilePicturePreview.src;
    localStorage.setItem("profilePicture", profilePicturePreview.src);
});

const savedUserName = localStorage.getItem('userName');

if (savedUserName) {
    userName.textContent = savedUserName;
    displayNameInput.value = savedUserName;
}

const savedPosition = localStorage.getItem('position');

if (savedPosition) {
    position.textContent = savedPosition;
    position.classList.remove("hidden");
    positionNameInput.value = savedPosition;
}

const savedAboutMe = localStorage.getItem('aboutMe');

if (savedAboutMe) {
    aboutMe.textContent = savedAboutMe;
    aboutMe.classList.remove("hidden");
    aboutMeInput.value = savedAboutMe;
    updateAboutMeCounter();
}

const profilePictureInput = document.getElementById("profile-picture-input");
const profilePicturePreview = document.getElementById("profile-picture-preview");
const profilePicture = document.getElementById("profile-picture");

profilePictureInput.addEventListener("change", event => {
    const selectedFile = event.target.files[0];

    if (!selectedFile){
        return;
    }

    const reader = new FileReader();

    reader.addEventListener("load", (loadEvent) => {
        profilePicturePreview.src = loadEvent.target.result;
    });

    reader.readAsDataURL(selectedFile);
})

const savedProfilePicture = localStorage.getItem("profilePicture");

if (savedProfilePicture) {
    profilePicture.src = savedProfilePicture;
    profilePicturePreview.src = savedProfilePicture;
} else {
    profilePicture.src = "assets/user-profile.svg";
    profilePicturePreview.src = "assets/user-profile.svg";
}

const platforms = [
    {
        id: "github",
        name: "GitHub",
        icon:"assets/github.svg",
    },
    {
        id: "facebook",
        name: "Facebook",
        icon:"assets/facebook.svg",
    },
    {
        id: "calendar",
        name: "Book appointment",
        icon:"assets/calendar.svg",
    },
    {
        id: "email",
        name: "Email address",
        icon:"assets/email.svg",
    },
    {
        id: "cv",
        name: "Curriculum Vitae",
        icon:"assets/cv.svg",
    },
    {
        id: "instagram",
        name: "Instagram",
        icon:"assets/instagram.svg",
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        icon:"assets/linkedin.svg",
    },
    {
        id: "website",
        name: "Website",
        icon:"assets/website.svg",
    }
];

const platformSelect = document.getElementById("platform-select");

platforms.forEach((platform) => {
    const platformOption = document.createElement("option");

    platformOption.value = platform.id;
    platformOption.textContent = platform.name;

    platformSelect.append(platformOption);
});

const cardForm = document.getElementById("card-form");
const platformUrlInput = document.getElementById("platform-url-input");
const linkCardList = document.getElementById("link-card-list");
const linkCards = [];

cardForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedStatus = document.querySelector(
        'input[name="platform-status"]:checked'
    );

    const newCard = {
        platformId: platformSelect.value,
        url: platformUrlInput.value,
        status: selectedStatus.value
    };

    const existingCard = linkCards.find((card) => {
        return card.platformId === newCard.platformId;
    });

    if (existingCard) {
        existingCard.url = newCard.url;
        existingCard.status = newCard.status;
    } else {
        linkCards.push(newCard);
    }

    renderLinkCards();
});

function renderLinkCards() {
    linkCardList.replaceChildren();

    linkCards.forEach((card) => {
        if (card.status !== "active") {
            return;
        }

        const selectedPlatform = platforms.find((platform) => {
            return platform.id === card.platformId;
        });

        const newCardElement = document.createElement("li");
        newCardElement.classList.add("link-card");

        const linkCardButton = document.createElement("button");
        linkCardButton.classList.add("link-card-button");
        linkCardButton.type = "button";
        linkCardButton.ariaLabel =
            `Show QR code for ${selectedPlatform.name}`;

        const cardImg = document.createElement("img");
        cardImg.src = selectedPlatform.icon;
        cardImg.alt = "";

        linkCardButton.addEventListener("click", () => {
        showQrCode(card.url);
        });

        linkCardButton.append(cardImg);
        newCardElement.append(linkCardButton);
        linkCardList.append(newCardElement);
    });
}


const qrOverlay = document.getElementById("qr-overlay");
const qrCode = document.getElementById("qr-code");
const qrStatus = document.getElementById("qr-status");
let qrObjectUrl = null;


async function showQrCode(cardUrl) {
    qrOverlay.classList.remove("hidden");
    qrOverlay.setAttribute("aria-busy", "true");
    qrStatus.textContent = "Generating QR code…";
    qrCode.classList.add("hidden");
    qrOverlay.focus();

    try {
        const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(cardUrl)}&size=300x300`);

        if (!response.ok) {
            throw new Error(`QR request failed with status ${response.status}`);
        }

        const qrBlob = await response.blob();

        if (qrObjectUrl) {
            URL.revokeObjectURL(qrObjectUrl);
        }

        qrObjectUrl = URL.createObjectURL(qrBlob);
        qrCode.src = qrObjectUrl;
        qrCode.alt = `QR code for ${cardUrl}`;
        qrCode.classList.remove("hidden");
        qrStatus.textContent = "Tap anywhere to close";
    } catch (error) {
        qrStatus.textContent = "The QR code could not be generated. Please try again.";
        console.error(error);
    } finally {
        qrOverlay.setAttribute("aria-busy", "false");
    }
}

function closeQrOverlay() {
    qrOverlay.classList.add("hidden");
    qrCode.classList.add("hidden");
    qrCode.removeAttribute("src");
    qrCode.alt = "";
    qrStatus.textContent = "";

    if (qrObjectUrl) {
        URL.revokeObjectURL(qrObjectUrl);
        qrObjectUrl = null;
    }
}

qrOverlay.addEventListener("click", closeQrOverlay);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !qrOverlay.classList.contains("hidden")) {
        closeQrOverlay();
    }
});


