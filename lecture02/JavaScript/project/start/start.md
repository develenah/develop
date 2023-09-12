[github](https://github.com/2woongjae/fc-js-project)

---

# Login
POST https://api.marktube.tv/vl/me
Body
- { email, password }

# 내 정보 가져오기
GET https://api.marktube.tv/vl/me
Request Headers
- Authorization: Bearer 3acc8490-1d5c-4148-a307-e5ded8fc6de0

---

# 책 목록 가져오기
GET https://api.marktube.tv/vl/book
Request Headers
- Authorization: Bearer 3acc8490-1d5c-4148-a307-e5ded8fc6de0

# 책 정보 가져오기
GET https://api.marktube.tv/vl/book/1
Request Headers
- Authorization: Bearer 3acc8490-1d5c-4148-a307-e5ded8fc6de0

# 책 추가하기
GET https://api.marktube.tv/vl/book/1
Request Headers
- Authorization: Bearer 3acc8490-1d5c-4148-a307-e5ded8fc6de0
Body
- { title, message, author, url }

# 책 수정하기
PATCH https://api.marktube.tv/vl/book/1
Request Headers
- Authorization: Bearer 3acc8490-1d5c-4148-a307-e5ded8fc6de0
Body
- { title, message, author, url }

# 책 삭제하기
DELETE https://api.marktube.tv/vl/book/1
Request Headers
- Authorization: Bearer 3acc8490-1d5c-4148-a307-e5ded8fc6de0

---

// test@marktube.tv
// 1234

---

# axios api
https://github.com/axios/axios
