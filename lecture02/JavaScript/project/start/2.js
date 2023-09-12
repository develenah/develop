function bindLogoutButton() {
    const btnLogout = document.querySelector('#btn_logout');
    btnLogout.addEventListener('click', logout);
}

async function main() {
    // 버튼에 이벤트 연결
    bindLogoutButton();

    // 토큰 체크

    // 토큰으로 서버에서 나의 정보 받아오기

    // 나의 책을 서버에서 받아오기

    // 받아온 책을 그리기
}

document.addEventListener('DOMContentLoaded', main);
