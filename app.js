var searchTerm = 'freekashmir',
    numOfTweets = 10,
    $ul = $('ul'),
    list='',
    url = 'http://localhost:8888/twitter_test/twitter/?q=' + searchTerm + '&count=' + numOfTweets;

$.get(url, function (data) {
    
    $.each(data.statuses, function () {
        list += '<li>'+ this.text +'</li>';
    });
    $ul.html(list);
});




/*
$.getJSON('request.php', function(data) {
                        //data will hold the php array as a javascript object //
                        $.each(data, function(key, val) {
                                $('ul').append('<li id="' + key + '">' + val.first_name + ' ' + val.last_name + ' ' + val.email + ' ' + val.age + '</li>');
                        });
                });




$.ajax({
        url: 'request.php',
        success: function (response) {
            console.log(response);
          }
      });


  loadTweets: function() {
    $.ajax({
      url: 'tweets.php',
      type: 'post',
      dataType: 'json',
      data: {
        q: JQTWEET.user,
        count: JQTWEET.numTweets,
        api: 'statuses/user_timeline'
      },
      success: function(data, textStatus, xhr)


Convierte los datos en un json.      

*/