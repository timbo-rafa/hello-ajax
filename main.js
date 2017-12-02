function ajaxCall() {
  // fetch posts and include on html
  $.getJSON("https://jsonplaceholder.typicode.com/posts", function fetchPosts(data) {
    $("#cardslist").html( data.map(function createCards(post) {
      var card = $( "<div class='card'></div>" )
      var cardBody = $( "<div class='card-body'></div>")
      cardBody.append(
        $("<h4 class='card-title'>" + post.title + "</h4>"),
        $("<p class='card-text'>" + post.body + "</p>")
      )
      card.append(cardBody)
      return card
    }))
  })
}
