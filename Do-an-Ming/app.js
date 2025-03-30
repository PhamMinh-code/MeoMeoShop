// Lấy các phần tử
const modal = document.getElementById('productModal');
const closeBtn = document.querySelector('.close-btn');
const buyButtons = document.querySelectorAll('.buy-btn');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');

// Thêm sự kiện cho từng nút "Mua"
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Lấy dữ liệu từ thuộc tính data-*
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');
        const img = button.getAttribute('data-img');
        const desc = button.getAttribute('data-desc');

        // Cập nhật nội dung modal
        modalImg.src = img;
        modalName.textContent = name;
        modalPrice.textContent = `Giá: ${price}`;
        modalDesc.textContent = `Mô tả: ${desc}`;

        // Hiển thị modal
        modal.style.display = 'flex';
    });
});

// Đóng modal khi nhấn nút "X"
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Đóng modal khi nhấn ra ngoài nội dung
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});