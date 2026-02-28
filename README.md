# Free Fire Tools & Blog – Professional Blogger Theme

Yeh theme ek professional blogger ke liye bana hai jisme **Free Fire tools** aur **blog section** dono hain.

## Structure

- **index.html** – Home: Tools grid + Latest blogs preview + About
- **blog.html** – Saari blogs ki listing
- **blog/post-example.html** – Sample blog post (ise copy karke naye posts bana sakte ho)
- **tools/** – Har tool ka alag page:
  - free-fire-info.html – Player ID se info
  - free-fire-change-bio.html – Bio text/copy
  - free-fire-ban-check.html – Ban status check
  - free-fire-outfit-check.html – Outfits/skins check
  - free-fire-visits-increaser.html – Visits tips + ID share
  - free-fire-spam-sender.html – Message templates (copy-paste)
- **css/styles.css** – Theme styling (dark, accent orange)
- **js/main.js** – Mobile menu toggle

## Naye blog kaise add karein

1. `blog` folder me nayi file banao, jaise `blog/naya-post.html`
2. `blog/post-example.html` ko copy karke content change karo (title, meta, heading, paragraphs)
3. `blog.html` aur `index.html` ke blog grid me naya card add karo:
   - Same structure: `blog-card` → image div, `blog-card-content`, meta, h3, p, "Read more" link
   - Link `blog/naya-post.html` pe point kare

## Tools ko real API se kaise connect karein

Abhi tools **demo** hain (sirf UI). Real data ke liye:

- **Free Fire Info / Ban Check / Outfit Check** – Agar koi public Free Fire API ho to uske endpoints use karke fetch karo aur result boxes me data dikhao.
- **Change Bio / Spam Sender / Visits** – Ye copy-paste/tips based hain; inme zyada backend nahi chahiye.

Theme use karne ke liye sirf folder ko kisi hosting (GitHub Pages, Netlify, Blogger export, etc.) par upload karo. Sab pages relative links use karti hain.
