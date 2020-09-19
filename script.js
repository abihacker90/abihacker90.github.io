/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "35%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Dropdown for label-inputs

function dropDown() {
  let nav = document.getElementById("checkGroup");
  nav.classList.toggle('show');
}

function dropDownServices() {
  let servicesNav = document.getElementById("servicesGroup");
  servicesNav.classList.toggle('show');
}
function notifyPopUp() {
  let notifyNav = document.getElementById("notification");
  notifyNav.classList.toggle('showInformation');
}
function wasteRemovePopUp() {
  let wasteRemoveNav = document.getElementById("removewaste");
  wasteRemoveNav.classList.toggle('showInformation');
}
function infosPopUp() {
  let infosNav = document.getElementById("infos");
  infosNav.classList.toggle('showInformation');
}

// Checkbox styles
$(document).ready(function () {
  $(":checkbox").each(function () {
      $(this).hide();

      var $image = $("<img src='assets/checkbox_icon_empty.svg' />").insertAfter(this);
      $image.css({"display": "flex", "float": "right", "padding-left": "1rem"});

      $image.click(function () {
          let $checkbox = $(this).prev(":checkbox");
          $checkbox.prop('checked', !$checkbox.prop('checked'));

          if ($checkbox.prop("checked")) {
              $image.attr("src", "assets/checkbox_icon.svg");
          } else {
              $image.attr("src", "assets/checkbox_icon_empty.svg");
          };
      });
  });
});


/* Set the width of the side navigation to 250px */
function openRightNav() {
  document.getElementById("myRightSidenav").style.width = "35%";
}

/* Set the width of the side navigation to 0 */
function closeRightNav() {
  document.getElementById("myRightSidenav").style.width = "0";
}


