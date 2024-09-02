function tabs () {
    const tabs = document.getElementsByClassName('price__tab');
    
    const toggleTabs = function() {
        document.querySelectorAll('.price__tab').forEach((item) => {
            if (item !== this) {
                item.classList.remove('active');
            }
        });
        if(!this.classList.contains('active')) {
            this.classList.add('active')
            document.querySelectorAll('.price__content').forEach((item) => {
                item.classList.remove('active');
            });
            document.getElementById(this.getAttribute('data-tab')).classList.add('active');
        }
    }
    Array.from(tabs).forEach(function (e) {
        e.addEventListener('click', toggleTabs);
    });
}

export default tabs;