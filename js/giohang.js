document.addEventListener("DOMContentLoaded", function() {
    // Hàm hiển thị sản phẩm trong giỏ hàng dưới dạng bảng
    function displayCartItems() {
        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        var cartItemsContainer = document.getElementById('cart-items');
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';

            if (cartItems.length === 0) {
                cartItemsContainer.innerHTML = '<p style="text-align: center;color:red;">Giỏ hàng trống</p>';
            } else {
                var cartTable = document.getElementById('cart-table');
                var tbody = document.createElement('tbody');

                cartItems.forEach(function(item, index) {
                    var row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>${item.quantity}</td>
                        <td><button class="delete-button" data-index="${index}">Xóa</button></td>
                    `;
                    tbody.appendChild(row);
                });

                cartTable.appendChild(tbody);

                // Lắng nghe sự kiện click cho các nút xóa
                var deleteButtons = document.querySelectorAll('.delete-button');
                deleteButtons.forEach(function(button) {
                    button.addEventListener('click', function() {
                        // Lấy index từ thuộc tính data-index
                        var index = parseInt(this.getAttribute('data-index'));

                        // Gọi hàm xóa sản phẩm và cập nhật hiển thị
                        deleteCartItem(index);
                        displayCartItems();
                        // Load lại trang
                        location.reload();
                    });
                });
            }
        }
    }

    // Hàm xóa sản phẩm khỏi giỏ hàng và cập nhật localStorage
    function deleteCartItem(index) {
        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Xóa sản phẩm khỏi mảng
        cartItems.splice(index, 1);

        // Cập nhật localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    // Gọi hàm để hiển thị sản phẩm khi trang được tải
    displayCartItems();
});
document.getElementById('submitBtn').addEventListener('click', function () {

    // Hiển thị thông báo
    alert('Thanh toán thành công');

    // Xóa dữ liệu trong localStorage
    localStorage.clear();

    // Chuyển hướng về trang "giohang.html"
    window.location.href = 'giohang.html';
});