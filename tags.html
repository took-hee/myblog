---
layout: default
title: "Tags"
permalink: /tags/
---

<h1 class="sr-only">태그별 글 목록</h1>

<div class="tags-container">
  <!-- 태그 클라우드 -->
  <div class="tag-cloud">
    {% assign tags = site.tags | sort %}
    {% for tag in tags %}
      <a href="#" class="tag-item" data-tag="{{ tag[0] }}">#{{ tag[0] }} ({{ tag[1] | size }})</a>
    {% endfor %}
  </div>

  <!-- 전체 글 목록 -->
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

  <!-- 태그별 섹션 -->
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
      
      tagSections.forEach(section => {
        section.classList.remove('active');
      });
      
      const targetSection = document.getElementById('tag-' + targetTag.replace(/\s+/g, '-').toLowerCase());
      if (targetSection) {
        targetSection.classList.add('active');
      }
      
      tagItems.forEach(tagItem => {
        tagItem.style.backgroundColor = '#2e5e4e';
      });
      this.style.backgroundColor = '#e58a5b';
    });
  });
});
</script>