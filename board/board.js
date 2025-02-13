function addPost() {
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    if (!title || !content) {
        alert("제목과 내용을 입력해주세요.");
        return;
    }

    let post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `<div class="title">${title}</div><div>${content}</div>`;

    document.getElementById('board').prepend(post);

    document.getElementById('title').value = "";
    document.getElementById('content').value = "";
}

function openNewPage() {
    window.location.href = "board_write.html"; // 이동할 페이지 경로
}

function returnToBorad() {
    window.location.href = "board.html";
}