---
name: design-system-realme-16-pro-harry-potter-edition-india-bus-tour-realme-india-event
description: >
  Apply the realme 16 Pro Harry Potter Edition India Bus Tour | realme India Event design system when building or updating UI.
  Use when creating components, choosing colors or typography,
  or reviewing designs for marketing interfaces.
---

# realme 16 Pro Harry Potter Edition India Bus Tour | realme India Event — Design System Skill

## When to Use

- Building new UI components for realme 16 Pro Harry Potter Edition India Bus Tour | realme India Event.
- Reviewing or updating existing component styles.
- Choosing colors, typography, or spacing for marketing pages.
- Checking designs against the extracted token set.

## Context

- **Product:** realme 16 Pro Harry Potter Edition India Bus Tour | realme India Event — https://event.realme.com/in/harry-potter-bus-tour/
- **Surface:** marketing
- **Audience:** Business decision-makers and potential customers
- **Character:** Conversion-focused marketing presence with a rich, diverse color palette and a complementary two-font typographic system.

## Tokens

### Colors

| Token | Value | Role |
|-------|-------|------|
| --color-muted | `#9AA0A8` | Text Secondary |
| --color-realme | `#FFC915` | Accent |
| --color-ink | `#F5F2EA` | Text Light |
| color-1 | `#000000` | Text Primary |
| color-2 | `#AE8A4C` | Accent |
| color-5 | `#F0C75E` | Accent |
| color-4 | `#CAA67B` | Background Dark |
| color-8 | `#FFFFFF` | Text Light |

### Typography

**Font stack:** Gilroy, ui-sans-serif

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 6px | Captions, metadata |
| text-sm | 10px | Labels, secondary text |
| text-base | 12px | Body text (default) |
| text-lg | 15px | Subheadings, emphasis |
| text-xl | 20px | Section headings |
| text-2xl | 22px | Section headings |
| text-3xl | 40px | Section headings |

**Weight scale:** 400 · 500 · 600
**Line heights:** 24px · 16px · 20px · 28px · 10px · 15px · 7px · 40px

### Spacing

**Base unit:** 4px

`space-1: 1px` · `space-2: 2px` · `space-3: 4px` · `space-4: 6px` · `space-5: 8px` · `space-6: 12px` · `space-7: 16px` · `space-8: 20px` · `space-9: 24px` · `space-10: 40px` · `space-11: 80px` · `space-12: 256px`

### Shapes

**Border radius:** `radius-sm: 1px` · `radius-md: 25.6px`

### Elevation

_None detected._

### Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-fast:** `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-base:** `color 0.22s`
- **duration-base:** `filter 0.28s`
- **duration-base:** `opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-slow:** `transform 0.36s cubic-bezier(0.22, 1, 0.36, 1), filter 0.36s`
- **duration-slow:** `opacity 0.36s, filter 0.36s`
- **duration-slow:** `transform 0.36s cubic-bezier(0.22, 1, 0.36, 1)`
- **duration-slow:** `transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)`
- **duration-slow:** `opacity 0.62s cubic-bezier(0.22, 1, 0.36, 1) 0.28s, transform 0.72s cubic-bezier(0.22, 1, 0.36, 1) 0.28s, filter 0.62s cubic-bezier(0.22, 1, 0.36, 1) 0.28s`
- **duration-slow:** `opacity 0.62s cubic-bezier(0.22, 1, 0.36, 1) 0.14s, transform 0.72s cubic-bezier(0.22, 1, 0.36, 1) 0.14s, filter 0.62s cubic-bezier(0.22, 1, 0.36, 1) 0.14s`
- **duration-slow:** `opacity 0.62s cubic-bezier(0.22, 1, 0.36, 1), transform 0.72s cubic-bezier(0.22, 1, 0.36, 1), filter 0.62s cubic-bezier(0.22, 1, 0.36, 1)`

## Component Inventory

- **Buttons:** 69 detected
- **Links:** 31 detected
- **Inputs:** 1 detected
- **Navigation:** 1 elements
- **Lists:** 8 detected
- **Images:** 130 detected

## Constraints

### Always

- Use tokens from the tables above — do not introduce new values.
- Include hover, focus-visible, and disabled states for interactive elements.
- Follow the 4px spacing grid.
- Meet WCAG 2.2 AA contrast minimums.

### Never

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (1px, 25.6px).
- Do not use full-uppercase text for body or paragraph content.
- Do not nest interactive elements (e.g. buttons inside links).
- Do not ship components without defining hover, focus-visible, and disabled states.

## Tone

Concise, confident, implementation-focused. Avoid filler preambles.

## Authoring Workflow

When creating or documenting a component for this system:

1. State intent — one sentence on purpose.
2. Map tokens — list every token the component uses.
3. Define anatomy — named parts with token assignments.
4. Specify states — default, hover, focus-visible, active, disabled, loading, error, empty.
5. Describe interactions — keyboard, pointer, touch, edge cases.
6. Add a11y criteria — testable pass/fail checks.
7. List anti-patterns — concrete misuse examples.
8. Close with the Definition of Done checklist.

## Output Structure

Component guidelines must contain, in order:

1. Overview (purpose, when to use, when not to use)
2. Tokens and foundations
3. Anatomy, variants, responsive behavior
4. States and interactions
5. Accessibility (ARIA, contrast, focus, screen reader)
6. Content guidelines (copy rules, tone)
7. Anti-patterns with reasoning

## Component Requirements

- Reference only tokens from the tables above.
- Define all states: default, hover, focus-visible, active, disabled, loading, error.
- Handle edge cases: empty, overflow, truncation, max content.
- Include keyboard navigation behavior.
- Document ARIA roles and labels.

## Definition of Done

- Default state renders (smoke test).
- All states visually verified.
- Zero hardcoded visual values — tokens only.
- Keyboard navigation works without pointer.
- No critical a11y violations.
- Tested at min and max breakpoint.
- At least one anti-pattern documented.
- Purpose, usage, and limitations documented.
