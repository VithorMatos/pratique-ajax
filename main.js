    document. addEventListener( 'DOMContentLoaded', function() {
    const avatar = document.querySelector('#avatar');
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/vithormatos')
    .then(function(res) {
    return res.json();

    })
    .then(function(json) {
    avatar.src = json.avatar_url;
    nameElement.innerText = json.name;
    usernameElement.innerText = json.login;
    reposElement.innerText = json.public_repos;
    followingElement.innerText = json.following;
    followersElement.innerText = json. followers;
    linkElement.href = json.html_url;
    })
})