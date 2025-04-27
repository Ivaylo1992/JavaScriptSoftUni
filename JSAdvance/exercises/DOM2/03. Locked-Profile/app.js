function lockedProfile() {
    const profiles = Array.from(document.querySelectorAll('.profile'));

    profiles.forEach(profile => {
        const showMoreBtn = profile.querySelector('button');
        const hiddenFields = profile.querySelector('div:last-of-type');
        const unlockRadio = profile.querySelector('input[value="unlock"]');

        showMoreBtn.addEventListener('click', () => {
            if (unlockRadio.checked) {
                if (showMoreBtn.textContent === 'Show more') {
                    hiddenFields.style.display = 'block';
                    showMoreBtn.textContent = 'Hide it';
                } else {
                    hiddenFields.style.display = 'none';
                    showMoreBtn.textContent = 'Show more';
                }
            }
        });
    });
}
