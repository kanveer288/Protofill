import os

base_dir = os.path.dirname(os.path.abspath(__file__)) or '.'

html_files = [
    ("index.html", ""),
    ("tools/free-fire-ban-check.html", "../"),
    ("tools/free-fire-change-bio.html", "../"),
    ("tools/free-fire-info.html", "../"),
    ("tools/free-fire-outfit-check.html", "../"),
    ("tools/free-fire-spam-sender.html", "../"),
    ("tools/free-fire-visits-increaser.html", "../"),
]

for file_name, prefix in html_files:
    file_path = os.path.join(base_dir, file_name)
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        if 'class="main-nav-mobile' not in content:
            mobile_nav = f"""    <div class="main-nav-mobile hidden sm:hidden border-t border-replLightBorder dark:border-replDarkBorder bg-replLight/95 dark:bg-replDark/95 backdrop-blur-md px-4 py-3">
      <a href="{prefix}index.html#tools" class="block py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-replAccent">Tools</a>
      <a href="{prefix}blog.html" class="block py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-replAccent">Blog</a>
    </div>
"""
            header_end = content.find('</header>')
            if header_end != -1:
                content = content[:header_end] + mobile_nav + content[header_end:]
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed {file_path}")
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
