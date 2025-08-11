---
layout: page
title: 정원사 소개
description: 정원사 툭히와 마음의 정원 소개
---

<!-- 웹폰트 로드 -->
<link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet">

<style>
.grid {
  display: grid;
  gap: 2rem;
  margin: 2rem 0;
}
.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid #e9ecef;
  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
}
.card-content ul {
  list-style: none;
  padding: 0;
}
.card-content li {
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #dee2e6;
}
.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
}
@media (max-width: 768px) {
  .grid-3 {
    grid-template-columns: 1fr;
  }
}

/* 페이지 전체 센터 정렬 */
#page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 제목 센터 정렬 */
#page h1 {
  text-align: center;
  margin: 2rem auto;
}

/* 모든 헤딩 태그 센터 정렬 */
#page h1, #page h2, #page h3 {
  text-align: center;
}

/* 텍스트 컨테이너 센터 정렬 */
.text-center {
  text-align: center;
}

/* 인용구 스타일 개선 */
blockquote {
  text-align: center;
  font-style: italic;
  margin: 2rem auto;
  max-width: 600px;
}

/* 본문 텍스트 중앙 정렬 */
#page > p {
  text-align: center;
  max-width: 800px;
  margin: 1.5rem auto;
}

/* 수평선 스타일 */
hr {
  max-width: 400px;
  margin: 3rem auto;
  border: none;
  border-top: 2px solid #e9ecef;
}

/* 페이지 전체 스타일링 */
#page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  font-family: 'Noto Sans KR', 'Malgun Gothic', sans-serif;
}

/* 제목 스타일 */
#page h1 {
  text-align: center;
  margin: 2rem auto;
  color: #2c5f2d;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

/* 인용구 스타일 */
blockquote {
  text-align: center;
  font-style: italic;
  margin: 2rem auto;
  max-width: 600px;
  color: #5a6c5d;
  font-size: 1.2rem;
  border-left: 4px solid #97c93d;
  padding-left: 1rem;
  background: rgba(255,255,255,0.7);
  border-radius: 8px;
  padding: 1rem;
}

/* 본문 텍스트 */
#page > p {
  text-align: center;
  max-width: 800px;
  margin: 1.5rem auto;
  color: #4a5c4a;
  line-height: 1.8;
  font-size: 1.1rem;
}

/* 카드 스타일 개선 */
.card {
  background: linear-gradient(145deg, #ffffff, #f0f4f7);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid #e1e8ed;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.card-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #2c5f2d;
  text-align: center;
}

/* 섹션 제목 */
.section-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 3rem;
  color: #2c5f2d;
  font-weight: 700;
}

/* 리스트 아이템 */
.card-content li {
  margin-bottom: 1.2rem;
  padding: 0.8rem;
  border-bottom: 1px solid #e1e8ed;
  background: rgba(255,255,255,0.5);
  border-radius: 8px;
  margin-bottom: 0.8rem;
}

.card-content li strong {
  color: #2c5f2d;
}

.card-content li small {
  color: #6b7c6b;
}

/* 연락처 섹션 */
.text-center {
  text-align: center;
  color: #4a5c4a;
  font-size: 1.1rem;
}

/* 수평선 */
hr {
  max-width: 400px;
  margin: 3rem auto;
  border: none;
  border-top: 3px solid #97c93d;
  border-radius: 2px;
}

/* 링크 스타일 */
a {
  color: #2c5f2d;
  text-decoration: none;
  font-weight: 600;
}

a:hover {
  color: #97c93d;
  text-decoration: underline;
}

/* 페이지 전체 폰트 적용 */
#page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  font-family: 'Gowun Dodum', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif !important;
}

/* 모든 텍스트에 폰트 강제 적용 */
#page * {
  font-family: 'Gowun Dodum', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif !important;
}
</style>

# 안녕하세요, 정원사 툭히입니다

## "막연한 '나'를 이해하고 싶은 분들을 위해 만들어진 공간입니다."

우울증과 공황장애를 겪던 시절, 조금은 늦은 나이에 대학에 들어갔습니다.

비슷한 아픔을 가진 사람들을 돕고 싶어 상담심리학을 전공했지만, 실제 그 과정은 생각과 달랐습니다.

누군가에게 힘이 되고 싶어 시작한 공부가 그동안 외면했던 '나'를 마주하는 시간이었고, 그 과정이 얼마나 맵던지..

하지만 '나를 이해함'은 마음의 돌덩이들을 하나둘 내려놓게 했고, 시간이 흐른 지금은 건강함 속에 살아가고 있습니다.

다시 돌아가고 싶진 않습니다. 그러나 그 시간이 저에게 의미있었기에, 그 기억을 담아 '마음의 정원'을 가꾸고 있습니다.

---

<h2 class="section-title">쌓아온 경험과 배움</h2>

<div class="grid grid-3">
  <div class="card">
    <div class="card-content">
      <h3 class="card-title">이런 걸 배웠어요</h3>
      <ul>
        <li>
          <strong>상담심리학부 청소년상담학 전공</strong><br>
          <small>사회복지서비스 복수전공</small>
        </li>
        <li>
          <strong>전직지원 전문가 입문과정</strong><br>
          <small>한국기술교육대학교</small>
        </li>
        <li>
          <strong>취업희망 프로그램 진행자 양성교육</strong><br>
          <small>한국고용정보원</small>
        </li>
        <li>
          <strong>청년층고용지원과정</strong><br>
          <small>한국기술교육대학교</small>
        </li>
      </ul>
    </div>
  </div>

  <div class="card">
    <div class="card-content">
      <h3 class="card-title">이런 자격을 갖췄어요</h3>
      <ul>
        <li>
          <strong>사회복지사 1급</strong><br>
          <small>보건복지부</small>
        </li>
        <li>
          <strong>직업상담사 2급</strong><br>
          <small>고용노동부</small>
        </li>
        <li>
          <strong>청소년지도사 3급</strong><br>
          <small>여성가족부</small>
        </li>        
      </ul>
    </div>
  </div>
  
  <div class="card">
    <div class="card-content">
      <h3 class="card-title">이런 일들을 해왔어요</h3>
      <ul>
        <li>
          <strong>구직단념 청년 지원사업 기획 및 운영</strong><br>
          <small>청년도전 지원사업 실무 담당</small><br>
          <small>사업 기획 및 운영, 프로그램 설계 및 관리, 기관 네트워킹, 참여자 상담 및 사례관리</small>
        </li>
        <li>
          <strong>지자체 교육사업 기획 및 운영</strong><br>
          <small>사업계획 수립 및 성과관리</small><br>
          <small>프로그램 운영, 기업 파트너십 구축, 잡 매칭데이 기획 및 운영</small>
        </li>
        <li>
          <strong>고용노동부 취업지원제도</strong><br>
          <small>국민취업지원제도 전담상담사</small><br>
          <small>개인별 맞춤형 진로상담 및 취업 연계 지원</small>
        </li>
      </ul>
    </div>
  </div>
</div>

---

<div class="text-center">
<strong>E-mail</strong>: <a href="mailto:gardener.tookhee@gmail.com">gardener.tookhee@gmail.com</a>
</div>