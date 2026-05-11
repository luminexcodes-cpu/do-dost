// ==========================================
// 1. PROFILE DROPDOWN TOGGLE
// ==========================================
function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Window par click karne se dropdown band hona
window.addEventListener('click', function(e) {
    const menu = document.getElementById('profileMenu');
    const profileImg = document.querySelector('.nav-profile-img');
    
    if (menu && menu.classList.contains('active')) {
        if (e.target !== menu && e.target !== profileImg && !menu.contains(e.target)) {
            menu.classList.remove('active');
        }
    }
});

// ==========================================
// 2. PROFILE EDITING LOGIC (profile.html)
// ==========================================
function enableEdit() {
    // Elements pakadna
    const nameVal = document.getElementById('name-val');
    const nameInput = document.getElementById('name-input');
    const emailVal = document.getElementById('email-val');
    const emailInput = document.getElementById('email-input');
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');

    if (nameVal && nameInput) {
        // Text chhupao, Input dikhao
        nameVal.style.display = 'none';
        nameInput.style.display = 'block';
        nameInput.value = nameVal.innerText;

        emailVal.style.display = 'none';
        emailInput.style.display = 'block';
        emailInput.value = emailVal.innerText;

        // Buttons switch karo
        editBtn.style.display = 'none';
        saveBtn.style.display = 'inline-block';
    }
}

function saveChanges() {
    const nameVal = document.getElementById('name-val');
    const nameInput = document.getElementById('name-input');
    const emailVal = document.getElementById('email-val');
    const emailInput = document.getElementById('email-input');
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');

    // Value update karo
    nameVal.innerText = nameInput.value;
    emailVal.innerText = emailInput.value;

    // UI normal karo
    nameVal.style.display = 'block';
    nameInput.style.display = 'none';
    emailVal.style.display = 'block';
    emailInput.style.display = 'none';

    editBtn.style.display = 'inline-block';
    saveBtn.style.display = 'none';

    alert("Bhai, Profile update ho gayi! (Note: Refresh par ye wapas purani ho jayegi kyunki abhi Database nahi hai)");
}

// Profile Image Preview Update
const uploadPic = document.getElementById('upload-pic');
if (uploadPic) {
    uploadPic.addEventListener('change', function(event) {
        const reader = new FileReader();
        reader.onload = function() {
            const displayPic = document.getElementById('display-pic');
            if (displayPic) displayPic.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    });
}

// ==========================================
// 3. DARK MODE LOGIC (setting.html)
// ==========================================
const themeToggle = document.getElementById('theme-toggle');

// Pehle se saved theme check karna
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeToggle) themeToggle.checked = true;
}

if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}

// ==========================================
// 4. ACTIVE NAVIGATION LINK
// ==========================================
// Current page ke hisaab se nav-link ko blue (active) karna
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-links a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}