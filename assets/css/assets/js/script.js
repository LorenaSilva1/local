
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
    }
}


function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.className = 'light-theme';
    } else {
        document.body.className = 'dark-theme';
    }


    localStorage.setItem('theme', document.body.className);
}

function updateVisitCount() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount);
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visit-count').textContent = visitCount;
}


document.getElementById('theme-toggle').addEventListener('click', toggleTheme);


loadTheme();
updateVisitCount();
