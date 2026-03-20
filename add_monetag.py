import os
import glob

# Use the current directory where the script is located
directory = os.path.dirname(os.path.abspath(__file__)) or '.'
html_files = []
for root, _, files in os.walk(directory):
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

meta_tag = '<meta name="monetag" content="02fb45f72d74cb3e0e8645f706c751af">'

for file_path in html_files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if meta_tag in content:
            continue
            
        head_end = content.find('</head>')
        if head_end != -1:
            content = content[:head_end] + '  ' + meta_tag + '\n' + content[head_end:]
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Added monetag to {file_path}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
