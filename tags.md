---
layout: default
title: Tags
---

<h1 class="sr-only">태그별 글 목록</h1>

<style>
.tags-container {
  margin-bottom: 3rem;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 3rem;
  justify-content: center;
}

.tag-item {
  background-color: #2e5e4e;
  color: #fdf6e4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tag-item:hover {
  background-color: #e58a5b;
  color: white;
  text-decoration: none;
  transform: translateY(-2px);
}

.tag-section {
  margin-bottom: 3rem;
  display: none;
}

.tag-section.active {
  display: block;
}

.tag-title {
  color: #2e5e4e;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e58a5b;
  padding-bottom: 0.5rem;
}

.tag-posts {
  list-style: none;
  padding: 0;
}

.tag-post-item {
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  border-left: 4px solid #2e5e4e;
}

.tag-post-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.tag-post-date {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.tag-post-tags {
  margin-top: 0.5rem;
}

.post-tag {
  background-color: #e58a5b;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  margin-right: 0.5rem;
}
</style>

<div class="tags-container">
  <!-- 태그 클라우드 -->
  <div class="tag-cloud">
    {% assign tags = site.tags | sort %}
    {% for tag in tags %}
      <a href="#" class="tag-item" data-tag="{{ tag[0] }}">#{{ tag[0] }} ({{ tag[1] | size }})</a>
    {% endfor %}
  </div>

  <!-- 전체 글 목록 (기본 표시) -->
  <div id="all-posts" class="tag-section active">
    <h2 class="tag-title">전체 글 ({{ site.posts | size }}개)</h2>
    <ul class="tag-posts">
      {% for post in site.posts %}
        <li class="tag-post-item">
          <div class="tag-post-title">
            <a href="{{ post.url }}">{{ post.title }}</a>
          </div>
          <div class="tag-post-date">{{ post.date | date: "%Y.%m.%d" }}</div>
          <div class="tag-post-tags">
            {% for tag in post.tags %}
              <span class="post-tag">#{{ tag }}</span>
            {% endfor %}
          </div>
        </li>
      {% endfor %}
    </ul>
  </div>

  <!-- 각 태그별 섹션 -->
  {% for tag in site.tags %}
    <div id="tag-{{ tag[0] | slugify }}" class="tag-section">
      <h2 class="tag-title">#{{ tag[0] }} ({{ tag[1] | size }}개)</h2>
      <ul class="tag-posts">
        {% for post in tag[1] %}
          <li class="tag-post-item">
            <div class="tag-post-title">
              <a href="{{ post.url }}">{{ post.title }}</a>
            </div>
            <div class="tag-post-date">{{ post.date | date: "%Y.%m.%d" }}</div>
            <div class="tag-post-tags">
              {% for ptag in post.tags %}
                <span class="post-tag">#{{ ptag }}</span>
              {% endfor %}
            </div>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const tagItems = document.querySelectorAll('.tag-item');
  const tagSections = document.querySelectorAll('.tag-section');
  
  tagItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const targetTag = this.dataset.tag;
      
      // 모든 섹션 숨기기
      tagSections.forEach(section => {
        section.classList.remove('active');
      });
      
      // 해당 태그 섹션 표시
      const targetSection = document.getElementById('tag-' + targetTag.replace(/\s+/g, '-').toLowerCase());
      if (targetSection) {
        targetSection.classList.add('active');
      }
      
      // 태그 아이템 활성화 상태 (선택사항)
      tagItems.forEach(tagItem => {
        tagItem.style.backgroundColor = '#2e5e4e';
      });
      this.style.backgroundColor = '#e58a5b';
    });
  });
});
</script>