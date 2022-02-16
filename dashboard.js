const elemMenuDashboard = document.getElementById('idMenuDashboard');
const elemMenuDashboardItems = document.getElementsByClassName('menu-dashboard-item');

for (var i = 0; i < elemMenuDashboardItems.length; i++) {
  console.log('entrou no for');
  elemMenuDashboardItems[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('menu-dashboard-item active');
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  })
}