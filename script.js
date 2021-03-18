//https://stackoverflow.com/questions/15151043/replace-image-using-jquery

$('img',".box").click(function(){
  var asd = $(this).attr('src');
 $('img',$('.bigImage')).attr('src',asd);
});
