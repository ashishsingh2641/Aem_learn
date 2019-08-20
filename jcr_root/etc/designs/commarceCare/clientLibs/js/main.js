
        (function(){
            if (window.innerWidth < 961) {
                document.getElementById('main_menu').style.marginLeft = -(window.innerWidth ) + 'px'
            }
        }());
        function openMenu() {
            document.getElementById('main_menu').style.marginLeft = 0;
            document.getElementById("hamburger").style.marginTop = '-58px'
        }
        function hidemodal(x) {
            document.getElementById('main_menu').style.marginLeft = -(window.innerWidth ) + 'px'
            document.getElementById("hamburger").style.marginTop = '0';
           
        }