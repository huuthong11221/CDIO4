document.addEventListener("DOMContentLoaded", function() {
    var addToCartButton = document.querySelector('.mua-ngay-btn');

    addToCartButton.addEventListener('click', function() {
        var productName = document.querySelector('.product-name').textContent;
        var productPrice = document.querySelector('.product-price').textContent;

        // Thêm sản phẩm vào giỏ hàng và cộng số lượng nếu đã có trong giỏ hàng
        addToCart(productName, productPrice);

        // Hiển thị số lượng sản phẩm trong giỏ hàng
        updateCartCount();
        window.location.href = 'hinhthuc.html'
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
// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});
