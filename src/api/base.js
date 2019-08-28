function getBase64Image(img) {

  var canvas = document.createElement("canvas");

  var width = img.width;

  var height = img.height;

  // calculate the width and height, constraining the proportions

  if (width > height) {

    if (width > 100) {

      height = Math.round(height *= 100 / width);

      width = 100;

    }

  } else {

    if (height > 100) {

      width = Math.round(width *= 100 / height);

      height = 100;

    }

  }

  canvas.width = width;  /*设置新的图片的宽度*/

  canvas.height = height; /*设置新的图片的长度*/

  var ctx = canvas.getContext("2d");//开启canvas绘图

  ctx.drawImage(img, 0, 0, width, height); /*绘图*/

  var dataURL = canvas.toDataURL("image/png", 0.8);//降低图片的清晰度

  return dataURL.replace("data:image/png;base64,", "");//返回除去data:image/png;base64,的base64数据

}
export default getBase64Image
