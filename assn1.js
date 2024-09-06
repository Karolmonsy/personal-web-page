function showMessage() {
    alert("Hello, welcome to my page!");
}

document.getElementById('profile_pic').addEventListener('mouseover', function() {
    document.body.style.backgroundColor = '#e0f7fa';
});

document.getElementById('profile_pic').addEventListener('mouseout', function() {
    document.body.style.backgroundColor = '#f0f0f0';
});
