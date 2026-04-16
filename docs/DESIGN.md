# Design System Specification: The Academic Luminary

## 1. Overview & Creative North Star

**Creative North Star: The Scholastic Prism**

This design system moves away from the rigid, "boxed-in" nature of traditional academic portals. Instead, it treats the UFPI Computer Science interface as a high-end digital gallery. By utilizing "The Scholastic Prism" as our guiding light, we focus on clarity, light refraction (glassmorphism), and structural integrity without the use of harsh dividers.

The design breaks the standard "template" aesthetic through **Architectural Asymmetry**. We utilize wide, intentional white space and offset typography to guide the eye, creating an editorial experience that feels both authoritative and cutting-edge. Every element is designed to feel like a physical layer of fine paper or frosted glass floating in a luminous, digital space.

---

## 2. Colors: Tonal Architecture

The palette is rooted in a deep, academic blue (`primary: #0057bf`) balanced by a spectrum of "cool" whites and greys.

### The "No-Line" Rule

To maintain a premium, modern feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through:

- **Tonal Shifts:** Transitioning from `surface` (#faf9ff) to `surface-container-low` (#f2f3fe).

- **Negative Space:** Using the spacing scale to create distinct visual islands.

### Surface Hierarchy & Nesting

Treat the UI as a series of nested physical layers.

- **Base Layer:** `surface` (#faf9ff).

- **Secondary Content Areas:** `surface-container` (#ecedf8).

- **Elevated Interactive Cards:** `surface-container-lowest` (#ffffff).

By placing the "Lowest" (brightest) container on top of a "Low" or "Mid" container, we achieve natural depth and focus without artificial styling.

### The "Glass & Gradient" Rule

To inject "visual soul," use the following:

- **Hero & Key CTAs:** Apply a subtle linear gradient from `primary` (#0057bf) to `primary_container` (#006fef). This adds a soft volume that flat colors lack.

- **Floating Navigation:** Use `surface_bright` with a 70% opacity and a `20px` backdrop-blur to create a "frosted glass" effect, allowing course content to peek through as the user scrolls.

---

## 3. Typography: Editorial Authority

The typography uses a high-contrast scale to separate "Data" from "Narrative."

- **Display & Headlines (Manrope):** Chosen for its geometric precision. Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) for hero sections to create a bold, modern academic statement.

- **Body & Titles (Inter):** Chosen for maximum legibility in technical contexts.

- **The Hierarchy:** Use `headline-md` (1.75rem) for section titles, but pair them with `label-md` (0.75rem) in all-caps as a "kicker" above the headline to provide an organized, indexed feel.

---

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering**.

- **The Layering Principle:** Soft, natural lift is achieved by stacking. A `surface-container-highest` element should never sit directly on `surface-lowest`. Always follow the tier sequence to mimic natural light fall-off.

- **Ambient Shadows:** If a floating state is required (e.g., an active dropdown), use an ambient shadow: `box-shadow: 0 12px 40px rgba(24, 27, 35, 0.06)`. The tint is derived from `on-surface` (#181b23) to keep it organic.

- **The "Ghost Border" Fallback:** For high-density data tables where separation is critical, use a "Ghost Border": `outline-variant` (#c1c6d7) at **15% opacity**. This provides a hint of structure without interrupting the visual flow.

---

## 5. Components

### Buttons

- **Primary:** Solid `primary` (#0057bf) with `on_primary` (#ffffff) text. Use `DEFAULT` (1rem) roundedness.

- **Secondary:** `secondary_container` (#d5e3fc) background with `on_secondary_container` (#57657a) text. No border.

- **Tertiary:** Ghost style. Transparent background, `primary` text, and a `primary` "Ghost Border" (10% opacity) that becomes 20% on hover.

### Cards & Lists

- **The Divider Ban:** Never use horizontal lines to separate list items. Use 16px of vertical padding and a subtle hover state using `surface-container-high` (#e6e7f3).

- **Academic Course Cards:** Use `surface-container-lowest` (#ffffff) with a `DEFAULT` (1rem) corner radius. Content should be padded by at least 24px (1.5rem) to ensure the information "breathes."

### Input Fields

- **Styling:** Background set to `surface-container-low` (#f2f3fe).

- **States:** On focus, transition the background to `surface-container-lowest` (#ffffff) and apply a 2px "Ghost Border" using the `primary` color at 40% opacity.

### Selection Chips

- Use `full` (9999px) roundedness.

- **Unselected:** `surface-container-high` background.

- **Selected:** `primary` background with `on_primary` text.

---

## 6. Do's and Don'ts

### Do:

- **Do** use asymmetrical layouts for landing pages (e.g., an H1 on the left with a 2-column body paragraph on the right).

- **Do** prioritize `surface` color shifts over lines for sectioning.

- **Do** use `manrope` for any numbers or data visualizations to emphasize technical precision.

- **Do** ensure all interactive elements have a `md` (1.5rem) or `lg` (2rem) radius to maintain the "Modern Academic" softness.

### Don't:

- **Don't** use 100% black (#000000). Always use `on_surface` (#181b23) for text to maintain a high-end, ink-on-paper feel.

- **Don't** use standard Material Design "elevated" shadows. If it looks like a default shadow, it’s too heavy.

- **Don't** use more than two font weights in a single component. Let size and color (`on_surface_variant`) do the heavy lifting for hierarchy.

- **Don't** cram content. If a section feels full, increase the padding by one step in the Spacing Scale.
