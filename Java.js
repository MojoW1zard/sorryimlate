const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
<script type="text/javascript">
$(document).ready(function() {
$('.slideshow').cycle({
fx: 'fade', //вид перехода
speed: 1000, //скорость смены картинки
timeout: 1000 //длительность кадра
});
});
</script>