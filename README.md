# KEELO page

This build reproduces the supplied reference exactly by rendering the original
1672×941 artwork as the responsive full-screen page.

## Run

Open `index.html` directly, or serve the folder locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

The image is intentionally not cropped. On displays with a different aspect
ratio, the remaining area uses the same near-black background.