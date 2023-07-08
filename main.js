let section = document.querySelector('.alldata2');
let spans = document.querySelectorAll('.progress span');
let h3 = document.querySelectorAll('.progress h3');

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 400) {
    spans.forEach((sp) => {
      sp.style.width = sp.dataset.width;

    })
  }
}











let skill = document.getElementById('.skil');

skill.onclick = function () {
  scrollY = section.offsetTop - 400
}


let about = document.querySelector('.about')



let alldat = document.getElementById('contact');
let o = document.getElementById('o')
let c = document.getElementById('c')

function scrollToSection() {
  const sectionn = document.getElementById('alldatag');
  window.scrollTo({
    top: sectionn.offsetTop - 160,
    behavior: 'smooth'
  });
}
function scrollToSection2() {
  const section2 = document.getElementById('alldata3');
  window.scrollTo({
    top: section2.offsetTop - 175,
    behavior: 'smooth'
  });
}
function scrollToSection3() {
  const section3 = document.getElementById('socialmedia-sec');
  window.scrollTo({
    top: section3.offsetTop - 175,
    behavior: 'smooth'
  });
}
function scrollToSection4() {
  const section4 = document.getElementById('section');
  window.scrollTo({
    top: section4.offsetTop - 175,
    behavior: 'smooth'
  });
}


function scrollToSection5() {
  const section2 = document.getElementById('alldata3');
  let as = document.getElementById('A')
  window.scrollTo({
    top: section2.offsetTop - 175,
    behavior: 'smooth'


  });
}



  let talk = document.getElementById('talk');
let ELcont = document.getElementById('ELcont');
talk.onclick = function(){

  ELcont.style.display='flex'
}
