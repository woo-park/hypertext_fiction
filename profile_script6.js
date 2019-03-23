

let main = document.querySelector('#main');
let note = document.querySelector('#textarea');
let des_note = document.querySelector('#description');
let status;
let state;
let selectedname;
let selectedname_des;
let pick;

let storyOne;
let storyTwo;
//
let collect = document.getElementById('collectbtn');
let story_box = document.getElementById('story_box');
let boxes = document.getElementsByClassName('box');
//
let ticking;
let waited = false;
let timer = document.querySelector('#timer');

// sides = collected nights
let counter = 0;
let sides = document.getElementById('side');






// fetch('/storyplot.js')
//   .then(response => response.json())
//   .then(json => console.log(json));


function setState(newState) {

  // main.textContent = "";
  // for(let user of Object.keys(newState.profiles)) {
  //   let username = document.createElement('p');
  //   username.textContent = user;
  //   main.appendChild(username);
  // }
    main.textContent = "";
    let username = document.createElement('p');
    username.textContent = newState.selected;
    main.appendChild(username);

    des_note.value = newState.profiles[newState.selected];
    note.value = newState.selected;

    selectedname_des = newState.profiles[newState.selected];
    localStorage.setItem("Names", JSON.stringify(newState));
    state = newState;
  //ok ill have to add functions in here i guess

  // story();
  // addstory();
  // return new Promise((resolve) => {
    selectedname = state.selected;
  // resolve(selectedname);
                          // console.log(`${newState.selected} is newState`);
                          // console.log(`${state.selected} is state`);
  // return selectedname;
  // resolve(state);
   // new promise
   // return chosen;
    if(main.lastChild){
        console.log(main.lastChild);
        pick = main.lastChild.textContent;
   // chosen = document.querySelector('#main');
   // chosen_name = chosen.lastChild.textContent;
   // console.log(`${chosen} is chosen`);
    }

   storyOne = [
         {
           id : 1,
           text : `Next thing ${pick} knows`
         },{
           id :2,
           text : `${pick} is put up in a bunk bed`
         },{
           id :3,
           text : `looking at the ceiling. ${pick} touches the ceiling with hands`
         },{
           id:4,
           text : `first time feeling trapped inside`
         },{
           id:5,
           text : `digital alarm starts ringing. pitch is getting higher and higher`
         },{
           id:6,
           text : `walks down the ladder to turn off the alarm`
         },{
           id:7,
           text : `${selectedname}looks through clothes in suitcase and pick an outfit`
         },{
           id:8,
           text : `goes to orientation and meets with other students who are also new to school and states`
         },{
           id:9,
           text : `${selectedname} is in 7th grade`
         },{
           id:10,
           text : ``
         }
   ];

   storyTwo = [
        {
         id : 1,
         text: `context2 line 1`
        },
        {
         id : 2,
         text: `context2 line 2`
        },
        {
         id : 3,
         text: `context2 line 3`
        },
        {
         id : 4,
         text: `context2 line 4`
        },
        {
         id : 5,
         text: `context2 line 5`
        },
        {
         id : 6,
         text: `context2 line 6`
        }
    ];
}

// bar timer
function createTimer(duration, display){
    return new Promise((resolve, reject) => {

        ticking = setInterval(() => {
            let seconds = duration, num;
            seconds =parseInt(duration % 60, 10);
            // console.log(seconds);
            const error = false;
            let bar = document.querySelector('#timebar')

            if(!error) {
                seconds = seconds < 10 ? "0" + seconds : seconds;
                --duration < 0 ? (duration = Math.floor(Math.random()*2), waited = true,bar.style.width = seconds * 10 +"px") : (duration, waited = false, bar.style.width = seconds * 10 +"px");
                display.textContent = seconds + " seconds left";

                resolve(waited);
            } else {
                reject('error:something wrong');
            }
        },1000);
    });
}// end of createTimer
createTimer(4, timer).then(addstory);



//lightsout btn blinking
function blink(){
  let ticks = 0;
  setInterval(()=>{
    if(ticks <= 9) {ticks++;} // console.log('ticks',ticks);
    collect.style.border = '0px dashed black';
    if(ticks%2){
        collect.style.border = '1px dashed black';
    }
  },400);   //do i need to clearinterval at somepoint?
}
blink();


// click; addstory; collectnights

function addstory(){

    collect.addEventListener('click', addon = (event) => {

        collect.removeEventListener('click', addon);
        let target = event.target;
        story_box.insertBefore(elt('div',{class:'box'}, storyOne[counter].text),story_box.firstChild);
        target.addEventListener('click',()=>{

            event.stopPropagation();

            if(waited){
                let bgColor = document.getElementById('wrapper');
                Promise.resolve(
                    setTimeout(()=>{bgColor.style.backgroundColor = 'black';},100)
                ).then(
                    setTimeout(()=>{bgColor.style.backgroundColor = 'white';},500)
                );

                // clearInterval(ticking);
                collect.removeEventListener('click', addon);  //hm it works without this

                Promise.resolve(counter++).then(collectNights); // need another collectNights at the end; need both;

                fading();
                disarray();

                console.log('current counter is',counter);         // for ex, you can create another btn- that leads to this second array
                if(counter >= 3) {                               //can swap into diff array like this
                    story_box.insertBefore(elt('div',{class:'box'},storyTwo[counter-3].text),story_box.firstChild);  //bc counter is 3 and need to target array[0]
                } else {   //put more than one class, create class, give property to class, change opacity according to the counter
                    story_box.insertBefore(elt('div',{class:'box'},storyOne[counter].text),story_box.firstChild);
                }

                } else if(!waited) {
                    console.log(` have you waited? : ${waited}`);
                }
        });

          // if(boxes[0]){console.log(boxes[0]);boxes[0].style.position = 'absolute';boxes[0].style.left = 300+'px'}

        collectNights();


        // ******now need to work on making button appear - then changing story based on input ******

        return(target);   //honestly not sure why this is neccessary
    });
} // end of function addstory

// story disarray
function disarray() {
  for(let each of boxes){
    console.log('each of boxes',each);
    each.style.position = 'relative';
    each.style.left = Math.random()*50 + 'px';
    each.style.marginBottom = Math.random()*20 + 'px';
  }
}


// story fading
function fading(){
  //boxes is .box
    if(boxes[0]){boxes[0].style.opacity = 1;}
    if(boxes[1]){boxes[1].style.opacity = 0.9;}
    if(boxes[2]){boxes[2].style.opacity = 0.8;}
    if(boxes[3]){boxes[3].style.opacity = 0.7;}
    if(boxes[4]){boxes[4].style.opacity = 0.6;}
    if(boxes[5]){boxes[5].style.opacity = 0.5;}
    if(boxes[6]){boxes[6].style.opacity = 0.4;}
    if(boxes[7]){boxes[7].style.opacity = 0.3;}
    if(boxes[8]){boxes[8].style.opacity = 0.2;}
    if(boxes[9]){boxes[9].style.opacity = 0.1;}
}



// collect nights with lightsout
function collectNights(){
    let nights = story_box.childNodes.length;
    sides.textContent = `collected : ${nights} nights`;
}

// elt ( "span", {class : "border_box"}, "lorem");
function elt(name, attrs, ...children) {
    var dom = document.createElement(name);

    for(let attr of Object.keys(attrs)){
        dom.setAttribute(attr, attrs[attr]);
    }

    for (let child of Array.from(children)){
        if(typeof child == "array") {
            Array.from(child);child.toString();
        }
        else {
            console.log(dom,'this is dom');
            dom.appendChild(document.createTextNode(child));
        }
      // if(dom.parentNode){console.log('yes it exists')}
    }

  // setStatus({name:Object.assign({},status.name,{[dom.lastChild.nodeValue]:dom.tagName}),selected:dom.lastChild.nodeValue},dom);
  // for description, dont erase
    return dom;
}





// localstorage
function switchSelected(event){
    setState({profiles:state.profiles, selected:event.target.textContent});
    // console.log(state.profiles[state.selected]);
    // console.log(event.target.textContent);
    event.stopPropagation();
}
// console.log(JSON.parse(localStorage.getItem("Names")));

setState(
    JSON.parse(localStorage.getItem("Names")) ||  //it works if I take this out
    {profiles: {"Woo":"given name"}, selected: "Woo"}
);


document.querySelector('#adduser').addEventListener('click', () => {
    // setState({profiles: Object.assign({},state.profiles,{[note.value]:des_note.value}), selected:note.value});
    setState({profiles: Object.assign({},{[note.value]:des_note.value}), selected:note.value});
});
