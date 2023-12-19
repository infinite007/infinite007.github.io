function loadContent(section) {
    const contentDiv = document.getElementById('content');
    switch(section) {
        case 'home':
            contentDiv.innerHTML = '<h1>Welcome to My Personal Website</h1>';
            break;
        case 'resume':
            contentDiv.innerHTML = '<h1>Resume</h1><p>[Your resume details]</p>';
            break;
        case 'projects':
            contentDiv.innerHTML = '<h1>Projects</h1><p>[Details of your projects]</p>';
            break;
        case 'skills':
            contentDiv.innerHTML = '<h1>Skills</h1><p>[List of your skills]</p>';
            break;
        case 'contact':
            contentDiv.innerHTML = '<h1>Contact</h1><p>[Your contact information]</p>';
            break;
        default:
            contentDiv.innerHTML = '<h1>Welcome</h1>';
    }
}

loadContent('home'); // Load home content initially

