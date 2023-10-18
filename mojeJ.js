 function addClass(e) {
     e.preventDefault(); //zastaví normální chování takže se neprovede href="#ID"
     var dataTarget = e.target.getAttribute('data-target'); //do proměnné dataTarget uložím hodnotu co je v <a data-target="hodnota"
     var activeList = document.getElementsByClassName('active-pick'); //najdu všechny elementy na stránce co mají class="active-pick"
     Array.from(activeList).forEach(function (element, index, array) //projde všechny elementy se třídou active-pick 
         {
             element.classList.remove('active-pick'); //odebere elementu třídu active-pick
         });
     e.target.className += " active-pick"; //e.target nám vrátí element, na který jsme kliknuli a pak mu přidáme třídu active-pick aby se pomocí css zabarvil
     var scrollTo = document.getElementById(dataTarget); //získáme element s ID na, který ten <a data-target="id"> odkazuje
     window.scroll({ //funkce co sjede s obrazovkou na vzádlenost toho ID od vrchu stránky
         top: scrollTo.offsetTop - 80, // -60 vzdálenost elementu od vrchu stránky(vyska hlavicky) a dali jsme mínus 80px, aby to vypadalo lépe
         left: scrollTo.offsetLeft,
         behavior: 'smooth' //plynule sjede
     });
 }
