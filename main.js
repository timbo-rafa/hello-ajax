function ajaxCall() {
  var data = $.getJSON("https://jsonplaceholder.typicode.com/posts", function fetchPosts(data) {
    $("#cardslist").append( data.map(function createCards(post) {
      //var card = document.createElement()
      var card = $( "<div class='card-body'</div>" )
      card.append(
        $("<h4 class='card-title'>" + post.title + " testtt</h4>"),
        $("<p class='card-text'>" + post.body + "</p>")
      )
      return card
    })[0])
    console.log(data)
  })
}
