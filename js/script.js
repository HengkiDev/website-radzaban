function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const burgerMenu = document.querySelector('.burger-menu');
    navMenu.classList.toggle('active');
    burgerMenu.classList.toggle('active');
}

const emojis = document.querySelectorAll('.emoji-star');
        const ratingText = document.querySelector('.rating-text');
        const submitButton = document.querySelector('.submit-rating');
        let selectedRating = 0;

        const ratingDescriptions = [
            'Sangat Tidak Memuaskan',
            'Kurang Memuaskan', 
            'Cukup Baik',
            'Memuaskan',
            'Sangat Memuaskan'
        ];

        emojis.forEach(emoji => {
            emoji.addEventListener('mouseover', () => {
                const rating = emoji.getAttribute('data-rating');
                highlightEmojis(rating);
                ratingText.textContent = ratingDescriptions[rating - 1];
            });

            emoji.addEventListener('mouseout', () => {
                if (selectedRating === 0) {
                    resetEmojis();
                    ratingText.textContent = 'Pilih Rating Anda';
                } else {
                    highlightEmojis(selectedRating);
                    ratingText.textContent = ratingDescriptions[selectedRating - 1];
                }
            });

            emoji.addEventListener('click', () => {
                selectedRating = emoji.getAttribute('data-rating');
                highlightEmojis(selectedRating);
                ratingText.textContent = ratingDescriptions[selectedRating - 1];
            });
        });

        submitButton.addEventListener('click', () => {
            if (selectedRating > 0) {
                const selectedEmoji = document.querySelector(`.emoji-star[data-rating="${selectedRating}"]`).getAttribute('data-emoji');
                alert(`Terima kasih! Anda memberi rating ${selectedRating} dengan emoji ${selectedEmoji}`);
                // Tambahkan logika pengiriman rating ke backend di sini
            } else {
                alert('Silakan pilih rating terlebih dahulu');
            }
        });

        function highlightEmojis(rating) {
            emojis.forEach(emoji => {
                const emojiRating = emoji.getAttribute('data-rating');
                if (emojiRating <= rating) {
                    emoji.style.opacity = '1';
                    emoji.classList.add('active');
                } else {
                    emoji.style.opacity = '0.3';
                    emoji.classList.remove('active');
                }
            });
        }

        function resetEmojis() {
            emojis.forEach(emoji => {
                emoji.style.opacity = '0.3';
                emoji.classList.remove('active');
            });
        }