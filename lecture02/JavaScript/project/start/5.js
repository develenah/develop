async function getBooks(token) {
  try {
    const res = await axios.get('https://api.marktube.tv/v1/book', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log('getBooks error', error);
    return null;
  }
}

async function main() {
  // 버튼에 이벤트 연결

  // 토큰 체크

  // 토큰으로 서버에서 나의 정보 받아오기

  // 나의 책을 서버에서 받아오기
  const books = await getBooks(token);
  if (books === null) {
    return;
  }

  // 받아온 책을 그리기
}
