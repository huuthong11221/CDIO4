jQuery(document).ready(function ($) {
    var intervalId = setInterval(function () {
      moveRight();
    }, 3000);
  
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
  
    $('#slider').css({ width: slideWidth, height: slideHeight });
  
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });
  
    $('#slider ul li:last-child').prependTo('#slider ul');
  
    function moveLeft() {
      $('#slider ul').animate(
        {
          left: +slideWidth,
        },
        200,
        function () {
          $('#slider ul li:last-child').prependTo('#slider ul');
          $('#slider ul').css('left', '');
        }
      );
    }
  
    function moveRight() {
      $('#slider ul').animate(
        {
          left: -slideWidth,
        },
        200,
        function () {
          $('#slider ul li:first-child').appendTo('#slider ul');
          $('#slider ul').css('left', '');
        }
      );
    }
  
    $('a.control_prev').click(function () {
      moveLeft();
    });
  
    $('a.control_next').click(function () {
      moveRight();
    });
  });
  
 
  document.addEventListener("DOMContentLoaded", function() {
      var addToCartButtons = document.querySelectorAll('.product li input[type="submit"]');
      
      addToCartButtons.forEach(function(button) {
          button.addEventListener('click', function() {
              var product = this.closest('li');
              var productName = product.querySelector('.title_product').textContent;
              var productPrice = product.querySelector('.price_product').textContent;
              
              // Thêm sản phẩm vào giỏ hàng và cộng số lượng nếu đã có trong giỏ hàng
              addToCart(productName, productPrice);
              
              // Hiển thị số lượng sản phẩm trong giỏ hàng
              updateCartCount();
          });
      });

      // Hàm thêm sản phẩm vào giỏ hàng và cộng số lượng nếu đã có trong giỏ hàng
      function addToCart(name, price) {
          // Kiểm tra xem có giỏ hàng trong localStorage chưa
          var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

          // Tìm sản phẩm trong giỏ hàng có tên giống với sản phẩm được thêm mới
          var existingProduct = cartItems.find(function(item) {
              return item.name === name;
          });

          if (existingProduct) {
              // Nếu sản phẩm đã tồn tại, cộng thêm vào cột số lượng
              existingProduct.quantity = (existingProduct.quantity || 1) + 1;
          } else {
              // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
              var product = {
                  name: name,
                  price: price,
                  quantity: 1
              };
              cartItems.push(product);
          }

          // Lưu giỏ hàng vào localStorage
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }

      // Hàm hiển thị số lượng sản phẩm trong giỏ hàng
      function updateCartCount() {
          var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

          // Hiển thị số lượng sản phẩm ở đây (ví dụ: trong một thẻ span)
          var cartCountElement = document.getElementById('cart-count');
          if (cartCountElement) {
              var totalCount = cartItems.reduce(function(sum, item) {
                  return sum + (item.quantity || 1);
              }, 0);
              cartCountElement.textContent = totalCount;
          }
      }
      
      // Gọi hàm để hiển thị số lượng sản phẩm khi trang được tải
      updateCartCount();
  });
