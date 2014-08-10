$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $('button').on('click', function () {
    var id = $('input').val()
    if (id) {
      $.ajax('/user/' + id)
      .done(function (res) {
        $('.user-name').text( res ? res.name : 'not known' )
      })
    }
  })
});
