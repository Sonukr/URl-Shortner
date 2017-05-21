$('.btn-shorten').on('click', function(){
  var input = $('#url-field').val();
  if(input != ""){
    $.ajax({
      url: '/api/shorten',
      type: 'POST',
      dataType: 'JSON',
      data: {url: $('#url-field').val()},
      success: function(data){
          var resultHTML = '<a class="result" href="http://' + data.shortUrl + '">'
              + data.shortUrl + '</a>';
          $('#link').html(resultHTML);
          $('#link').hide().fadeIn('slow');
      }
    });
  }else if(input == "" ){
      alert("Please enter a url")
  }
});

$('#url-field').on('keypress', function(e){
  if(e.keyCode === 13){
    $('.btn-shorten').click();
  }
});


function ValidURL(str) {
  var pattern = new RegExp('^(?:(ftp|http|https):\/\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\d+)?(\\//[-a-z\\d%_.~+]*)*'); // port and path
  if(!pattern.test(str)) {
    alert("Please enter a valid URL.");
    return false;
  } else {
    return true;
  }
}
