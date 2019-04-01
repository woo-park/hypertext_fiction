

let main = document.querySelector('#main');
let note = document.querySelector('#textarea');
let des_note = document.querySelector('#description');
let status;
let state;
let selectedname;
let selectedname_des;
let pick;

let storyOne;   //and this one too
let storyTwo;   //prob dont need this now
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


let add_button = document.getElementById('adduser');
let username = document.getElementById('username');

function hideUser(){
  add_button.addEventListener('click',() => {
    username.style.display = 'none';
  })
}

hideUser();




// fetch('http://localhost/drawweb/380/forms/hypertext/hypertext_fiction/story1.json')
//   .then(response => response.json())
//   .then(json => console.log(json));
let story_one = [];
let story_one_id = [];
let story_two = [];
  //
  fetch('story1.json')
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(json => findText(json));

  fetch('story2.json')
    .then(response => response.json())
    .then(json => findText2(json));

function findText(json){
  for(each of json){
    story_one.push(each.text);
    story_one_id.push(each.id);
    // console.log(JSON.stringify(story_one));
    // return story_one;
  }
  console.log(story_one);
  return story_one;
}
function findText2(json){
  for(each of json){
    story_two.push(each.text);
  }
  return story_two;
}
//
  // fetch("http://localhost/drawweb/380/forms/hypertext/hypertext_fiction/story1.json")
  //   .then(console.log('fetched'))
  //   .then(resp => resp.text())
  //   .then(text => console.log(text));




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
        story_box.insertBefore(elt('div',{class:'box'}, eval(story_one[counter])),story_box.firstChild);
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
                //hm i can create a button div and then continuosly append btn on to this div
                if(counter >= 7) {
                  let newbtn = document.createElement('div');
                  let newbtn_text = document.createTextNode('Where are you from?');
                  let wrapper = document.getElementById('wrapper');

                  wrapper.appendChild(newbtn);
                  newbtn.appendChild(newbtn_text);
                  if(document.lastChild = newbtn){
                    console.log('yes last child is new btn');
                  }

                }
                console.log(eval(story_one[counter]),'parsing');  //dont need this because i used eval() instead
                console.log('current counter is',counter);         // for ex, you can create another btn- that leads to this second array
                if(counter >= 3 && counter <= 10) {                               //can swap into diff array like this
                    story_box.insertBefore(elt('div',{class:'box'},eval(story_two[counter-3])),story_box.firstChild);  //bc counter is 3 and need to target array[0]
                } else {   //put more than one class, create class, give property to class, change opacity according to the counter
                    story_box.insertBefore(elt('div',{class:'box'},eval(story_one[counter])),story_box.firstChild);
                }

            } else if(!waited) {

                // if waited is false for 30sec, then start blinking -- possible functions

                console.log(` have you waited? : ${waited}`);
            }

            console.log(story_one_id,'story1id');
            console.log(story_one_id.length);
                // story_box.insertBefore(elt('div',{class:'box'},eval(story_one[counter])),story_box.firstChild);

        });

          // if(boxes[0]){console.log(boxes[0]);boxes[0].style.position = 'absolute';boxes[0].style.left = 300+'px'}

        collectNights();

        // if(counter >= 3){
        //   console.log('lets pop up button');
        // }
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
