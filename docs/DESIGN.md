# Design System Specification: The Academic Luminary

## 1. Overview & Creative North Star

**Creative North Star: "The Digital Curator"**

This design system rejects the "standard institutional" aesthetic of rigid grids and heavy borders. Instead, it adopts the persona of a high-end digital curator. For the Computer Science department at UFPI, we move beyond simple "trustworthiness" into "intellectual authority."

The system utilizes **Intentional Asymmetry** and **Tonal Depth** to create a sophisticated, editorial experience. We break the template look by using exaggerated white space, overlapping typographic elements, and a "layer-first" philosophy. The goal is to make academic data feel like a premium gallery experience—organized, yet breathing with modern innovation.

---

## 2. Colors: Tonal Architecture

We move away from flat hex codes toward a functional hierarchy. Colors are not just aesthetic; they are structural.

### The "No-Line" Rule

**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. Use `surface-container-low` (#f0f4f7) sections sitting against a `surface` (#f7f9fb) background to define change.

### Surface Hierarchy & Nesting

Treat the UI as a series of physical layers.

- **Layer 1 (Base):** `surface` (#f7f9fb)

- **Layer 2 (Sectioning):** `surface-container-low` (#f0f4f7)

- **Layer 3 (Components/Cards):** `surface-container-lowest` (#ffffff)

- **Layer 4 (Elevated/Pop-overs):** `surface-bright` (#f7f9fb)

### The Glass & Gradient Rule

To provide visual "soul," utilize **Signature Textures**:

- **CTAs:** Apply a subtle linear gradient from `primary` (#3a5f94) to `primary-dim` (#2d5387) at a 135-degree angle.

- **Hero Accents:** Use `surface-tint` (#3a5f94) at 5% opacity with a 40px `backdrop-blur` for floating navigation or informational overlays.

---

## 3. Typography: Editorial Authority

We pair the structural precision of **Inter** with the geometric character of **Manrope** to create a hierarchy that feels both technical and inviting.

| Level | Token | Font | Size | Character |

| :--- | :--- | :--- | :--- | :--- |

| **Display** | `display-lg` | Manrope | 3.5rem | Extra-bold, -2% tracking for Hero headers. |

| **Headline** | `headline-md` | Manrope | 1.75rem | Medium, used for section titles. |

| **Title** | `title-lg` | Inter | 1.375rem | Semi-bold, for card titles and faculty names. |

| **Body** | `body-lg` | Inter | 1rem | Regular, 1.6 line-height for readability. |

| **Label** | `label-md` | Inter | 0.75rem | All-caps, 10% letter spacing for metadata. |

**The Typographic "Overlap":** To break the grid, allow `display-lg` text to slightly overlap into a different color section or over an image edge (using `on-surface` or `primary` contrast).

---

## 4. Elevation & Depth: Tonal Layering

Depth is achieved through "stacking" rather than traditional structural shadows.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. The shift from #f0f4f7 to #ffffff creates a natural, soft "lift" that mimics fine stationery.

- **Ambient Shadows:** If a floating element (like a modal) is required, use: `box-shadow: 0 20px 40px rgba(42, 52, 57, 0.06);`. The shadow color must be a tinted version of `on-surface` (#2a3439), never pure black.

- **The "Ghost Border" Fallback:** If accessibility requires a container edge, use `outline-variant` (#a9b4b9) at **15% opacity**. 100% opaque borders are strictly forbidden.

---

## 5. Components

### Hero Sections

- **Layout:** Asymmetric. Text occupies the left 5 columns; a high-quality abstract tech visual or architectural shot of UFPI occupies the right 7, bleeding off the edge of the screen.

- **Styling:** Use a `primary-container` (#d5e3ff) background wash for the text area to anchor the "Institutional" vibe.

### Faculty Profiles

- **Structure:** No containers. Use a large `surface-dim` (#cfdce3) circular mask for the portrait.

- **Details:** Name in `title-lg`, research area in `label-md` (uppercase), and a subtle `on-surface-variant` (#566166) for the bio.

### Information Cards

- **Style:** `surface-container-lowest` (#ffffff) background. No borders.

- **Spacing:** `xl` (0.75rem) corner radius. Internal padding should be generous (min 32px).

- **Interaction:** On hover, shift the background to `primary-container` (#d5e3ff) and move the card -4px on the Y-axis using a `cubic-bezier(0.2, 0, 0, 1)` transition.

### Contact Forms

- **Inputs:** Use the "Underline" style. A `surface-variant` (#d9e4ea) bottom bar that expands to 2px `primary` (#3a5f94) on focus.

- **Labels:** Use `label-md` floating above the input.

- **Submit:** A `primary` button with `full` (9999px) roundedness for a modern, approachable touch.

### Research Chips

- **Visual:** `surface-container-high` (#e1e9ee) background with `on-surface` text. No border. Radius: `md` (0.375rem).

---

## 6. Do’s and Don’ts

### Do

- **Do** use extreme vertical white space (80px, 120px, 160px) to separate major sections.

- **Do** use `primary` (#3a5f94) sparingly for emphasis—let the `white` and `gray` do the heavy lifting.

- **Do** use "Glassmorphism" for the main navigation bar (Backdrop blur: 20px, Background: `surface` at 80% opacity).

### Don't

- **Don't** use dividers or horizontal rules. Separate content with space or color blocks.

- **Don't** use standard "Drop Shadows" (distinguishable, dark, or blurry). Use tonal shifts.

- **Don't** center-align long blocks of text. Stick to a strong, left-aligned editorial axis.

- **Don't** use pure black (#000000). Use `on-surface` (#2a3439) for all text to maintain the navy-institutional warmth.
