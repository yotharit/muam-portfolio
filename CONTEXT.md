# Portfolio

A commission portfolio site built with Next.js, presenting the artist's work and letting visitors browse commission categories (Illustration, Animation) and place orders.

## Language

**Artboard**:
A fixed-pixel design frame (currently 393×844, matching the Figma mobile mockup) that a page's markup is laid out against 1:1, then uniformly scaled via CSS `transform: scale()` to fit the real viewport. Used for pages ported directly from a single-breakpoint Figma frame with no separate tablet/desktop design.
_Avoid_: canvas (ambiguous with `<canvas>`), viewport, frame.

**Illustration**:
One of the two commission categories (alongside Animation), covering static character/scene artwork. Always the correct spelling in routes, code identifiers, and layer/frame names in the Figma file. Two Figma frames render visible copy as "Illustion" — confirmed a design-tool typo, not a deliberate wordmark; corrected to "Illustration" in all shipped copy.
_Avoid_: Illustion (Figma typo — never carry into code, routes, or visible copy).

**Style** (Illustration context):
A named visual treatment a client can choose for an Illustration commission (e.g. "Style A"..."Style E"), each with a letter identifier and two reference images. Selected via a folder-tab UI.
_Avoid_: variant, option (in Illustration-page code, use Style to match `IllustrationStyle`).

**Package** (Animation context):
A named tier/offering a client can choose for an Animation commission (e.g. "Package A"..."Package C"), each with a screen preview image. Selected via a vinyl-disk UI.
_Avoid_: tier, plan (in Animation-page code, use Package to match `AnimationPackage`).
