const cards = document.querySelectorAll('.server-card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    cards.forEach((other) => {
      if (other !== card) {
        other.classList.add('dimmed');
      }
    });
  });

  card.addEventListener('mouseleave', () => {
    cards.forEach((other) => {
      other.classList.remove('dimmed');
    });
  });

  card.addEventListener('click', () => {
    const name = card.querySelector('.server-name').textContent;
    const description = card.dataset.description;
    modalTitle.textContent = name;
    modalDescription.textContent = description;
    modal.style.display = 'flex';
  });
});

function closeModal() {
  modal.style.display = 'none';
}

// Klikk az overlay-re is bezárja
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
