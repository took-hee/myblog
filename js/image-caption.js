// 이미지 캡션을 SEO 친화적인 figure + figcaption 구조로 변환
document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('#post-page .content, .content, main');
    if (!content) return;

    // 이미지 바로 다음에 오는 em 태그 중 [캡션]으로 시작하는 것들을 찾기
    const images = content.querySelectorAll('img');
    
    images.forEach((img) => {
        // 이미지 다음 여러 형제 요소들을 차례로 확인
        let currentElement = img.nextElementSibling;
        let foundCaption = false;
        let attempts = 0;
        
        while (currentElement && attempts < 5) { // 최대 5개 요소까지 확인
            // EM 태그 직접 확인
            if (currentElement.tagName === 'EM') {
                const text = currentElement.textContent.trim();
                
                if (text.startsWith('[캡션]')) {
                    processCaption(img, currentElement, text);
                    foundCaption = true;
                    break;
                }
            }
            // P 태그 안의 EM 확인
            else if (currentElement.tagName === 'P') {
                const em = currentElement.querySelector('em');
                if (em) {
                    const text = em.textContent.trim();
                    
                    if (text.startsWith('[캡션]')) {
                        processCaption(img, em, text);
                        foundCaption = true;
                        break;
                    }
                }
            }
            
            currentElement = currentElement.nextElementSibling;
            attempts++;
        }
    });
    
    function processCaption(img, captionElement, text) {
        // [캡션] 부분 제거
        const captionText = text.substring(4).trim();
        
        // figure 요소 생성
        const figure = document.createElement('figure');
        figure.className = 'image-figure';
        
        // figcaption 요소 생성
        const figcaption = document.createElement('figcaption');
        figcaption.className = 'image-caption';
        figcaption.textContent = captionText;
        
        // 이미지를 figure로 감싸기
        img.parentNode.insertBefore(figure, img);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        
        // 원래 em 태그 제거
        if (captionElement.parentNode.tagName === 'P' && captionElement.parentNode.children.length === 1) {
            // p 태그 안에 em만 있다면 p 태그째 제거
            captionElement.parentNode.remove();
        } else {
            // em 태그만 제거
            captionElement.remove();
        }
    }
});