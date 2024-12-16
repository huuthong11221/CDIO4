$(".email-signup").hide();
$("#signup-box-link").click(function(){
  $(".email-login").fadeOut(100);
  $(".email-signup").delay(100).fadeIn(100);
  $("#login-box-link").removeClass("active");
  $("#signup-box-link").addClass("active");
});
$("#login-box-link").click(function(){
  $(".email-login").delay(100).fadeIn(100);;
  $(".email-signup").fadeOut(100);
  $("#login-box-link").addClass("active");
  $("#signup-box-link").removeClass("active");
});
document.addEventListener("DOMContentLoaded", function() {
  var loginForm = document.querySelector('.email-login');

  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Lấy giá trị nhập vào tài khoản và mật khẩu
      var emailInput = document.querySelector('.email-login input[type="email"]');
      var passwordInput = document.querySelector('.email-login input[type="password"]');
      var emailValue = emailInput.value.trim();
      var passwordValue = passwordInput.value.trim();

      // Kiểm tra nếu tài khoản và mật khẩu là admin@gmail.com và 123
      if (emailValue === 'admin@gmail.com' && passwordValue === '123') {
          // Chuyển hướng sang trang admin.html
          window.location.href = '../admincp/index.html';
      } else {
          // Nếu không phải là tài khoản admin, có thể xử lý theo ý bạn (hiển thị thông báo lỗi, vv.)
          alert('Tài khoản hoặc mật khẩu không đúng!');
      }
  });
});
