const pics = [
    "hackathon.jpeg",
    "bowlgamestaircasepose.jpg",
    "bowlgamedragonpose.jpg",
    "cliffsofmohersitting.jpg",
    "cliffsofmohersilhouette.jpg",
    "sousa5kheldup.jpg",
    "sousa5kfinishedpose.jpg",
    "sousa5kfinishedheldup.jpg"
];

let picsNotChosen = [];

document.addEventListener('DOMContentLoaded', function() {
    initPicsNotChosen();
    setProfilePicture();

    setInterval(function() {
        setProfilePicture();
    }, 5000);
}, false);

function initPicsNotChosen() {
    picsNotChosen = [];

    for (let i=0; i<pics.length; i++) {
        picsNotChosen.push(i);
    }
}

function setProfilePicture() {
    const profilePicture = document.getElementById('profilePicture');
    profilePicture.onload = centerVertically;

    const picNotChosen = getRandInt(0, picsNotChosen.length-1);
    profilePicture.src = "res/img/" + pics[picNotChosen];

    picsNotChosen.splice(picNotChosen, 1);
    if (picsNotChosen.length === 0) initPicsNotChosen();
}

function getRandInt (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + 1)) + min;
}