document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content');

    // content.mdファイルを読み込む
    fetch('content.md')
        .then(response => {
            if (!response.ok) {
                throw new Error('Markdownファイルの読み込みに失敗しました。');
            }
            return response.text();
        })
        .then(markdown => {
            // marked.jsを使ってMarkdownをHTMLに変換
            contentArea.innerHTML = marked.parse(markdown);
        })
        .catch(error => {
            console.error('エラー:', error);
            contentArea.innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
});