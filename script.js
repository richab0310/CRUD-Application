window.onload = function () {
  if (window.location.href.includes("#popup")) {
    document.getElementById("popup").style.display = "flex";
  }
};

function closePopup() {
  document.getElementById("popup").style.display = "none";
  history.replaceState(null, null, window.location.pathname);
}

function enableEdit(id) {
  const row = document.querySelector(`#row-${id}`);
  const inputs = row.querySelectorAll('input');
  const updateBtn = row.querySelector('.update-btn');
  const cancelBtn = row.querySelector('.cancel-btn');

  inputs.forEach(input => input.removeAttribute('readonly'));
  updateBtn.style.display = 'inline-block';
  cancelBtn.style.display = 'inline-block';
}

function cancelEdit(id) {
  const row = document.querySelector(`#row-${id}`);
  const inputs = row.querySelectorAll('input');
  const updateBtn = row.querySelector('.update-btn');
  const cancelBtn = row.querySelector('.cancel-btn');

  inputs.forEach(input => input.setAttribute('readonly', true));
  updateBtn.style.display = 'none';
  cancelBtn.style.display = 'none';

  // Reload page to restore original values
  location.reload();
}
