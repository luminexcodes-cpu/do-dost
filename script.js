// 1. Dark Mode Functionality
function toggleDarkMode() {
    // Body par 'dark-theme' class ko add ya remove karega
    document.body.classList.toggle("dark-theme");

    // Browser ki memory mein setting save karne ke liye (taaki page refresh par reset na ho)
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// 2. Page load hote hi check karega ki pehle kaunsa theme tha
window.onload = function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }
}

// 3. Save Button Alert
const saveBtn = document.querySelector('.btn');
if(saveBtn) {
    saveBtn.addEventListener('click', function() {
        alert("Bhai, tumhari settings save ho gayi hain! ✅");
    });
}