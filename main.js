function ajaxCall() {
  // delete previous cards
  $(".card-body, .card-rule, .card-text, .card-title").remove()
  // fetch posts and include on html
  $.getJSON("https://jsonplaceholder.typicode.com/posts", function fetchPosts(data) {
    $("#cardslist").append( data.map(function createCards(post) {
      var card = $( "<div class='card-body' </div>" )
      card.prepend( "<hr class='card-rule'/>" )
      card.append(
        $("<h4 class='card-title'>" + post.title + "</h4>"),
        $("<p class='card-text'>" + post.body + "</p>")
      )
      return card
    }))
  })
}
