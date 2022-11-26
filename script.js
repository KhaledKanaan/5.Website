// var circl_2 = document.getElementById('circl_2');
var body = document.body;

var nav = document.getElementById('nav');

var abt_nav_el = document.getElementById('abt-nav-el');
var exp_nav_el = document.getElementById('exp-nav-el');
var app_nav_el = document.getElementById('app-nav-el');
var proj_nav_el = document.getElementById('proj-nav-el');
var what_i_lrnd_nav_el = document.getElementById('what-i-lrnd-nav-el');
var cntcts_nav_el = document.getElementById('cntcts-nav-el');

var swch_icon = document.getElementById('swch-icon');

var abt_sec = document.getElementById('abt-sec');
var exps_sec = document.getElementById('exps-sec');
var why_app_sec = document.getElementById('why-app-sec');
var proj_sec = document.getElementById('proj-sec');

var nat = document.getElementById('nat');
var nat_rght = document.getElementById('nat-rght');

var nat_glry = document.getElementById('nat-glry');
var nat_glry_txts = document.getElementById('nat-glry-txts');
var nat_glry_txt_1 = document.getElementById('nat-glry-txt-1');
var nat_glry_txt_2 = document.getElementById('nat-glry-txt-2');
var nat_glry_scntxt = document.getElementById('nat-glry-scntxt');
var nat_imgs = document.getElementById('nat-imgs');

var age_sec = document.getElementById('age-sec');
var my_age_sec = document.getElementById('my-age-sec');
var my_age_pre = document.getElementById('my-age-pre');
var my_age_frst_dig = document.getElementById('my-age-frst-dig');
var my_age_sec_dig = document.getElementById('my-age-sec-dig');
var my_age_sec_dig_1 = document.getElementById('my-age-sec-dig-1');
var my_age_sec_dig_2 = document.getElementById('my-age-sec-dig-2');

var age_qot_sec = document.getElementById('age-qot-sec');
var age_qot = document.getElementById('age-qot');
var age_qot_ownr = document.getElementById('age-qot-ownr');


var exp_1 = document.getElementById('exp-1');
var exp_2 = document.getElementById('exp-2');
var exp_3 = document.getElementById('exp-3');

var exp_inr_1 = document.getElementById('exp-inr-1');
var exp_inr_2 = document.getElementById('exp-inr-2');
var exp_inr_3 = document.getElementById('exp-inr-3');

var exp_mor_desc_1 = document.getElementById('exp-mor-desc-1');
var exp_mor_desc_2 = document.getElementById('exp-mor-desc-2');
var exp_mor_desc_3 = document.getElementById('exp-mor-desc-3');

var exp_mor_btn_1 = document.getElementById('exp-mor-btn-1');
var exp_mor_btn_2 = document.getElementById('exp-mor-btn-2');
var exp_mor_btn_3 = document.getElementById('exp-mor-btn-3');

var exp_mor_btn_logo_1 = document.getElementById('exp-mor-btn-logo-1');
var exp_mor_btn_logo_2 = document.getElementById('exp-mor-btn-logo-2');
var exp_mor_btn_logo_3 = document.getElementById('exp-mor-btn-logo-3');

var exp_mor_btn_txt_1 = document.getElementById('exp-mor-btn-txt-1');
var exp_mor_btn_txt_2 = document.getElementById('exp-mor-btn-txt-2');
var exp_mor_btn_txt_3 = document.getElementById('exp-mor-btn-txt-3');

var exps_tline = document.getElementById('exps-tline');
var t_head = document.getElementById('t-head');
var t_body = document.getElementById('t-body');
var exps_dyn_pst_txt = document.getElementById('exps-dyn-pst-txt');
var line = document.getElementById('line');
var stion_1 = document.getElementById('stion-1');
var stion_2 = document.getElementById('stion-2');
var stion_3 = document.getElementById('stion-3');
var stion_4 = document.getElementById('stion-4');

var why_app_sec = document.getElementById('why-app-sec');
var why_app_reasn_1 = document.getElementById('why-app-reasn-1');
var why_app_reasn_2 = document.getElementById('why-app-reasn-2');
var why_app_reasn_3 = document.getElementById('why-app-reasn-3');

var projs = document.getElementsByClassName('proj');
var projs_sec = document.getElementById('projs-sec');

var skills = document.getElementsByClassName('skill');
var what_i_lrnd_sec = document.getElementById('what-i-lrnd-sec');
var what_i_lrnd_titl = document.getElementById('what-i-lrnd-titl');

var contacts_sec = document.getElementById('contacts-sec');

//game:
var dots = document.getElementsByClassName('dot');
var dots_sec = document.getElementById('dots-sec');
var game_score = document.getElementById('game-score');
var game_start_btn = document.getElementById('game-strt-btn');
var game_stop_btn = document.getElementById('game-stop-btn');
var game_lvl_decrse_btn = document.getElementById('game-lvl-decrse');
var game_lvl_incrse_btn = document.getElementById('game-lvl-incrse');
var game_lvl_txt = document.getElementById('game-lvl-txt');
var game_cntrl = document.getElementById('game-cntrl');

var feature_sec = document.getElementById('feature-sec');
var feature_sec_txt = document.getElementById('feature-sec-txt');
var game_init = document.getElementById('game-init');
var game_hint = document.getElementById('game-hint');
var game_strt_txt = document.getElementById('game-strt-txt');

// this function executes whenever the user scrolls the page to perform some animation when the section is visible to rthe user
window.addEventListener("scroll", (e)=>{
    //if the nationality right section is within the viewing port just above 100%-70%=30% from the bottom of the window
    if(nat_rght.getBoundingClientRect().top<window.innerHeight*0.7){
        nat_rght.classList.add('nat-rght-ad');
    }

    if(nat_glry.getBoundingClientRect().top<window.innerHeight*0.5){ 
        nat_glry_txt_1.classList.add('nat-glry-txt-1-ad');
        nat_glry_txt_2.classList.add('nat-glry-txt-2-ad');
        nat_glry_scntxt.classList.add('nat-glry-scntxt-ad');
        nat_glry_txts.classList.add('nat-glry-txts-ad');
        nat_imgs.classList.add('nat-imgs-ad');
    }

    if(age_sec.getBoundingClientRect().top<window.innerHeight*0.5){ 
        my_age_sec_dig_1.classList.add('my-age-sec-dig-1-ad');
        my_age_sec_dig_2.classList.add('my-age-sec-dig-2-ad');
    }

    if(exps_tline.getBoundingClientRect().top<window.innerHeight*0.5){ 
        t_head.classList.add('t-head-ad');
        t_body.classList.add('t-body-ad');
        exps_dyn_pst_txt.classList.add('exps-dyn-pst-txt-ad');
        line.classList.add('line-ad');
        stion_1.classList.add('stion-1-ad');
        stion_2.classList.add('stion-2-ad');
        stion_3.classList.add('stion-3-ad');
        stion_4.classList.add('stion-4-ad');
    }

    if(why_app_sec.getBoundingClientRect().top<window.innerHeight*0.6){ 
        if(!why_app_reasn_1.classList.contains('why-app-reasn-ad')){
            why_app_reasn_1.classList.toggle('why-app-reasn-1-ad');
        }
        if(!why_app_reasn_2.classList.contains('why-app-reasn-ad')){
            why_app_reasn_2.classList.toggle('why-app-reasn-2-ad');
        }
        if(!why_app_reasn_3.classList.contains('why-app-reasn-ad')){
            why_app_reasn_3.classList.toggle('why-app-reasn-3-ad');
        }
    }

    if(what_i_lrnd_sec.getBoundingClientRect().top<window.innerHeight*0.6){ 
        what_i_lrnd_titl.classList.add('what-i-lrnd-titl-ad')
        for(let i=0; i<skills.length; i++){
            skills[i].classList.add(`skill-ad`);
            
            setTimeout(() => { 
                skills[i].classList.add(`skill-${i+1}-ad`);
            }, 1200);

        }
    }

    if(feature_sec.getBoundingClientRect().top<window.innerHeight*0.6){ 
        game_init.classList.add('game-init-ad');
        game_hint.classList.add('game-hint-ad');
        game_strt_txt.classList.add('game-strt-txt-ad');
    }
});

//event listener to the navigation sandwich button
swch_icon.addEventListener("click", (e)=>{
    nav.classList.toggle('nav-ad');
});

// scroll to the relative section when we click on a nav element
abt_nav_el.addEventListener("click", (e)=>{ 
    window.scrollTo({
        top: abt_sec.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'   
      });
});

exp_nav_el.addEventListener("click", (e)=>{ 
    window.scrollTo({
        top: exps_sec.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'   
      });
});

app_nav_el.addEventListener("click", (e)=>{ 
    window.scrollTo({
        top: why_app_sec.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'   
      });
});

proj_nav_el.addEventListener("click", (e)=>{ 
    window.scrollTo({
        top: proj_sec.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'   
      });
});

what_i_lrnd_nav_el.addEventListener("click", (e)=>{ 
    window.scrollTo({
        top: what_i_lrnd_sec.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'   
      });
});

cntcts_nav_el.addEventListener("click", (e)=>{ 
    window.scrollTo({
        top: contacts_sec.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'   
      });
});

//show more/less about an experience
exp_mor_btn_1.addEventListener('click', (e)=>{
    
    //we toggle the more description (show/remove it) and we toggle the logo and the button text as well
    exp_mor_desc_1.classList.toggle('exp-mor-desc-ad');
    exp_mor_btn_logo_1.classList.toggle('exp-mor-btn-logo-ad');
    toggle_more_less_txt(exp_mor_btn_txt_1);

});

exp_mor_btn_2.addEventListener('click', (e)=>{

    exp_mor_desc_2.classList.toggle('exp-mor-desc-ad');
    exp_mor_btn_logo_2.classList.toggle('exp-mor-btn-logo-ad');
    toggle_more_less_txt(exp_mor_btn_txt_2);
 
});

exp_mor_btn_3.addEventListener('click', (e)=>{

    exp_mor_desc_3.classList.toggle('exp-mor-desc-ad');
    exp_mor_btn_logo_3.classList.toggle('exp-mor-btn-logo-ad');
    toggle_more_less_txt(exp_mor_btn_txt_3);
    
});

function toggle_more_less_txt(text_element) {
    if(text_element.innerHTML==='Read more'){
        text_element.innerHTML = 'Read less';
    }else text_element.innerHTML = 'Read more';
};

why_app_reasn_1.addEventListener('click', (e)=>{
    why_app_reasn_1.classList.toggle('why-app-reasn-ad');
});

why_app_reasn_2.addEventListener('click', (e)=>{
    why_app_reasn_2.classList.toggle('why-app-reasn-ad');
});

why_app_reasn_3.addEventListener('click', (e)=>{
    why_app_reasn_3.classList.toggle('why-app-reasn-ad');
});

// Add listeners for all projects cards open and close buttons
for(let i=0; i<projs.length; i++){
    projs[i].querySelector(".proj-open-desc").addEventListener('click', async (e)=>{
        await closeAllTheProjectCards();
        projs[i].querySelector(".proj-frst-card").classList.add("proj-frst-card-ad");
    });

    projs[i].querySelector(".proj-close-desc").addEventListener('click', (e)=>{
        projs[i].querySelector(".proj-frst-card").classList.remove("proj-frst-card-ad");   
    });
}

async function closeAllTheProjectCards(){
    for(let i=0; i<projs.length; i++){
        projs[i].querySelector(".proj-frst-card").classList.remove("proj-frst-card-ad");
    }
} 



//game (feature):

var counter = 0;
var previousDotIndex = -1; // this variable will be used to ensure that is the user clicks on the red dot many time the counter increase by 1 only
var level = "Easy";
var stop = false;
var timeOutsIndexes = [];

async function addDotsToDotsHtmlElement(numberOfDots){
    if(dots_sec.children.length==1){ // if there is only one dot, this means that this is the first initiation of the game and dots should be added. If not, no need to add new dots
        for(i=0; i<numberOfDots; i++){
            var newDot = dots[0].cloneNode(true);
            newDot.id = i;
            dots_sec.appendChild(newDot);
        }
        //console.log(dots_sec);
    }
}

async function addClickListenersToAllDots(){
    for(i=0; i<dots.length; i++){
        dots[i].addEventListener('click', (e)=>{
            if(e.target.style.background == "red" && previousDotIndex != e.target.id ){ 
                counter++;
                //console.log(e.target.id);
                game_score.innerText = counter;
                previousDotIndex = e.target.id;
            }
        });
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

async function generateDots(numberOfIterations, durationOfShowingTheDot, timeDelayBetweenDotsShows){
    
    // disable the start button to prevent the user from re-initiating the game and generating other dots
    game_start_btn.disabled = true;
    game_lvl_decrse_btn.disabled = true;
    game_lvl_incrse_btn.disabled = true;

    for (let i=0; i<numberOfIterations; i++) {
        task(i);
    }
     //for each cycle of the loop set a time out function that will execute after (timeDelayBetweenDotsShows * i) milliseconds
    function task(i) {
        timeOutsIndexes[i] = setTimeout(function() {
        //choose 3 random dots from within the dots html element
        var dotIndexToShow_1 = getRandomInt(dots.length);
        var dotIndexToShow_2 = getRandomInt(dots.length);
        var dotIndexToShow_3 = getRandomInt(dots.length);

        //make one dots with red color which will be the required dot to press on
        dots[dotIndexToShow_1].style.background = "red";

        //show all three random dots
        dots[dotIndexToShow_1].classList.remove('hidden-dot');
        dots[dotIndexToShow_2].classList.remove('hidden-dot');
        dots[dotIndexToShow_3].classList.remove('hidden-dot');

        //then set a timeout function which will hide the 3 dots and remove the red color from the first dot after some time delay= timeDelayBetweenDotsShows
        setTimeout(() => { 
            dots[dotIndexToShow_1].style.background = "black";
            dots[dotIndexToShow_1].classList.add('hidden-dot');
            dots[dotIndexToShow_2].classList.add('hidden-dot');
            dots[dotIndexToShow_3].classList.add('hidden-dot');

            if(i==numberOfIterations-1) {
                game_start_btn.disabled = false;
                game_lvl_decrse_btn.disabled = false;
                game_lvl_incrse_btn.disabled = false;
            }

        }, durationOfShowingTheDot);
       }, timeDelayBetweenDotsShows * i);
    }
}

async function calculateNumberOfDotsBaseOnScreenSize(){
    //if screen width is less than 750px we will use the full height and width of the screen
    //we have to show the game control section and the dots section (game space) on the screen at the same time
    if(window.innerWidth < 750) {
        var gameSpaceHeight = window.innerHeight - game_cntrl.offsetHeight- 10 - 40; //10px is the margin-top of the game_cntrl, another 40px as spare for more clearance
        var gameSpaceWidth = window.innerWidth;
        numberOfDotsToAdd = (gameSpaceHeight/22) * (gameSpaceWidth/22); // each dot occupies 20px + 1px margin on each side = 22px
    }
    //if screen width is more than 750px we will use the 60% of full height and 60% of full width of the screen
    //we have to show the game control section and the dots section (game space) on the screen at the same time
    else{
        var gameSpaceHeight = window.innerHeight*0.6 - game_cntrl.offsetHeight- 10 - 40; //10px is the margin-top of the game_cntrl, another 40px as spare for more clearance
        var gameSpaceWidth = window.innerWidth * 0.6;
        numberOfDotsToAdd = (gameSpaceHeight/22) * (gameSpaceWidth/22);
    }
    return numberOfDotsToAdd;
}

async function startTheGame(numberOfDotsToAdd = 500, numberOfIterations = 20, durationOfShowingTheDot, timeDelayBetweenDotsShows){
    
    numberOfDotsToAdd = await calculateNumberOfDotsBaseOnScreenSize();
    await initiateTheGame();
    await addDotsToDotsHtmlElement(numberOfDotsToAdd);
    await addClickListenersToAllDots();

    if(level == "Easy") { 
        durationOfShowingTheDot = 1100; 
        timeDelayBetweenDotsShows = 1200;
        await changeTheColorOfDots(['black']); 
        generateDots(numberOfIterations, durationOfShowingTheDot, timeDelayBetweenDotsShows);
    }

    if(level == "Medium") { 
        //make it faster
        durationOfShowingTheDot = 1000; 
        timeDelayBetweenDotsShows = 1050; 
        await changeTheColorOfDots(['black']);
        generateDots(numberOfIterations, durationOfShowingTheDot, timeDelayBetweenDotsShows);
    }

    if(level == "Hard") { 
        //introduce new red-like colors to make confusion
        durationOfShowingTheDot = 1000; 
        timeDelayBetweenDotsShows = 1050; 
        await changeTheColorOfDots(['tomato', 'orangered', 'brown', 'tomato', 'crimson', 'indianred', 'darkred', 'tomato', 'maroon', 'crimson']);
        generateDots(numberOfIterations, durationOfShowingTheDot, timeDelayBetweenDotsShows);
    }
}

async function changeTheColorOfDots(colors){
    for(let i=0; i<dots.length-1; i++){
        var rand = getRandomInt(colors.length);
        //console.log(rand);
        dots[i].style.background = colors[rand];
    }
}

async function initiateTheGame(){
    stop = false;
    level = game_lvl_txt.innerText;
    counter = 0;
    previousDotIndex = -1;
    game_score.innerText = "0"; 
}

game_start_btn.addEventListener('click', (e)=>{
    feature_sec_txt.style.visibility = "hidden";
    startTheGame();
});

game_stop_btn.addEventListener('click', (e)=>{
    stop = true;
    game_start_btn.disabled = false;
    game_lvl_decrse_btn.disabled = false;
    game_lvl_incrse_btn.disabled = false;
    for(i=0; i<timeOutsIndexes.length; i++){
        clearTimeout(timeOutsIndexes[i]);
    }
});

game_lvl_incrse_btn.addEventListener('click', (e)=>{
    switch (game_lvl_txt.innerText) {
        case "Easy":
            game_lvl_txt.innerText = "Medium";
            level = "Medium";
            break;
        case "Medium":
            game_lvl_txt.innerText = "Hard";
            level = "Hard";
            break;
    
        default:
            break;
    }
});

game_lvl_decrse_btn.addEventListener('click', (e)=>{
    switch (game_lvl_txt.innerText) {
        case "Hard":
            game_lvl_txt.innerText = "Medium";
            level = "Medium";
            break;
        case "Medium":
            game_lvl_txt.innerText = "Easy";
            level = "Easy";
            break;
    
        default:
            break;
    }
});



