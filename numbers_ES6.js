const createCards = (numberArr) => {
  let structure = '';
  numberArr.map((element) => {
    structure = `${structure} <div class="ph-numbercard__boxes ph-numbercard__boxes--box${element}"><p>${element}</p></div>`
  });
  document.querySelector('.ph-numbercard__cardwrapper').innerHTML = structure;
}
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.ph-numbercard__sort').addEventListener('click', () => {
    let arrSort = [1,2,3,4,5,6,7,8,9];
    createCards(arrSort);
  });
  document.querySelector('.ph-numbercard__shuffle').addEventListener('click', () => {
    let randomArr = [];
      while(randomArr.length < 9) {
        let num = Math.floor((Math.random() * 9) + 1);
        if ( randomArr.indexOf(num) === -1 ) {
          randomArr.push(num);
        }
      }
    createCards(randomArr);
  });
});
