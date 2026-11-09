# Diwali Patakha - AR Firecrackers (दिवाली पटाखा) 🪔✨

An Augmented Reality (AR) Diwali firecrackers web application. Burst crackers through your mobile camera or tilt down to place bombs, spinners, flowerpots, diyas, lanterns, and rangolis on the ground!

Equipped with 15+ Firecrackers, Shape Bursts, Sky Light-Painting, Target Mini-Game, Video Recorder, PWA, and Personalized Greetings.

---

## 📁 Project Structure

```text
diwali-patakha/
├── index.html            # Production version (uses CDN for Three.js & Google Fonts)
├── index_offline.html    # 100% Offline version (uses local Three.js and YatraOne font)
├── manifest.json         # PWA Manifest (Homescreen Installable)
├── sw.js                 # Service Worker (Offline caching)
├── validate.js           # Verification script
├── assets/
│   ├── three.module.js   # Three.js (r160) ES module
│   ├── YatraOne.ttf      # Local Yatra One font file
│   ├── icon-192.png      # PWA App Icon (192x192)
│   └── icon-512.png      # PWA App Icon (512x512)
└── README.md             # Documentation and usage guide
```

---

## 🌟 All Features & Upgrades Included

### 1. 🎆 Complete Cracker & Ground Arsenal
* **Custom Shape Fireworks**:
  - **Heart ❤️**: Romantic red & pink flaming heart burst with shimmering silver sparkles.
  - **Star ⭐**: 5-pointed golden star explosion with radiating white tips.
  - **Smiley 😊**: Golden smiley face with bright eyes and a grinning arc.
* **Sky Light-Painting ✍️**: Select **Sky Draw**, then tap and drag your finger across the sky to write names, initials, or draw glowing fire art that twinkles for ~10 seconds!
* **Floating Sky Lanterns (आकाश कंदील) 🏮**: Release warm, glowing paper lanterns with auspicious motifs into the night sky that float upwards and drift into the distance.
* **अनार (Anar / Flowerpot)**: Conical clay pot with rising high-altitude golden & silver spark fountain.
* **चकरी (Chakkar / Ground Spinner)**: Rapidly spinning wheel emitting tangential spiral fire rings, changing colors from gold to green to silver.
* **फुलझड़ी (Phuljhadi / Handheld Sparklers)**: Works in Sky and Ground modes. Tap or hold anywhere to create sizzling, crackling sparkler trails.
* **दीया (Diya / Clay Lamp)**: Traditional mitti ka diya placed on the floor with realistic warm flickering flame that stays glowing.
* **रंगोली (Shubh Rangoli)**: Sacred 12-petal mandala with vibrant festive colors placed on the ground.
* **Classic Firecrackers**: Rocket, Sky Shot (Peony & Chrysanthemum), Golden Rain, Crackling Shell, 12-Shot, Grand Finale, Atom Bomb, Sutli Bomb, Lakshmi Bomb, 100-Wala, and 1000-Wala.

---

### 2. 🎮 Mini-Game Mode: "Diwali Sky Target Burst"
* Tap the **Game Controller** button in the header.
* Glowing target rings float across the night sky.
* Launch rockets or shape bursts near targets to blow them up in a shower of rainbow confetti!
* Real-time HUD tracking: **Score**, **60-Second Timer**, and **Combo Multipliers (x1 to x5)**.
* Automatic Grand Finale celebration when time runs out!

---

### 3. 🎥 Video Recorder (Reels & WhatsApp Status)
* Tap the **Record Icon (Red Dot)** to record up to 15 seconds of live fireworks with synthesized explosive audio.
* Tap again to finish and download your `.webm` / `.mp4` video directly to your gallery.

---

### 4. 📸 Photo Snapshot & Diwali Watermark
* Tap the **Camera Icon** to capture a high-resolution snapshot with your camera background + fireworks.
* Stamps an ornate golden Diwali border and customized greeting watermark:
  `✨ Happy Diwali from [Name] ✨`

---

### 5. 🪔 Personalized Greeting Card (WhatsApp Viral Share)
* Tap the **Card Icon** to enter your name (e.g. `Mantu`).
* Share directly via WhatsApp or copy your link: `?from=Mantu`
* When opened, an animated festive banner floats at the top:
  `✨ Happy Diwali from Mantu ✨`

---

### 6. 🤳 Selfie & Rear Camera Flip
* Tap the **Flip Camera** button to toggle between back camera and front selfie camera. Celebrate and take Diwali selfies with fireworks in your background!

---

### 7. 🎵 Procedural Festive Ambient Music
* Toggle the **Music Note** icon for a soothing procedural classical raga (Bhupali / Mohanam) chime melody synthesized in real-time. Zero audio downloads required.

---

### 8. 📱 PWA (Install as Mobile App)
* Complete with `manifest.json`, high-res icons, and `sw.js` Service Worker.
* On Android Chrome or iOS Safari, click **"Add to Home Screen"** to install it as a native, full-screen offline app!

---

## 🚀 How to Run Locally

```powershell
cd d:\Mantu_code\diwali-patakha
python -m http.server 8000
```

Open in browser:
- **Default App**: [http://localhost:8000/](http://localhost:8000/)
- **Personalized Greeting**: [http://localhost:8000/?from=Mantu](http://localhost:8000/?from=Mantu)
- **100% Offline App**: [http://localhost:8000/index_offline.html](http://localhost:8000/index_offline.html)
