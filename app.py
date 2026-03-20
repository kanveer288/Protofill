from flask import Flask, send_from_directory
import os

# Create Flask app. 
# static_folder='.' means the root of the project is the static folder
# static_url_path='' means static files are served at the root URL path (e.g., /js/main.js)
app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

# Optional: route to handle URLs without .html extensions (if needed)
@app.route('/<path:path>')
def catch_all(path):
    # If the user goes to /tools/free-fire-info, serve the .html file if it exists
    if not os.path.exists(path) and os.path.exists(path + '.html'):
        return send_from_directory('.', path + '.html')
    # Otherwise just serve the requested path (for CSS, JS, Images, or exact HTML files)
    return send_from_directory('.', path)

if __name__ == '__main__':
    # Keep the custom config requested by the user
    app.run(host='0.0.0.0', port=5000, debug=True)
