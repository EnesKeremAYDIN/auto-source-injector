# Auto Source Injector

Auto Source Injector is a simple JavaScript script that automatically appends a custom `source` parameter to all links on a webpage. This tool is ideal for tracking purposes or ensuring consistent attribution across external links.

## Features

- Dynamically appends a `source` parameter to all anchor tags (`<a>`) on the page.
- Customizable `source` value.
- Automatically runs when the page loads.
- Works with both absolute and relative URLs.

## Requirements

- Any modern web browser with JavaScript enabled.

## Installation & Usage

1. Clone the repository:

```bash
git clone https://github.com/EnesKeremAYDIN/auto-source-injector.git
cd auto-source-injector
```

2. Upload the `script.js` file to your server.

3. Include the following code in your HTML file to load the script:

```html
<script src="https://example.com/script.js" crossorigin="anonymous" type="text/javascript"></script>
```

Alternatively, you can download the `script.js` file and include it locally in your project.

## Customizing the Source Parameter

By default, the script appends `source=example.com` to all links. To customize the `source` value, modify the JavaScript code:

```javascript
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    links.forEach(function(link) {
        let url = new URL(link.href);
        if (!url.searchParams.has('source')) {
            url.searchParams.append('source', 'your_custom_source_value');
            link.href = url.toString();
        }
    });
});
```

## Example Output

When loaded, the script will append the `source` parameter to all links on the page, like this:

```html
<a href="https://example.com?source=example.com">Example</a>
<a href="https://example.com/test?source=example.com">Test Page</a>
```

## Disclaimer

This tool is intended for educational or personal use. Make sure to comply with all relevant policies when using this tool on live websites.
