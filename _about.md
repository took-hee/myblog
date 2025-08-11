---
layout: page
title: about
description: 정원사 툭히와 마음의 정원 소개
---

<style>
/* CSS 변수 */
:root {
  --color-primary: #2e5e4e;
  --color-primary-light: #49786c;
  --color-background: #fdf6e4;
  --color-secondary-bg: #f5f5dc;
  --color-accent-orange: #e58a5b;
  --color-text-primary: #2c3e50;
  --color-text-secondary: #7f8c8d;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --border-radius-lg: 12px;
  --transition: 0.3s ease;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* 인용구 스타일 */
.quote-box {
  text-align: center;
  font-style: bold;
  margin: var(--spacing-xl) auto;
  max-width: 1000px;
  color: #e58a5b;
  font-size: 1.1rem;
}

/* 본문 텍스트 */
p {
  text-align: center;
  max-width: 800px;
  margin: var(--spacing-lg) auto;
  color: var(--color-text-primary);
  line-height: 1.8;
  font-size: 0.9rem;
}

/* About 페이지 전용 카드 스타일 */
.card {
  background-color: white;
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow);
  transition: var(--transition);
  border: 1px solid #f0f0f0;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.card-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary);
  text-align: center;
}

/* About 페이지 리스트 스타일 */
.card-content ul {
  list-style: none;
  padding: 0;
}

.card-content li {
  margin-bottom: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--color-secondary-bg);
  border-radius: 8px;
  border-left: 3px solid var(--color-accent-orange);
}

.card-content li strong {
  color: var(--color-primary);
}

.card-content li small {
  color: var(--color-text-secondary);
}

/* 연락처 섹션 */
.contact-section {
  text-align: center;
  color: var(--color-text-primary);
  font-size: 1.1rem;
  margin-top: var(--spacing-2xl);
  padding: var(--spacing-lg);
  background: var(--color-secondary-bg);
  border-radius: var(--border-radius-lg);
}

/* 링크 스타일 */
a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
}

a:hover {
  color: var(--color-accent-orange);
  text-decoration: underline;
}
</style>
<h2 class="section-title">안녕하세요, 정원사 툭히입니다</h2>

<div class="quote-box">
막연한 '나'를 이해하고 싶은 분들을 위해 만들어진 공간입니다.
</div>


우울증과 공황장애를 겪던 시절,
조금은 늦은 나이에 대학에 들어갔습니다.<br>
비슷한 아픔을 가진 사람들을 돕고 싶어 상담심리학을 전공했지만,<br>
실제 그 과정은 생각과 달랐습니다.<br><br>

누군가에게 힘이 되고 싶어 시작한 공부가<br> 
그동안 외면했던 '나'를 마주하는 시간이었고, 그 과정이 얼마나 맵던지..<br><br>

하지만 '나를 이해함'은 마음의 돌덩이들을 하나둘 내려놓게 했고, <br>
시간이 흐른 지금은 건강함 속에 살아가고 있습니다.<br><br>

다시 돌아가고 싶진 않습니다.<br>
그러나 그 시간이 저에게 의미있었기에, 그 기억을 담아 '마음의 정원'을 가꾸고 있습니다.



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

<div class="contact-section">
<strong>E-mail</strong>: <a href="mailto:gardener.tookhee@gmail.com">gardener.tookhee@gmail.com</a>
</div>