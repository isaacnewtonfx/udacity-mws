page('/', function() {
  page.redirect('/what-is-vegemite');
});

page('/:slug', function(context) {
  // This will match any value after the first / in the url. For example, if
  // the url was /foo, the value of slug would be "foo".
  var slug = context.params.slug;

  // Remove is-active class from previous menu item and section
  var oldMenuItem = document.querySelector('#menu .is-active');
  var oldPage = document.querySelector('main .is-active');
  oldMenuItem.classList.remove('is-active');
  oldPage.classList.remove('is-active');

  // Add is-active class to new menu item and section using the URL slug
  var newMenuItem = document.querySelector('#menu [data-page='+slug+']');
  var newPage = document.querySelector('main [data-page='+slug+']');
  newMenuItem.classList.add('is-active');
  newPage.classList.add('is-active');

});

page({
  hashbang: true
});




vegemiteTab = document.getElementById("vegemiteTab");
vegemiteTab.addEventListener("click",function(e){
  document.getElementById("vegemiteHeader").focus();
});
vegemiteTab.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("vegemiteHeader").focus();
  }
});


recipesTab = document.getElementById("recipesTab");
recipesTab.addEventListener("click",function(e){
  document.getElementById("recipesHeader").focus();
});
recipesTab.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("recipesHeader").focus();
  }
});

ingredientsTab = document.getElementById("ingredientsTab");
ingredientsTab.addEventListener("click",function(e){
  document.getElementById("ingredientsHeader").focus();
});
ingredientsTab.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("ingredientsHeader").focus();
  }
});


