const year = document.getElementById('year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const tombol = document.getElementById('lihatLayanan');

tombol.addEventListener('click', function(event) {
    event.preventDefault();
    const serviceSection = document.getElementById('service');
    serviceSection.scrollIntoView({ behavior: 'smooth' });
});

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(function(link) {
    const tujuan = link.getAttribute('href');
    if(tujuan !== '#'){
        const sectionTujuan = document.querySelector(tujuan);

        link.addEventListener('click', function(event){
            event.preventDefault();

            sectionTujuan.scrollIntoView({  
                behavior: 'smooth'
            });
        });
    }

    if(tujuan === '#'){
        link.addEventListener('click', function(event) {
            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
