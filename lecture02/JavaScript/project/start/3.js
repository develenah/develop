function getToken() {
    return localStorage.getItem('token')
}

async function main() {
    // 버튼에 이벤트 연결

    // 토큰 체크
    const token = getToken();
    if (token === null ) {
        location.assign('/login');
        return;
    }

    // 토큰으로 서버에서 나의 정보 받아오기

    // 나의 책을 서버에서 받아오기

    // 받아온 책을 그리기
}
