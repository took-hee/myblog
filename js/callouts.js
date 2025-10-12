// GitHub Flavored Markdown Callouts 처리
document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('#post-page .content, .content, main');
    if (!content) return;

    // callout 패턴 정의
    const calloutPatterns = {
        'note': { className: 'callout-note', title: '노트' },
        'info': { className: 'callout-info', title: '정보' }
    };

    // blockquote에서 callout 패턴 찾기
    const blockquotes = content.querySelectorAll('blockquote');
    
    blockquotes.forEach(blockquote => {
        const firstP = blockquote.querySelector('p');
        if (!firstP) return;
        
        const text = firstP.textContent || firstP.innerText;
        const match = text.match(/^\[!(note|info)\]\s*(.*)/i);
        
        if (match) {
            const type = match[1].toLowerCase();
            const title = match[2].trim() || calloutPatterns[type].title;
            const pattern = calloutPatterns[type];
            
            // 첫 번째 p 태그에서 [!type] 부분 제거
            const remainingText = text.replace(/^\[!(note|info)\]\s*/, '').trim();
            
            // callout div 생성
            const calloutDiv = document.createElement('div');
            calloutDiv.className = `callout ${pattern.className}`;
            
            const titleDiv = document.createElement('div');
            titleDiv.className = 'callout-title';
            titleDiv.textContent = title;
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'callout-content';
            
            // 제목 이후의 내용 추가
            if (remainingText) {
                const p = document.createElement('p');
                p.textContent = remainingText;
                contentDiv.appendChild(p);
            }
            
            // 나머지 p 태그들 추가
            const otherPs = blockquote.querySelectorAll('p:not(:first-child)');
            otherPs.forEach(p => {
                contentDiv.appendChild(p.cloneNode(true));
            });
            
            calloutDiv.appendChild(titleDiv);
            calloutDiv.appendChild(contentDiv);
            
            // blockquote를 callout으로 교체
            blockquote.parentNode.replaceChild(calloutDiv, blockquote);
        }
    });
});