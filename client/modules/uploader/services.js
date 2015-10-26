upload

.factory('uploadService', function() {
  var attachPlugin = function() {
    $(function () {
      $('#fileupload').fileupload({
        dataType: 'json',
        done: function (e, data) {
          console.log('done')
          console.log(data);
          
          $.each(data.result.files, function (index, file) {
            $('<p/>').text(file.name).appendTo(document.body);
          });
        },
        progressall: function (e, data) {
          console.log(data);
          var progress = parseInt(data.loaded / data.total * 100, 10);
          console.log(progress);
          $('#progress .bar').css(
            'width',
            progress + '%'
          );
        }
      });
    });
  };

  var upload = function() {

  };

  return {
    attachPlugin: attachPlugin,
    upload: upload
  };
});
