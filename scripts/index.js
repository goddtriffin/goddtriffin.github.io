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

const picShowOrder = getPicShowOrder();
let pic = 0;

document.addEventListener('DOMContentLoaded', function() {
    setProfilePicture();

    setInterval(function() {
        setProfilePicture();
    }, 5000);
}, false);

function getPicShowOrder() {
    let inOrder = [];
    for (let i=0; i<pics.length; i++) {
        inOrder.push(i);
    }

    let realOrder = [];
    while (inOrder.length > 0) {
        const randPic = getRandInt(0, inOrder.length-1);
        realOrder.push(inOrder[randPic]);
        inOrder.splice(randPic, 1);
    }

    return realOrder;
}

function setProfilePicture() {
    const profilePicture = document.getElementById('profilePicture');
    profilePicture.onload = centerVertically;

    profilePicture.src = "res/img/" + pics[picShowOrder[pic++]];

    if (pic > picShowOrder.length - 1) pic = 0;
}

function getRandInt (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + 1)) + min;
}