const bahay = document.querySelectorAll('.home-guide');
window.addEventListener('scroll', edga);

function edga(){
    const triggerbottom = innerHeight / 5 * 4;

    bahay.forEach(edg => {
        const edgTop = edg.getBoundingClientRect().top;

        if(edgTop < triggerbottom){
            edg.classList.add('.edgar');
        }
        else{
            edg.classList.remove('.edgar');
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    const getStartedButton = document.getElementById('get-started');
    const aboutUsSection = document.getElementById('about');
  
    getStartedButton.addEventListener('click', function () {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  