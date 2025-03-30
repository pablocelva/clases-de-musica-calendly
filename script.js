document.getElementById('openCalendly').addEventListener('click', function() {
    Calendly.initPopupWidget({ url: 'https://calendly.com/otisbul/clases'});
    //document.querySelector('.calendly-inline').style.display = 'block';
});