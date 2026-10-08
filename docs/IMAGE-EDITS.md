# Retoque de las seis fotos del gimnasio

Método: image_gen integrado; una llamada de edición por original, en un único lote paralelo. Se inspeccionaron los seis originales con view_image antes de editar. Se usó referenced_image_paths con un único original por llamada y transparent_background: false. Las seis llamadas terminaron correctamente; no se regeneró ninguna imagen al recuperar el lote.

## Notas de fidelidad

La inspección visual confirma que se conservan la escena y distribución general, los aparatos principales, paredes verdes, reflejos y desgaste visible. Mejoran exposición y definición. No son transformaciones deterministas de píxeles: aparecen pequeñas reinterpretaciones en contornos, texturas y rotulación.

- gym-principal: mantiene el rack, poleas, discos, espejos y pintura gastada; mayor claridad y exposición.
- pesas: mantiene el rack de tres niveles, conjunto de mancuernas, toalla, espejo y maquinaria roja. Hay variaciones pequeñas en cifras/logotipos grabados y detalles de desgaste.
- maquinas: conserva máquina inclinada, mural de Hulk, collage lateral, pelotas y máquina roja. El texto pequeño del paño/banner presenta reinterpretación; no se debe afirmar rotulación idéntica.
- espacio: conserva máquina verde, discos, barras, cuerda, asiento roto y persona parcial a la izquierda. El mural se mantiene reconocible, pero la pequeña firma «OMAR» del original desaparece y algunos trazos cambian.
- cardio: conserva bicicleta, su reflejo, banco, botellas y toalla. Mejora mucho la exposición. La rotulación pequeña y texturas se reinterpretan ligeramente.
- entrada: conserva estación, banco, botella, toalla, suelo gastado, mural, vehículo, edificio vecino y cables. Sigue siendo una escena al anochecer. Algunos detalles de logotipos/rotulación y trazos del mural varían.

## Mapeo y prompts exactos

### gym-principal

Original: IMG_1510.jpeg

Archivo final: [assets/gym-principal-mejorada.webp](../assets/gym-principal-mejorada.webp)

```text
Use case: lighting-weather.
Asset type: faithful photo retouch for a real gym website.
Input image 1 is the ONLY edit target. Improve THIS SAME photograph with restrained natural real-estate photography postprocessing: slightly improve exposure, recover shadows without flattening them, balance existing light, gently correct white balance, modest detail and clarity, soft contrast, reduce image noise. This is faithful photographic retouching, not recreation or redesign. Keep the actual room and every depicted object exactly as photographed. Preserve the original framing and displayed aspect ratio. If needed use only a tiny global perspective correction with no missing scene content. Preserve exact equipment shapes, count, position, proportions, cables, weights, furniture, reflections, walls, floor, ceiling, textures, paint wear, rust, cracks, stains and real imperfections. Preserve lime green walls and existing murals, logos, labels and all text unchanged. Do not reconstruct, invent, beautify or replace mural art or writing. Preserve any existing person or partial person unchanged. Do not add, remove, replace or reposition any equipment, people, objects or spaces. Do not clean away real wear or clutter. No luxury renovation, no new objects, no changed gym identity, no CGI, no illustration, no collage, no UI, no new text, no watermark. Opaque output.
Specific invariants: Portrait 3:4 photo of the silver worn squat/pulley rack against lime green and black walls and mirrors. Preserve the whole rack, visible plates on the floor and to the right, the left pulley machine and mirror reflections exactly. Improve natural light without removing any wear.
```

### pesas

Original: IMG_1506.jpeg

Archivo final: [assets/pesas-mejorada.webp](../assets/pesas-mejorada.webp)

```text
Use case: lighting-weather.
Asset type: faithful photo retouch for a real gym website.
Input image 1 is the ONLY edit target. Improve THIS SAME photograph with restrained natural real-estate photography postprocessing: slightly improve exposure, recover shadows without flattening them, balance existing light, gently correct white balance, modest detail and clarity, soft contrast, reduce image noise. This is faithful photographic retouching, not recreation or redesign. Keep the actual room and every depicted object exactly as photographed. Preserve the original framing and displayed aspect ratio. If needed use only a tiny global perspective correction with no missing scene content. Preserve exact equipment shapes, count, position, proportions, cables, weights, furniture, reflections, walls, floor, ceiling, textures, paint wear, rust, cracks, stains and real imperfections. Preserve lime green walls and existing murals, logos, labels and all text unchanged. Do not reconstruct, invent, beautify or replace mural art or writing. Preserve any existing person or partial person unchanged. Do not add, remove, replace or reposition any equipment, people, objects or spaces. Do not clean away real wear or clutter. No luxury renovation, no new objects, no changed gym identity, no CGI, no illustration, no collage, no UI, no new text, no watermark. Opaque output.
Specific invariants: Landscape 4:3 close photo of a three-tier black dumbbell rack. Preserve every dumbbell and its embossed numbers/logos, chipped paint, rust, white numeric stickers, mirror reflections, red machinery and the white towel at the back. Keep the angled overhead framing exactly.
```

### maquinas

Original: IMG_1512.jpeg

Archivo final: [assets/maquinas-mejorada.webp](../assets/maquinas-mejorada.webp)

```text
Use case: lighting-weather.
Asset type: faithful photo retouch for a real gym website.
Input image 1 is the ONLY edit target. Improve THIS SAME photograph with restrained natural real-estate photography postprocessing: slightly improve exposure, recover shadows without flattening them, balance existing light, gently correct white balance, modest detail and clarity, soft contrast, reduce image noise. This is faithful photographic retouching, not recreation or redesign. Keep the actual room and every depicted object exactly as photographed. Preserve the original framing and displayed aspect ratio. If needed use only a tiny global perspective correction with no missing scene content. Preserve exact equipment shapes, count, position, proportions, cables, weights, furniture, reflections, walls, floor, ceiling, textures, paint wear, rust, cracks, stains and real imperfections. Preserve lime green walls and existing murals, logos, labels and all text unchanged. Do not reconstruct, invent, beautify or replace mural art or writing. Preserve any existing person or partial person unchanged. Do not add, remove, replace or reposition any equipment, people, objects or spaces. Do not clean away real wear or clutter. No luxury renovation, no new objects, no changed gym identity, no CGI, no illustration, no collage, no UI, no new text, no watermark. Opaque output.
Specific invariants: Portrait 3:4 photo of the black angled leg-press/hack machine in front of the Hulk mural on the green wall. Preserve black-and-white poster collage at left, red machine, medicine balls, towel/banner, mirrored or painted detail, chipped plates, painted logos, machine geometry and all mural art exactly.
```

### espacio

Original: IMG_1516.jpeg

Archivo final: [assets/espacio-mejorada.webp](../assets/espacio-mejorada.webp)

```text
Use case: lighting-weather.
Asset type: faithful photo retouch for a real gym website.
Input image 1 is the ONLY edit target. Improve THIS SAME photograph with restrained natural real-estate photography postprocessing: slightly improve exposure, recover shadows without flattening them, balance existing light, gently correct white balance, modest detail and clarity, soft contrast, reduce image noise. This is faithful photographic retouching, not recreation or redesign. Keep the actual room and every depicted object exactly as photographed. Preserve the original framing and displayed aspect ratio. If needed use only a tiny global perspective correction with no missing scene content. Preserve exact equipment shapes, count, position, proportions, cables, weights, furniture, reflections, walls, floor, ceiling, textures, paint wear, rust, cracks, stains and real imperfections. Preserve lime green walls and existing murals, logos, labels and all text unchanged. Do not reconstruct, invent, beautify or replace mural art or writing. Preserve any existing person or partial person unchanged. Do not add, remove, replace or reposition any equipment, people, objects or spaces. Do not clean away real wear or clutter. No luxury renovation, no new objects, no changed gym identity, no CGI, no illustration, no collage, no UI, no new text, no watermark. Opaque output.
Specific invariants: Portrait 3:4 photo of a green angled weight machine and stacked plates in front of the large colorful Dragon Ball wall mural. Preserve mural art exactly, the partially visible person and hand at the far left, bars leaning against the wall, rope on the floor, ripped black seat, chipped green paint and all plates and their positions.
```

### cardio

Original: IMG_1513.jpeg

Archivo final: [assets/cardio-mejorada.webp](../assets/cardio-mejorada.webp)

```text
Use case: lighting-weather.
Asset type: faithful photo retouch for a real gym website.
Input image 1 is the ONLY edit target. Improve THIS SAME photograph with restrained natural real-estate photography postprocessing: slightly improve exposure, recover shadows without flattening them, balance existing light, gently correct white balance, modest detail and clarity, soft contrast, reduce image noise. This is faithful photographic retouching, not recreation or redesign. Keep the actual room and every depicted object exactly as photographed. Preserve the original framing and displayed aspect ratio. If needed use only a tiny global perspective correction with no missing scene content. Preserve exact equipment shapes, count, position, proportions, cables, weights, furniture, reflections, walls, floor, ceiling, textures, paint wear, rust, cracks, stains and real imperfections. Preserve lime green walls and existing murals, logos, labels and all text unchanged. Do not reconstruct, invent, beautify or replace mural art or writing. Preserve any existing person or partial person unchanged. Do not add, remove, replace or reposition any equipment, people, objects or spaces. Do not clean away real wear or clutter. No luxury renovation, no new objects, no changed gym identity, no CGI, no illustration, no collage, no UI, no new text, no watermark. Opaque output.
Specific invariants: Portrait 3:4 photo of a white stationary spinning bike in front of a mirror and lime green/black wall. Preserve the same single bike and its reflected image (do not turn the reflection into another real bike), worn paint, logos, handlebars, saddle, pedals, flywheel, right-side bench, all water bottles and pink towel. Gently improve the darker exposure and softness without redesign.
```

### entrada

Original: IMG_1519.jpeg

Archivo final: [assets/entrada-mejorada.webp](../assets/entrada-mejorada.webp)

```text
Use case: lighting-weather.
Asset type: faithful photo retouch for a real gym website.
Input image 1 is the ONLY edit target. Improve THIS SAME photograph with restrained natural real-estate photography postprocessing: slightly improve exposure, recover shadows without flattening them, balance existing light, gently correct white balance, modest detail and clarity, soft contrast, reduce image noise. This is faithful photographic retouching, not recreation or redesign. Keep the actual room and every depicted object exactly as photographed. Preserve the original framing and displayed aspect ratio. If needed use only a tiny global perspective correction with no missing scene content. Preserve exact equipment shapes, count, position, proportions, cables, weights, furniture, reflections, walls, floor, ceiling, textures, paint wear, rust, cracks, stains and real imperfections. Preserve lime green walls and existing murals, logos, labels and all text unchanged. Do not reconstruct, invent, beautify or replace mural art or writing. Preserve any existing person or partial person unchanged. Do not add, remove, replace or reposition any equipment, people, objects or spaces. Do not clean away real wear or clutter. No luxury renovation, no new objects, no changed gym identity, no CGI, no illustration, no collage, no UI, no new text, no watermark. Opaque output.
Specific invariants: Portrait 3:4 dusk photo of the gym entrance with silver/red exercise station and bench, Dragon Ball mural with the existing partially occluded words NO PAIN and NO SUPER SAIYAN. Preserve exact visible lettering and mural, towel and bottle on bench, weathered red floor, adjacent building, car, rubble, electrical wires and twilight sky. Keep twilight believable while improving exposure and reducing color cast; do not convert to daylight.
```
