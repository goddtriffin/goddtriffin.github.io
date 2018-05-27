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
    setProfilePicture(0);
}, false);

function setProfilePicture(which) {
    const profilePicture = document.getElementById('profilePicture');
    
    profilePicture.onload = centerVertically;
    profilePicture.src = "res/" + pics[which];
}