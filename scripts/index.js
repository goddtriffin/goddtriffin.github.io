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

document.addEventListener('DOMContentLoaded', function() {
    setProfilePicture(getRandInt(0, pics.length-1));
}, false);

function setProfilePicture(which) {
    const profilePicture = document.getElementById('profilePicture');
    
    profilePicture.onload = centerVertically;
    profilePicture.src = "res/img/" + pics[which];
}

function getRandInt (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + 1)) + min;
}