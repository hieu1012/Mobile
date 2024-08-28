(function() {
    // Chọn phần tử h1 và lưu vào biến header
    const header = document.querySelector('h1');

    // Đặt màu sắc của h1 là đỏ
    header.style.color = 'red';

    // Thêm một sự kiện vào body để thay đổi màu h1 thành xanh khi body được nhấp
    document.body.addEventListener('click', function() {
        header.style.color = 'blue';
    });
})();