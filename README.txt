SNES Standard 15-bit RGB Palette (32 colors)
--------------------------------------------
Description:
A compact 32-color SNES-style palette tuned for broad sprite and tile usage.
Colors are chosen to provide a balanced set for environments, characters and UI.

Files:
- palette.h   (declaration)
- palette.c   (array definition)
- README.txt  (this file)
- ASCII preview (in the marketplace listing)

Usage:
- Include palette.h in your C/C++ project and link palette.c
- For engines that accept hex colors, use the 0xRRGGBB values.
- Each color index is 0..31. You can export these into your toolchain as needed.

No external APIs required.
