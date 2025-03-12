document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');

    links.forEach(function(link) {
        let href = link.href;
        if (!href.startsWith('http')) {
            href = window.location.origin + href;
        }
        let url = new URL(href);
        if (!url.searchParams.has('source')) {
            let separator = url.search ? '&' : '?';
            url.searchParams.append('source', 'example.com');
            link.href = url.toString();
        }
    });
});
