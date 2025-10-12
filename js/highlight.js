// 마크다운 하이라이트 문법 ==텍스트== 지원
document.addEventListener('DOMContentLoaded', function() {
    console.log('Highlight script loaded');
    
    const content = document.querySelector('#post-page .content, .content, main');
    if (!content) {
        console.log('Content element not found');
        return;
    }
    
    console.log('Content found:', content);

    // 간단한 방법: innerHTML 전체를 한번에 처리
    let html = content.innerHTML;
    console.log('Original HTML:', html);
    
    // ==텍스트== 패턴을 <mark>텍스트</mark>로 변환
    const highlightRegex = /==([^=]+)==/g;
    
    if (highlightRegex.test(html)) {
        console.log('Found == patterns in HTML');
        const newHtml = html.replace(/==([^=]+)==/g, '<mark>$1</mark>');
        console.log('New HTML:', newHtml);
        content.innerHTML = newHtml;
        console.log('HTML updated successfully');
    } else {
        console.log('No == patterns found in HTML');
    }
    
    console.log('Highlight processing completed');
});