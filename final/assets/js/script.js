function toggleBlurb() {
    let blurb = document.getElementById('blurb');
    blurb.classList.toggle('hidden');
}
document.getElementById('book').onclick = toggleBlurb;
