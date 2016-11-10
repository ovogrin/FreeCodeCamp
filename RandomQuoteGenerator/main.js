$(document).ready(function(){

  var quote;
  var author;

  function getNewQuote(){
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response){
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text(quote);
        if(author){
          $('#author').text('said by ' + author);
          }else{
            $('#author').text('- unknown');
          }
        }
    });
  }

  getNewQuote();

  $('.get-quote').on('click', function(event){
    event.preventDefault();
    getNewQuote();
  });

  $('.share-quote').on('click', function(event){
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' -- ' + author));
  });

  var colors = ["rgba(86,175,99,0.6)", "rgba(86,175,222,0.6)"];


      jQuery(".rotator").click(function() {

  var randomColor = colors[Math.floor(Math.random() * colors.length)];
          jQuery('.quote-box').css("background", randomColor);
      });

});
