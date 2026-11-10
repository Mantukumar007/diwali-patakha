# Diwali Patakha - AR Firecrackers (दिवाली पटाखा) 🪔✨

An Augmented Reality (AR) Diwali firecrackers web application. Burst crackers through your mobile camera or tilt down to place bombs, spinners, flowerpots, diyas, lanterns, and rangolis on the ground!

Equipped with 15+ Firecrackers, Shape Bursts, Sky Light-Painting, Camera Flip, Photo Snapshot, and PWA offline installation.

---

## 📁 Project Structure

```text
diwali-patakha/
├── index.html            # Production AR Web App (Three.js WebGL + AR Camera + Audio)
├── manifest.json         # PWA Manifest (Homescreen Installable)
├── sw.js                 # Service Worker (v4 Network-First offline caching)
├── assets/
│   ├── three.module.js   # Three.js (r160) ES module
│   ├── YatraOne.ttf      # Local Yatra One font file
│   ├── icon-192.png      # PWA App Icon (192x192)
│   └── icon-512.png      # PWA App Icon (512x512)
└── README.md             # Documentation and usage guide
```

---

## 🌟 All Features & Arsenal

### 1. 🎆 Complete Cracker & Ground Arsenal
* **Custom Shape Fireworks**:
  - **Heart ❤️**: Romantic red & pink flaming heart burst with shimmering silver sparkles.
  - **Star ⭐**: 5-pointed golden star explosion with radiating white tips.
  - **Smiley 😊**: Golden smiley face with bright eyes and a grinning arc.
* **Sky Light-Painting ✍️**: Select **Sky Draw**, then drag your finger across the sky to write names, initials, or draw glowing fire art that twinkles in 3D space!
* **Floating Sky Lanterns (आकाश कंदील) 🏮**: Release warm, glowing paper lanterns with auspicious motifs that float upwards and drift into the night sky.
* **अनार (Anar / Flowerpot)**: Conical clay pot with rising golden & silver spark fountain.
* **चकरी (Chakkar / Ground Spinner)**: Rapidly spinning wheel emitting tangential spiral fire rings, shifting from gold to green to silver.
* **फुलझड़ी (Phuljhadi / Handheld Sparklers)**: Works in Sky and Ground modes. Tap or hold anywhere to create sizzling, crackling sparkler trails.
* **दीया (Diya / Clay Lamp)**: Traditional mitti ka diya placed on the floor with realistic warm flickering flame.
* **रंगोली (Shubh Rangoli)**: Sacred 12-petal mandala with vibrant festive colors placed on the ground.
* **Classic Firecrackers**: Rocket, Sky Shot (Peony & Chrysanthemum), Golden Rain, Crackling Shell, 12-Shot, Grand Finale, Atom Bomb, Sutli Bomb, Lakshmi Bomb, 100-Wala, and 1000-Wala.

---

### 2. 🤳 Selfie & Rear Camera Flip
* Tap the **Flip Camera** button in the action dock to toggle between back camera and front selfie camera. Celebrate and take Diwali selfies with fireworks bursting behind you!

---

### 3. 📸 Photo Snapshot & Diwali Border
* Tap the **Camera Icon** to capture a high-resolution snapshot combining your real camera scene and active fireworks.
* Adds a golden border and festive `✨ Shubh Deepavali ✨` watermark, ready to save to your photo gallery.

---

### 4. 🔊 Authentic Firecracker Sound & Haptics
* 100% synthesized procedural sound effects (thuds, whistles, crackles, pops, and bangs).
* Haptic vibration feedback on compatible mobile devices for real physical sensation.

---

### 5. 📱 PWA (Install as Mobile App)
* Fast, lightweight, and installable via `manifest.json` and `sw.js` (v4).
* On Android Chrome or iOS Safari, click **"Add to Home Screen"** to install it as a full-screen AR app!

---

## 🚀 How to Run Locally

```powershell
cd d:\Mantu_code\diwali-patakha
python -m http.server 8000
```

Open in browser:
- [http://localhost:8000/](http://localhost:8000/)
