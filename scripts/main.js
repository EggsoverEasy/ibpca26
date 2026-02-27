const btnA = document.getElementById('btnAbout');
const btnH = document.getElementById('btnHobbies');
const btnF = document.getElementById('btnFaves');
const scolip = document.getElementById('scoliCry');

let aboutMe =
  '<h3>Ian Brown</h3>' +
  '<h1>Web Developer</h1>' +
  '<span>To be</span>' +
  '<p>Ian is a passionate, life long learner that is eager to embark on the next great chapter of his life.</p>' +
  '<p>Ian was born in Maryland, but moved to and grew up in Delaware from when he was five years old. He graduated from the University of Delaware in 2011 with a Bachelor of the Arts in the Fine Art program.</p>' +
  "<p>As someone who grew up with the internet, Ian's love of programming started small and familiar for a lot of his peers- on an up and coming website called Neopets™ that let you take basic HTML to your storefront and make it yours. This would later transition to MySpace™ making profile pages for people now using CSS.</p>" +
  '<p>As an adult, and still looking to do more, Ian went back to school and got an Associates in Computer Science at Del Tech University before ultimately landing at <span class="PHRG" title="I work here!">Power Home Remodeling Group</span> and joined their <span class="PHRG" title="This is my job!">Ninja Support Team</span> with the driving light of one day joining the PCA.</p>';

let aboutHobbies =
  '<h1>Hobbies</h1>' +
  '<br>' +
  '<p>These are some things I like to <span class="strikethrough">waste</span> spend time on!</p>' +
  "<p>You can click on the name of the Hobby for a \'personal fave\' in that category</p>" +
  '<div id="infoGraph">' +
  '<a href=\"https://killsixbilliondemons.com/\" target="_blank"><div>Art</div></a>' +
  '<div class=\"second\">IDK some shit about art I guess</div>' +
  '<a href=\"https://myanimelist.net/anime/1482/DGray-man" target="_blank"><div>Anime</div></a>' +
  '<div class=\"second\">IDK some shit about anime I guess</div>' +
  '<a href=\"https://persona.atlus.com/p5r/?lang=en\" target="_blank"><div>Video Games</div></a>' +
  '<div class=\"second\">IDK some shit about video games I guess</div>' +
  '<a href=\"https://ramenkumamoto.com/\" target="_blank"><div>Food</div></a>' +
  '<div class=\"second\">IDK some shit about food I guess</div>' +
  '<a href=\"https://www.littlegoatcoffeeroasting.com/\" target="_blank"><div>Coffee</div></a>' +
  '<div class=\"second\">IDK some shit about coffee I guess</div>' +
  '<a href=\"https://www.bookbub.com/referral/c52481cba4647f48\" target="_blank"><div>Books</div></a>' +
  '<div class=\"second\">IDK some shit about books I guess</div>' +
  '</div>';

let aboutFaves =
  '<details><summary>Anime</summary><p class="insides">Lorem Ipsum Blah Blah Blah</p></details>' +
  '<details><summary>Books</summary><p class="insides">Lorem Ipsum Blah Blah Blah</p></details>' +
  '<details><summary>Video Games</summary><p class="insides">Lorem Ipsum Blah Blah Blah</p></details>' +
  '<details><summary>Music</summary><p class="insides">Lorem Ipsum Blah Blah Blah</p></details>';

btnA.addEventListener('click', function () {
  document.getElementById('textBody').innerHTML = aboutMe;
});

btnH.addEventListener('click', function () {
  document.getElementById('textBody').innerHTML = aboutHobbies;
});

btnF.addEventListener('click', function () {
  document.getElementById('textBody').innerHTML = aboutFaves;
});

scolip.addEventListener('click', function () {
  var audio = document.getElementById('audioPlay');
  audio.load();
  audio.play();
});

var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}
