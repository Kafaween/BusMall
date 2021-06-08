'use strict';

let st=0;
let leftImageElement = document.getElementById('left-image');
let midImageElement = document.getElementById('mid-image');
let rightImageElement = document.getElementById('right-image');
const logs1 = document.getElementById('logs1');
const logs2 = document.getElementById('logs2');
const logs3 = document.getElementById('logs3');
let sec=document.getElementById("sec-one")
let but=document.getElementById("b")
let invalid=[]
let arrOfNames = [];
let arrOfVotes = [];

let c=0;
let leftIndex; 
let midIndex;
let rightIndex;


let convert ;

let rounds =9;



let countsClick = 0;





function productImage(name,source){
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.shown = 0;
  productImage.allproducts.push(this);
  arrOfNames.push(this.name);
}


productImage.allproducts = [];


new productImage('bag','../imgs/bag.jpg'); 
new productImage('banana','../imgs/banana.jpg');
new productImage('bathroom','../imgs/bathroom.jpg'); 
new productImage('boots','../imgs/boots.jpg'); 
new productImage('breakfast','../imgs/breakfast.jpg');
new productImage('bubblegum','../imgs/bubblegum.jpg');
new productImage('chair','../imgs/chair.jpg')
new productImage('cthulhu','../imgs/cthulhu.jpg'); 
new productImage('dog-duck','../imgs/dog-duck.jpg')
new productImage('dragon','../imgs/dragon.jpg')
new productImage('pen','../imgs/pen.jpg')
new productImage('pet-sweep','../imgs/pet-sweep.jpg')
new productImage('scissors','../imgs/scissors.jpg')
new productImage('shark','../imgs/shark.jpg')
new productImage('sweep','../imgs/sweep.png')
new productImage('unicorn','../imgs/tauntaun.jpg')
new productImage('sasst-product','../imgs/unicorn.jpg')
new productImage('usb','../imgs/usb.gif')
new productImage('water-can','../imgs/water-can.jpg')
new productImage('wine-glass','../imgs/wine-glass.jpg')






function displayImages(){
  
  leftIndex = generateRandomIndex(); 
  rightIndex = generateRandomIndex(); 
  midIndex=generateRandomIndex()
  
  if (c==0){
  
  while(leftIndex === rightIndex  || leftIndex === midIndex ||midIndex === rightIndex)    {
    
    leftIndex = generateRandomIndex();
    midIndex= generateRandomIndex()
  }}
  else {

    while(invalid.includes(leftIndex) || invalid.includes(midIndex) || invalid.includes(rightIndex) || leftIndex === rightIndex  || leftIndex === midIndex ||midIndex === rightIndex){
      leftIndex = generateRandomIndex();
      midIndex= generateRandomIndex()
      rightIndex= generateRandomIndex()

    }
  }
    


  
  leftImageElement.src=productImage.allproducts[leftIndex].source;
  logs1.textContent = '';

  logs1.textContent=`voted ${productImage.allproducts[leftIndex].votes} times`
  productImage.allproducts[leftIndex].shown++;
  rightImageElement.src = productImage.allproducts[rightIndex].source;
  logs2.textContent = '';

  logs2.textContent=`voted ${productImage.allproducts[midIndex].votes} times`
  productImage.allproducts[midIndex].shown++;
  midImageElement.src=productImage.allproducts[midIndex].source
  logs3.textContent = '';

  logs3.textContent=`voted ${productImage.allproducts[rightIndex].votes} times`
  productImage.allproducts[rightIndex].shown++;



invalid=[leftIndex,midIndex,rightIndex]
console.log(invalid)
c++
}
getFromLs()
displayImages();



function generateRandomIndex(){
  let randomIndex = Math.floor(Math.random() * productImage.allproducts.length);
  return randomIndex;              
                
}

sec.addEventListener("click",addevent)
function addevent(){
  
leftImageElement.addEventListener('click',handleClicking);
midImageElement.addEventListener('click',handleClicking);
rightImageElement.addEventListener('click',handleClicking);}

function handleClicking(event){
    countsClick++;
    
    
    if(rounds >= countsClick){
         
        if(event.target.id === 'left-image'){
          productImage.allproducts[leftIndex].votes++;
          

          
        }
        else if(event.target.id ==='mid-image'){
            productImage.allproducts[midIndex].votes++;
            

        }
        else if(event.target.id ==='right-image'){
            productImage.allproducts[rightIndex].votes++;
            
        }
        saving()
        displayImages();
    }else{
      
   
    leftImageElement.removeEventListener('click',handleClicking);
    midImageElement.removeEventListener('click',handleClicking);
    rightImageElement.removeEventListener('click',handleClicking);
    }

  }


but.addEventListener("click",gettingList)
let arrOfSeen =[];

function gettingList(){
  
  let ul = document.getElementById('unList');
  for(let i = 0 ; i <productImage.allproducts.length; i++ ){
    arrOfVotes.push(productImage.allproducts[i].votes);
    arrOfSeen.push(productImage.allproducts[i].shown);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${productImage.allproducts[i].name} had ${productImage.allproducts[i].votes} Votes, and was seen ${productImage.allproducts[i].shown} times`;
    
  }
  but.removeEventListener("click",gettingList)
    sec.removeEventListener("click",addevent)
    gettingChart()
    
}



function gettingChart(){
let ctx = document.getElementById('myChart')
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrOfNames,
        datasets: [{
            label: '# of Votes',
            data: arrOfVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
            ],
            borderWidth: 1
        },{
          label: '# of Seen',
          data: arrOfSeen,
          backgroundColor: [
              'rgba(100, 120, 132, 0.5)',
          ],
          borderWidth: 1
      }
      ]
    },
});
}

function saving(){
  convert=JSON.stringify(productImage.allproducts)
  localStorage.setItem("product",convert);

} 


function getFromLs(){
  let data=localStorage.getItem("product")
  let parse=JSON.parse(data)
  if(parse !=null){
    productImage.allproducts=parse
  }

}


