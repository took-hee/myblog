class HTMLEditor {
    constructor() {
        this.editor = document.getElementById('htmlEditor');
        this.preview = document.getElementById('preview');
        this.status = document.getElementById('status');
        this.lineCount = document.getElementById('lineCount');
        this.notification = document.getElementById('notification');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updatePreview();
        this.updateLineCount();
        this.setStatus('준비됨');
    }
    
    setupEventListeners() {
        // 실시간 업데이트
        this.editor.addEventListener('input', () => {
            this.updatePreview();
            this.updateLineCount();
        });
        
        // 키보드 단축키
        this.editor.addEventListener('keydown', (e) => {
            // Ctrl+S로 저장 (실제로는 복사)
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                this.copyCode();
            }
            
            // Tab 키 처리
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = this.editor.selectionStart;
                const end = this.editor.selectionEnd;
                
                this.editor.value = this.editor.value.substring(0, start) + 
                                  '    ' + 
                                  this.editor.value.substring(end);
                
                this.editor.selectionStart = this.editor.selectionEnd = start + 4;
            }
        });
        
        // 버튼 이벤트
        document.getElementById('copyBtn').addEventListener('click', () => {
            this.copyCode();
        });
        
        document.getElementById('clearBtn').addEventListener('click', () => {
            this.clearCode();
        });
        
        document.getElementById('refreshBtn').addEventListener('click', () => {
            this.updatePreview();
        });
        
        document.getElementById('fullscreenBtn').addEventListener('click', () => {
            this.toggleFullscreen();
        });
        
        // 창 크기 변경 시 업데이트
        window.addEventListener('resize', () => {
            this.updatePreview();
        });
    }
    
    updatePreview() {
        try {
            const htmlContent = this.editor.value;
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            
            this.preview.src = url;
            this.setStatus('미리보기 업데이트됨');
            
            // 이전 URL 정리
            setTimeout(() => {
                URL.revokeObjectURL(url);
            }, 1000);
            
        } catch (error) {
            console.error('미리보기 업데이트 오류:', error);
            this.setStatus('오류 발생', true);
        }
    }
    
    updateLineCount() {
        const lines = this.editor.value.split('\n').length;
        this.lineCount.textContent = `줄: ${lines}`;
    }
    
    async copyCode() {
        try {
            await navigator.clipboard.writeText(this.editor.value);
            this.showNotification('코드가 클립보드에 복사되었습니다!', 'success');
            this.setStatus('코드 복사됨');
        } catch (error) {
            // 클립보드 API가 지원되지 않는 경우 fallback
            this.fallbackCopyCode();
        }
    }
    
    fallbackCopyCode() {
        try {
            this.editor.select();
            document.execCommand('copy');
            this.showNotification('코드가 클립보드에 복사되었습니다!', 'success');
            this.setStatus('코드 복사됨');
        } catch (error) {
            this.showNotification('복사에 실패했습니다. 수동으로 선택해서 복사해주세요.', 'error');
            this.setStatus('복사 실패', true);
        }
    }
    
    clearCode() {
        if (confirm('정말로 모든 코드를 지우시겠습니까?')) {
            this.editor.value = '';
            this.updatePreview();
            this.updateLineCount();
            this.setStatus('코드 지워짐');
            this.showNotification('코드가 지워졌습니다.', 'success');
        }
    }
    
    toggleFullscreen() {
        const previewPanel = document.querySelector('.preview-panel');
        
        if (previewPanel.classList.contains('fullscreen')) {
            previewPanel.classList.remove('fullscreen');
            document.body.classList.remove('fullscreen-mode');
            this.showNotification('전체화면 모드 해제', 'success');
        } else {
            previewPanel.classList.add('fullscreen');
            document.body.classList.add('fullscreen-mode');
            this.showNotification('전체화면 모드 활성화', 'success');
        }
    }
    
    setStatus(message, isError = false) {
        this.status.textContent = message;
        this.status.style.color = isError ? '#ff6b6b' : 'white';
    }
    
    showNotification(message, type = 'success') {
        this.notification.textContent = message;
        this.notification.className = `notification ${type}`;
        this.notification.classList.add('show');
        
        setTimeout(() => {
            this.notification.classList.remove('show');
        }, 3000);
    }
}

// 추가 CSS for fullscreen mode
const additionalStyles = `
    .fullscreen {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 9999 !important;
        border-radius: 0 !important;
    }
    
    .fullscreen-mode {
        overflow: hidden;
    }
    
    .fullscreen .preview-wrapper {
        height: calc(100vh - 60px) !important;
    }
`;

// 스타일 추가
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    new HTMLEditor();
    
    // 환영 메시지
    setTimeout(() => {
        const notification = document.getElementById('notification');
        notification.textContent = 'HTML 편집기에 오신 것을 환영합니다! 왼쪽에서 코드를 수정해보세요.';
        notification.className = 'notification success';
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 4000);
    }, 1000);
});

// 키보드 단축키 도움말
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        alert(`키보드 단축키:
        
Ctrl + S: 코드 복사
Ctrl + /: 이 도움말 보기
Tab: 들여쓰기 추가
        
기능:
- 실시간 HTML 미리보기
- 코드 복사 (Ctrl+S 또는 복사 버튼)
- 코드 지우기
- 전체화면 미리보기
- 반응형 디자인`);
    }
});

// 에러 처리
window.addEventListener('error', (e) => {
    console.error('JavaScript 오류:', e.error);
});

// 성능 최적화를 위한 디바운스 함수
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}



// 추가 기능들
class EditorEnhancements {
    constructor(editor) {
        this.editor = editor;
        this.lineNumbers = null;
        this.currentTheme = 'light';
        this.searchVisible = false;
        this.init();
    }
    
    init() {
        this.createLineNumbers();
        this.createThemeSelector();
        this.createSearchBar();
        this.setupDragAndDrop();
        this.setupAutoComplete();
        this.setupKeyboardShortcuts();
    }
    
    createLineNumbers() {
        const editorWrapper = document.querySelector('.editor-wrapper');
        this.lineNumbers = document.createElement('div');
        this.lineNumbers.className = 'line-numbers';
        editorWrapper.appendChild(this.lineNumbers);
        
        this.editor.editor.classList.add('with-line-numbers');
        this.updateLineNumbers();
        
        this.editor.editor.addEventListener('input', () => {
            this.updateLineNumbers();
        });
        
        this.editor.editor.addEventListener('scroll', () => {
            this.lineNumbers.scrollTop = this.editor.editor.scrollTop;
        });
    }
    
    updateLineNumbers() {
        const lines = this.editor.editor.value.split('\n').length;
        let lineNumbersHTML = '';
        
        for (let i = 1; i <= lines; i++) {
            lineNumbersHTML += `${i}\n`;
        }
        
        this.lineNumbers.textContent = lineNumbersHTML;
    }
    
    createThemeSelector() {
        const panelHeader = document.querySelector('.editor-panel .panel-header');
        const themeSelector = document.createElement('div');
        themeSelector.className = 'theme-selector';
        themeSelector.innerHTML = `
            <select id="themeSelect">
                <option value="light">라이트 테마</option>
                <option value="dark">다크 테마</option>
            </select>
        `;
        panelHeader.appendChild(themeSelector);
        
        document.getElementById('themeSelect').addEventListener('change', (e) => {
            this.changeTheme(e.target.value);
        });
    }
    
    changeTheme(theme) {
        this.currentTheme = theme;
        
        if (theme === 'dark') {
            this.editor.editor.classList.add('dark-theme');
            this.lineNumbers.classList.add('dark-theme');
        } else {
            this.editor.editor.classList.remove('dark-theme');
            this.lineNumbers.classList.remove('dark-theme');
        }
        
        this.editor.showNotification(`${theme === 'dark' ? '다크' : '라이트'} 테마로 변경되었습니다.`, 'info');
    }
    
    createSearchBar() {
        const editorWrapper = document.querySelector('.editor-wrapper');
        const searchBar = document.createElement('div');
        searchBar.className = 'search-bar';
        searchBar.innerHTML = `
            <input type="text" id="searchInput" placeholder="검색...">
            <button id="searchNext">다음</button>
            <button id="searchPrev">이전</button>
            <button id="searchClose">×</button>
        `;
        editorWrapper.appendChild(searchBar);
        
        document.getElementById('searchNext').addEventListener('click', () => {
            this.searchNext();
        });
        
        document.getElementById('searchPrev').addEventListener('click', () => {
            this.searchPrev();
        });
        
        document.getElementById('searchClose').addEventListener('click', () => {
            this.toggleSearch();
        });
        
        document.getElementById('searchInput').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.shiftKey ? this.searchPrev() : this.searchNext();
            }
            if (e.key === 'Escape') {
                this.toggleSearch();
            }
        });
    }
    
    toggleSearch() {
        const searchBar = document.querySelector('.search-bar');
        this.searchVisible = !this.searchVisible;
        
        if (this.searchVisible) {
            searchBar.classList.add('show');
            document.getElementById('searchInput').focus();
        } else {
            searchBar.classList.remove('show');
        }
    }
    
    searchNext() {
        const searchTerm = document.getElementById('searchInput').value;
        if (!searchTerm) return;
        
        const content = this.editor.editor.value;
        const currentPos = this.editor.editor.selectionStart;
        const nextPos = content.indexOf(searchTerm, currentPos + 1);
        
        if (nextPos !== -1) {
            this.editor.editor.setSelectionRange(nextPos, nextPos + searchTerm.length);
            this.editor.editor.focus();
        } else {
            // 처음부터 다시 검색
            const firstPos = content.indexOf(searchTerm);
            if (firstPos !== -1) {
                this.editor.editor.setSelectionRange(firstPos, firstPos + searchTerm.length);
                this.editor.editor.focus();
            }
        }
    }
    
    searchPrev() {
        const searchTerm = document.getElementById('searchInput').value;
        if (!searchTerm) return;
        
        const content = this.editor.editor.value;
        const currentPos = this.editor.editor.selectionStart;
        const prevPos = content.lastIndexOf(searchTerm, currentPos - 1);
        
        if (prevPos !== -1) {
            this.editor.editor.setSelectionRange(prevPos, prevPos + searchTerm.length);
            this.editor.editor.focus();
        } else {
            // 끝부터 다시 검색
            const lastPos = content.lastIndexOf(searchTerm);
            if (lastPos !== -1) {
                this.editor.editor.setSelectionRange(lastPos, lastPos + searchTerm.length);
                this.editor.editor.focus();
            }
        }
    }
    
    setupDragAndDrop() {
        const editorWrapper = document.querySelector('.editor-wrapper');
        const dropZone = document.createElement('div');
        dropZone.className = 'drop-zone';
        dropZone.innerHTML = '<div>HTML 파일을 여기에 드롭하세요</div>';
        editorWrapper.appendChild(dropZone);
        
        editorWrapper.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('active');
        });
        
        editorWrapper.addEventListener('dragleave', (e) => {
            if (!editorWrapper.contains(e.relatedTarget)) {
                dropZone.classList.remove('active');
            }
        });
        
        editorWrapper.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('active');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0];
                if (file.type === 'text/html' || file.name.endsWith('.html')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.editor.editor.value = e.target.result;
                        this.editor.updatePreview();
                        this.editor.updateLineCount();
                        this.updateLineNumbers();
                        this.editor.showNotification('파일이 로드되었습니다!', 'success');
                    };
                    reader.readAsText(file);
                } else {
                    this.editor.showNotification('HTML 파일만 지원됩니다.', 'error');
                }
            }
        });
    }
    
    setupAutoComplete() {
        const editorWrapper = document.querySelector('.editor-wrapper');
        const autocomplete = document.createElement('div');
        autocomplete.className = 'autocomplete';
        editorWrapper.appendChild(autocomplete);
        
        const htmlTags = [
            'html', 'head', 'title', 'body', 'div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'a', 'img', 'ul', 'ol', 'li', 'table', 'tr', 'td', 'th', 'form', 'input', 'button',
            'script', 'style', 'link', 'meta', 'header', 'footer', 'nav', 'section', 'article'
        ];
        
        let selectedIndex = -1;
        
        this.editor.editor.addEventListener('input', (e) => {
            const cursorPos = this.editor.editor.selectionStart;
            const textBeforeCursor = this.editor.editor.value.substring(0, cursorPos);
            const match = textBeforeCursor.match(/<(\w*)$/);
            
            if (match) {
                const partial = match[1];
                const suggestions = htmlTags.filter(tag => 
                    tag.toLowerCase().startsWith(partial.toLowerCase())
                );
                
                if (suggestions.length > 0) {
                    this.showAutoComplete(suggestions, autocomplete);
                } else {
                    this.hideAutoComplete(autocomplete);
                }
            } else {
                this.hideAutoComplete(autocomplete);
            }
        });
        
        this.editor.editor.addEventListener('keydown', (e) => {
            const items = autocomplete.querySelectorAll('.autocomplete-item');
            
            if (autocomplete.classList.contains('show') && items.length > 0) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
                    this.updateAutoCompleteSelection(items, selectedIndex);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    selectedIndex = Math.max(selectedIndex - 1, 0);
                    this.updateAutoCompleteSelection(items, selectedIndex);
                } else if (e.key === 'Enter' && selectedIndex >= 0) {
                    e.preventDefault();
                    this.insertAutoComplete(items[selectedIndex].textContent);
                    this.hideAutoComplete(autocomplete);
                } else if (e.key === 'Escape') {
                    this.hideAutoComplete(autocomplete);
                }
            }
        });
    }
    
    showAutoComplete(suggestions, autocomplete) {
        autocomplete.innerHTML = suggestions.map(tag => 
            `<div class="autocomplete-item">${tag}</div>`
        ).join('');
        
        autocomplete.classList.add('show');
        
        // 위치 조정
        const rect = this.editor.editor.getBoundingClientRect();
        autocomplete.style.left = '20px';
        autocomplete.style.top = '100px';
        
        // 클릭 이벤트 추가
        autocomplete.querySelectorAll('.autocomplete-item').forEach(item => {
            item.addEventListener('click', () => {
                this.insertAutoComplete(item.textContent);
                this.hideAutoComplete(autocomplete);
            });
        });
    }
    
    hideAutoComplete(autocomplete) {
        autocomplete.classList.remove('show');
        autocomplete.innerHTML = '';
    }
    
    updateAutoCompleteSelection(items, selectedIndex) {
        items.forEach((item, index) => {
            item.classList.toggle('selected', index === selectedIndex);
        });
    }
    
    insertAutoComplete(tag) {
        const cursorPos = this.editor.editor.selectionStart;
        const textBeforeCursor = this.editor.editor.value.substring(0, cursorPos);
        const textAfterCursor = this.editor.editor.value.substring(cursorPos);
        const match = textBeforeCursor.match(/<(\w*)$/);
        
        if (match) {
            const newText = textBeforeCursor.substring(0, match.index) + 
                           `<${tag}>` + textAfterCursor;
            this.editor.editor.value = newText;
            this.editor.editor.setSelectionRange(
                match.index + tag.length + 2, 
                match.index + tag.length + 2
            );
            this.editor.updatePreview();
            this.updateLineNumbers();
        }
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+F: 검색
            if (e.ctrlKey && e.key === 'f') {
                e.preventDefault();
                this.toggleSearch();
            }
            
            // Ctrl+D: 다크 테마 토글
            if (e.ctrlKey && e.key === 'd') {
                e.preventDefault();
                const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
                document.getElementById('themeSelect').value = newTheme;
                this.changeTheme(newTheme);
            }
        });
    }
}

// 기존 HTMLEditor 클래스 확장
document.addEventListener('DOMContentLoaded', () => {
    const editor = new HTMLEditor();
    const enhancements = new EditorEnhancements(editor);
    
    // 추가 툴팁 설정
    document.querySelectorAll('.btn').forEach(btn => {
        const title = btn.getAttribute('title');
        if (title) {
            btn.classList.add('tooltip');
            btn.setAttribute('data-tooltip', title);
        }
    });
});

