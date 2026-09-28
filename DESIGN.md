# realme 16 Pro Harry Potter Edition India Bus Tour | realme India Event

## Overview

**Product:** realme 16 Pro Harry Potter Edition India Bus Tour | realme India Event
**URL:** https://event.realme.com/in/harry-potter-bus-tour/
**Surface type:** marketing
**Audience:** Business decision-makers and potential customers
**Brand character:** Conversion-focused marketing presence with a rich, diverse color palette and a complementary two-font typographic system.

> **Note:** Surface detection confidence is low. Verify the inferred audience and brand context before relying on this file.

### Design Principles

- Consistency over novelty — reuse existing patterns before inventing new ones.
- Token-driven — every visual decision references a token, not a magic number.
- Accessible by default — compliance is a baseline, not a feature.

## Colors

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

## Typography

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

## Spacing

**Base unit:** 4px

`space-1: 1px` · `space-2: 2px` · `space-3: 4px` · `space-4: 6px` · `space-5: 8px` · `space-6: 12px` · `space-7: 16px` · `space-8: 20px` · `space-9: 24px` · `space-10: 40px` · `space-11: 80px` · `space-12: 256px`

## Shapes

**Border radius:** `radius-sm: 1px` · `radius-md: 25.6px`

## Elevation

_None detected._

## Motion

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

## Components

- **Buttons:** 69 detected
- **Links:** 31 detected
- **Inputs:** 1 detected
- **Navigation:** 1 elements
- **Lists:** 8 detected
- **Images:** 130 detected

## Do's and Don'ts

### Do

- Reference tokens by name, not raw values — agents and developers should use `color.text.primary`, not `#171717`.
- Define all interactive states: default, hover, focus-visible, active, disabled.
- Use the spacing scale for all padding, margin, and gap values.
- Write content in sentence case. Reserve ALL CAPS for acronyms only.
- Test every component at the smallest and largest breakpoint before shipping.

### Don't

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (1px, 25.6px).
- Do not use full-uppercase text for body or paragraph content.
- Do not nest interactive elements (e.g. buttons inside links).
- Do not ship components without defining hover, focus-visible, and disabled states.

## Writing Tone

Concise, confident, implementation-focused. Avoid filler preambles.

## Authoring Workflow

When creating or updating a component guideline for this system, follow this sequence:

1. **State the intent** — one sentence on what the component does and why it exists.
2. **Map tokens** — list every color, spacing, typography, and radius token the component uses. No raw values.
3. **Define anatomy** — break the component into named parts (container, label, icon, etc.) with their token assignments.
4. **Specify states** — document every state: default, hover, focus-visible, active, disabled, loading, error, empty.
5. **Describe interactions** — keyboard, pointer, and touch behavior, including edge cases (long content, overflow, truncation).
6. **Add accessibility criteria** — write testable pass/fail checks (e.g. "focus ring must be visible at 3:1 contrast").
7. **List anti-patterns** — concrete examples of misuse with a brief explanation of why each is wrong.
8. **Close with a QA checklist** — a mechanical list of verifiable items (see Definition of Done below).

## Required Output Structure

Every component guideline produced from this system must contain these sections, in order:

1. Overview — purpose, when to use, when not to use.
2. Tokens and foundations — all referenced tokens from the tables above.
3. Anatomy and variants — named parts, variant matrix, responsive behavior.
4. States and interactions — full state table, keyboard/pointer/touch behavior.
5. Accessibility — ARIA attributes, contrast requirements, focus management, screen reader behavior.
6. Content guidelines — copy length, tone, capitalisation, placeholder text rules.
7. Anti-patterns — explicit examples of what not to build, with reasoning.

## Component Requirements

Every component built against this system must:

- Reference only tokens defined in the tables above — no hardcoded hex, px, or font values.
- Define all interactive states: default, hover, focus-visible, active, disabled, loading, error.
- Specify responsive behavior at the smallest and largest supported breakpoint.
- Handle edge cases: empty state, overflow / truncation, maximum content length.
- Include keyboard navigation (Tab, Enter, Escape, Arrow keys where applicable).
- Document ARIA roles, labels, and live-region behavior where relevant.
- Include known page component density: - **Buttons:** 69 detected
- **Links:** 31 detected
- **Inputs:** 1 detected
- **Navigation:** 1 elements
- **Lists:** 8 detected
- **Images:** 130 detected

## Definition of Done

A component is not complete until every item below is checked:

- Renders correctly in its default state (smoke test).
- All states documented and visually verified (hover, focus, disabled, loading, error, empty).
- All visual values use design tokens — zero hardcoded values.
- Keyboard navigation works without a pointer.
- No critical accessibility violations (contrast, ARIA, focus order).
- Tested at smallest and largest breakpoint.
- Anti-patterns section lists at least one concrete misuse example.
- Documentation covers purpose, usage, props/API, and limitations.
