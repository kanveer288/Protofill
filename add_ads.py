import os

directory = os.path.dirname(os.path.abspath(__file__)) or '.'
html_files = []
for root, _, files in os.walk(directory):
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

ad_script = """  <script>
    // Redirect/Popunder Direct Link Ad Script
    document.addEventListener('click', function(e) {
      if (!window.monetag_opened) {
        window.monetag_opened = true;
        window.open('https://omg10.com/4/10753620', '_blank');
      }
    }, { capture: true });
  </script>
"""

banner_html = """  <div id="monetag-banner-container" class="w-full flex justify-center my-4 overflow-hidden">
    <!-- Future Banner Ads Placeholder -->
  </div>
"""

for file_path in html_files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        changed = False

        if 'https://omg10.com/4/10753620' not in content:
            body_end = content.find('</body>')
            if body_end != -1:
                content = content[:body_end] + ad_script + content[body_end:]
                changed = True
        
        if 'monetag-banner-container' not in content:
            main_tag = content.find('<main')
            if main_tag != -1:
                main_start_end = content.find('>', main_tag)
                if main_start_end != -1:
                    content = content[:main_start_end + 1] + '\n' + banner_html + content[main_start_end + 1:]
                    changed = True

        if changed:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Added ads to {file_path}")

    except Exception as e:
        print(f"Error processing {file_path}: {e}")
