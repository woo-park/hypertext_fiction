

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
  console.log(`${newState.selected} is newState`);
  console.log(`${state.selected} is state`);
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
// let chosen;
// if(main.lastChild){



// chosen = document.querySelector('#main');
// chosen_name = chosen.lastChild.textContent;
// console.log(`${chosen} is chosen`);
// }


  // console.log(barlength);

// timeBar(duration);

let clock;
let waited=false;
function createTimer(duration, display){
  return new Promise((resolve, reject) => {

    clock = setInterval(() => {
      let seconds = duration, num;
      seconds =parseInt(duration % 60, 10);
      console.log(seconds);
      const error = false;
      let bar = document.querySelector('#timebar')

      if(!error){
          seconds = seconds < 10 ? "0" + seconds : seconds;
          // Promise.resolve(setTimeout(()=>{duration = 0},3000)).then(duration = 6)

          --duration < 0 ? (duration = Math.floor(Math.random()*2), waited = true,bar.style.width = seconds * 10 +"px") : (duration, waited = false, bar.style.width = seconds * 10 +"px");
          // console.log(duration);
          display.textContent = seconds + " seconds left";
              // return snooze;

              // let barlength = bar.offsetWidth;


          resolve(waited);

      } else {
        reject('error:something wrong');
      }
    },1000);
  });
}// end of createTimer
let timer = document.querySelector('#timer');
// let timer2 = document.querySelector('#timer2');
createTimer(4, timer).then(addstory);



let counter = 0;
let sides = document.getElementById('side');



function addstory(){
  let collect = document.querySelector('#collectbtn');
  collect.addEventListener('click', addon = (event) => {

    collect.removeEventListener('click', addon);
    // for(let a of storyOne){   //dont need this actually
      let firstline = elt('div',{class:'box'}, storyOne[counter].text);
      // let context2 = elt('div',{class:'box'},storyTwo[counter].text);
      let target = event.target;



          target.appendChild(firstline);  ///


      console.log(` waited : ${waited}`);
          target.addEventListener('click',()=>{
            event.stopPropagation();

            console.log(bgColor);

            if(waited){

              let bgColor = document.getElementById('wrapper');
              let whiteFont = document.getElementsByClassName('fontColor');

              Promise.resolve(setTimeout(()=>{bgColor.style.backgroundColor = 'black';
              // if(whiteFont.lastChild.style)whiteFont.lastChild.style.fontColor = 'white';



              },100))
              .then(  setTimeout(()=>{bgColor.style.backgroundColor = 'white'},500))

              // clearInterval(clock);
              collect.removeEventListener('click', addon);  //hm it works without this

              Promise.resolve(counter++).then(collectNights); // need another collectNights at the end; need both;


              console.log(target.lastChild.previousSibling,'previously selected target');


              let jay = document.createElement('div');  // this is test
              jay.innerHTML = 'jayjay';

              // console.log(fadeOut, 'is fadeOut #');
              console.log(counter,'counter');         // for ex, you can create another btn- that leads to this second array
              if(counter >= 3){                               //can swap into diff array like this
                target.parentNode.insertBefore(elt('div',{class:'box'},storyTwo[1].text),target.previousSibling);  //bc counter is 3 and need to target array[0]
              } else{   //put more than one class, create class, give property to class, change opacity according to the counter
                target.parentNode.insertBefore(elt('div',{class:'box'},storyOne[1].text),target.previousSibling);
              }       //, style: `opacity : ${fadeOut}`

              // for(eachh of target.childNodes){
              //   console.log(eachh,'this is each');
              //   if(waited){
              //     if(eachh.style){  //bc first is textelement that doesn't have style property
              //         if(eachh.previousSibling.style){eachh.previousSibling.style.opacity = opac - 0.2;}
              //     }
              //   }
              // }        // this makes the whole prev opac --

              // for(eachh of target.childNodes){
              //   console.log(eachh,'this is each');
              //   if(waited){
              //     opac -= 0.1;
              //     if(eachh.style){  //bc first is textelement that doesn't have style property
              //         if(eachh.previousSibling.style){eachh.previousSibling.style.opacity = opac;}
              //     }
              //   }
              // }      // this does what i want but just the total opposite


              // let fadeOut = (100 - (counter*10))/100;
              let fadeOut = 100;
              fadeOut -= counter*10;
              opac = fadeOut/100;

              // for(eachh of target.childNodes){
              //   console.log(eachh,'this is each');
              //   if(waited){
              //     opac -= 0.1;
              //     let fade = 0.1;
              //     // fadeOut -= fade;
              //     // if(eachh.style){  //bc first is textelement that doesn't have style property
              //     //     if(eachh.style){eachh.childNodes[1].nextSibling.style.opacity = opac;}
              //     //
              //     // }
              //     console.log(eachh.parentNode.childNodes[1].nextSibling,'parentNode.childNodes[1].nextSibling');
              //     if(eachh.style){fade = eachh.style.opacity}
              //       console.log(fade,'fade num');
              //       if(eachh.style){eachh.style.opacity = opac;}
              //
              //       if(eachh.style){console.log(eachh.style.opacity,'eachstyleopacity')}
              //     // for(let i = 0; i < target.children; i++){
              //     //   if(target.childNodes[i].style){
              //     //   target.childNodes[i].style.opacity = opac;
              //     //   }
              //
              //   }
              // }
              fading();
              function fading(){
                  for (each_one of target.childNodes){
                    if (waited){
                      if(each_one.style){
                        if(each_one.previousSibling.style){

                          // let tis = each_one.style.opacity = 0.1;
                          target.lastChild.previousSibling.style.opacity = opac + 0.1;
                            console.log(each_one.previousSibling.style.opacity,'this is previoussibling');
                        }
                      }
                    }
                  }
                }







              for(let i = 100; i < 0; i--){

              }

              // console.log(target.lastChild.previousSibling.style.opacity,'pre opacity');


              if(target.childNodes.length > target.childNodes.length -1){
                waited = false;
                console.log(` waited : ${waited}`);
              }
              // waited = false;
              // createTimer(2,document.body.appendChild(elt('div',{class:''},'')));
            } else if (!waited) {
              console.log(` waited : ${waited}`);
            }
          });

        function collectNights(){
          let nights = target.childNodes.length - 1;
          console.log(target.childNodes);
          sides.textContent = `collected : ${nights} nights`;
        }

        do {        // or just collectNights works too
          collectNights();
        } while (
          counter > 1000
        );

      return(target);
    // }// end of for loop  // dt need this
  });
}

// elt ( "span", {class : "border_box"}, "lorem");
function elt(name, attrs, ...children) {
  var dom = document.createElement(name);
  for(let attr of Object.keys(attrs)){
    dom.setAttribute(attr, attrs[attr]);
  }
  for (let child of Array.from(children)){
    if(typeof child == "array") {Array.from(child);child.toString()}

    else {console.log(dom,'this is dom');
    if(dom.parentNode){console.log('yes it exists')}
    }

  }
  // console.log(dom.lastChild.nodeValue)  //lorem
  // setStatus({name:Object.assign({},status.name,{[dom.lastChild.nodeValue]:dom.tagName}),selected:dom.lastChild.nodeValue},dom);
  // console.log(dom);
  return dom;
}

function switchSelected(event){
  setState({profiles:state.profiles, selected:event.target.textContent});
  console.log(state.profiles[state.selected]);
  console.log(event.target.textContent);
  event.stopPropagation();
}
console.log(JSON.parse(localStorage.getItem("Names")));

setState(
  JSON.parse(localStorage.getItem("Names")) ||  //it works if I take this out
  {profiles: {"Woo":"given name"}, selected: "Woo"}
);


document.querySelector('#adduser').addEventListener('click', () => {
  // setState({profiles: Object.assign({},state.profiles,{[note.value]:des_note.value}), selected:note.value});
  setState({profiles: Object.assign({},{[note.value]:des_note.value}), selected:note.value});

});
