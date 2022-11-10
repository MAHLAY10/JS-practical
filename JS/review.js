// local reviews data
const reviews = [
    {
        id: 1,
        name: "angela gray",
        job: "web developer",
        img:
            "images/avatar-angela-gray.webp",
        text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna.",
    },
    {
        id: 2,
        name: "anna kim",
        job: "web designer",
        img:
            "images/avatar-anna-kim.webp",
        text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna.",
    },
    {
        id: 3,
        name: "jacob thompson",
        job: "inten",
        img:
            "images/avatar-jacob-thompson.webp",
        text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna.",
    },
    {
        id: 4,
        name: "kimberly smith",
        job: "the boss",
        img:
            "images/avatar-kimberly-smith.webp",
        text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna.",
    },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//  set stsrting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',function(){
    showPerson();
});

// show person based on item

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

// show prev person

prevBtn.addEventListener("click", function () {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// show random person
randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.logshowPerson();
    showPerson();
});