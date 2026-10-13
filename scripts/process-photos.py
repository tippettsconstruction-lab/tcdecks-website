"""Resize photos to 800/1600px WebP (metadata stripped) for the site.

Usage: python3 scripts/process-photos.py <out_dir> <src_image>=<name> [...]
"""
import sys
from PIL import Image, ImageOps

out = sys.argv[1]
for arg in sys.argv[2:]:
    src, name = arg.rsplit('=', 1)
    im = ImageOps.exif_transpose(Image.open(src)).convert('RGB')  # re-encode drops EXIF/GPS
    for w in (800, 1600):
        c = im.copy()
        long_edge = max(c.width, c.height) if c.height > c.width else c.width
        if long_edge > w:
            s = w / long_edge
            c = c.resize((round(c.width * s), round(c.height * s)), Image.LANCZOS)
        c.save(f'{out}/{name}-{w}.webp', 'WEBP', quality=76, method=6)
    print(name)
