document.addEventListener("DOMContentLoaded", function() {
    var openPopupButtons = document.querySelectorAll('.open-popup-btn');
    var closePopupButtons = document.querySelectorAll('.close-popup-btn');
    var popupOverlays = document.querySelectorAll('.popup-overlay');

    // Mở popup tương ứng
    openPopupButtons.forEach(button => {
        button.addEventListener('click', function() {
            var popupId = button.getAttribute('data-popup-target');
            var popup = document.getElementById(popupId);
            popup.style.display = 'flex';
        });
    });

    // Đóng popup và tạm dừng video (nếu có)
    closePopupButtons.forEach(button => {
        button.addEventListener('click', function() {
            var popup = this.closest('.popup-overlay');
            popup.style.display = 'none';
            // Tạm dừng video khi đóng popup
            var videos = popup.getElementsByTagName('video');
            if (videos.length > 0) {
                videos[0].pause();
            }
        });
    });

    // Đóng popup khi click ra ngoài nội dung popup và tạm dừng video
    popupOverlays.forEach(overlay => {
        overlay.addEventListener('click', function(event) {
            if (event.target === overlay) {
                overlay.style.display = 'none';
                // Tạm dừng video khi đóng popup
                var videos = overlay.getElementsByTagName('video');
                if (videos.length > 0) {
                    videos[0].pause();
                }
            }
        });
    });
});
