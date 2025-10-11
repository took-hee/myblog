var normal = document.getElementById("nav-menu");
var reverse = document.getElementById("nav-menu-left");

var icon = normal !== null ? normal : reverse;

// Toggle the "menu-open" % "menu-opn-left" classes
function toggle() {
	  var navRight = document.getElementById("nav");
	  var navLeft = document.getElementById("nav-left");
	  var nav = navRight !== null ? navRight : navLeft;

	  var button = document.getElementById("menu");
	  var site = document.getElementById("wrap");
	  
	  if (nav.className == "menu-open" || nav.className == "menu-open-left") {
	  	  nav.className = "";
	  	  button.className = "";
	  	  site.className = "";
	  } else if (reverse !== null) {
	  	  nav.className += "menu-open-left";
	  	  button.className += "btn-close";
	  	  site.className += "fixed";
	  } else {
	  	  nav.className += "menu-open";
	  	  button.className += "btn-close";
	  	  site.className += "fixed";
	    }
	}

// Ensures backward compatibility with IE old versions
function menuClick() {
	if (document.addEventListener && icon !== null) {
		icon.addEventListener('click', toggle);
	} else if (document.attachEvent && icon !== null) {
		icon.attachEvent('onclick', toggle);
	} else {
		return;
	}
}

menuClick();

// 모든 링크를 새 창으로 열기 설정
function setLinksToOpenInNewTab() {
    // 페이지가 완전히 로드된 후 실행
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            applyTargetBlank();
        });
    } else {
        applyTargetBlank();
    }
}

function applyTargetBlank() {
    // 포스트 콘텐츠 영역의 모든 링크를 선택
    var postContent = document.querySelector('#post-page .content');
    
    if (postContent) {
        var links = postContent.querySelectorAll('a');
        
        links.forEach(function(link) {
            var href = link.getAttribute('href');
            
            // 공유 버튼들은 제외 (이미 target="_blank"가 설정되어 있음)
            if (link.classList.contains('share-btn')) {
                return;
            }
            
            // 이미 target 속성이 설정되어 있지 않은 경우에만 추가
            if (!link.getAttribute('target') && href) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }
    
    // 메인 페이지나 다른 페이지의 외부 링크만 처리
    var allContentLinks = document.querySelectorAll('main a, #posts a');
    
    allContentLinks.forEach(function(link) {
        var href = link.getAttribute('href');
        
        // 외부 링크인지 확인 (http:// 또는 https://로 시작하는 절대 URL)
        if (href && 
            (href.startsWith('http://') || href.startsWith('https://')) &&
            !href.includes(window.location.hostname) &&
            !link.getAttribute('target')) {
            
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// 링크 새 창 열기 기능 실행
setLinksToOpenInNewTab();