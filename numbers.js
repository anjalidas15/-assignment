function createCards(numberArr) {
  var structure = '';
  numberArr.map(function(element) {
    structure = structure + '<div class="ph-numbercard__boxes ph-numbercard__boxes--box'+element+'"><p>'+element+'</p></div>';
  }) 
  document.querySelector('.ph-numbercard__cardwrapper').innerHTML = structure;
}

function sort() {
  var arrSort = [1,2,3,4,5,6,7,8,9];
  createCards(arrSort);
}

function shuffleNumbers() {
  var randomArr = [];
    while(randomArr.length < 9) {
      var num = Math.floor((Math.random() * 9) + 1);
      if ( randomArr.indexOf(num) === -1 ) {
        randomArr.push(num);
      }
    }

  createCards(randomArr);
}

window.onload=function(){
  document.querySelector('.ph-numbercard__shuffle').addEventListener('click', shuffleNumbers);
  document.querySelector('.ph-numbercard__sort').addEventListener('click', sort);
}