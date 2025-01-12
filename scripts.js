// Ambil elemen tombol toggle dan menu
const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');

// Tambahkan event listener untuk toggle
toggleMenu.addEventListener('click', () => {
  menu.classList.toggle('show'); // Tambahkan/hapus kelas "show"
});
