---
name: DirigeFácil Tactile Editorial
colors:
  surface: '#fcf9f0'
  surface-dim: '#dddad1'
  surface-bright: '#fcf9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ea'
  surface-container: '#f1eee5'
  surface-container-high: '#ebe8df'
  surface-container-highest: '#e5e2da'
  on-surface: '#1c1c17'
  on-surface-variant: '#4a463f'
  inverse-surface: '#31312b'
  inverse-on-surface: '#f4f1e8'
  outline: '#7b766e'
  outline-variant: '#ccc6bc'
  surface-tint: '#615e59'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1d1b17'
  on-primary-container: '#87837d'
  inverse-primary: '#cbc6bf'
  secondary: '#4b671f'
  on-secondary: '#ffffff'
  secondary-container: '#ccee96'
  on-secondary-container: '#516d25'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d0600'
  on-tertiary-container: '#d66044'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e8e1db'
  primary-fixed-dim: '#cbc6bf'
  on-primary-fixed: '#1d1b17'
  on-primary-fixed-variant: '#494641'
  secondary-fixed: '#ccee96'
  secondary-fixed-dim: '#b1d27d'
  on-secondary-fixed: '#121f00'
  on-secondary-fixed-variant: '#344e06'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#ffb4a3'
  on-tertiary-fixed: '#3d0600'
  on-tertiary-fixed-variant: '#84250f'
  background: '#fcf9f0'
  on-background: '#1c1c17'
  surface-variant: '#e5e2da'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
  headline-sm:
    fontFamily: Archivo Narrow
    fontSize: 17px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Archivo Narrow
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  numeric-hero:
    fontFamily: Outfit
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  numeric-lg:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
  numeric-md:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 22px
  numeric-sm:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
  label-caps:
    fontFamily: Archivo Narrow
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 0.75rem
  gutter-md: 1rem
  margin: 1rem
  margin-md: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system is grounded in an editorial-utilitarian philosophy built specifically for professional drivers operating under severe real-world constraints: intense direct sunlight on windshield mounts, single-hand thumb interactions at stoplights, and mental fatigue after a 12-hour shift.

It rejects the pervasive visual clichés of modern fintech—neon glow, ambient mesh gradients, synthetic 3D tokens, and generic lifestyle stock photography. In their place, it establishes an aesthetic rooted in physical receipts, durable route logbooks, and precision analog instrumentation. Every screen communicates trust, permanence, and immediate clarity. 

Key attributes:
- **Legibility First:** High-contrast pigment-style colors that do not wash out under midday glare.
- **Utilitarian Elegance:** Information layout modeled after dense, structured freight manifests and high-end automotive dash panels.
- **Tactile Reliability:** Large hit zones, firm physical boundaries, and clear state separations.

## Colors

The palette uses warm physical pigments reminiscent of raw newsprint, carbon ink, and vegetable dye. The default mode is light to optimize daylight legibility in automotive cabins.

### Role Assignments
- **Canvas (`#F2EFE6`):** Warm unbleached paper background. Non-reflective, easy on the eyes under high ambient glare.
- **Surface Layer (`#FBF9F4`):** Cream-white elevated surface for content cards, panels, and entry trays.
- **Primary Ink (`#1B1915`):** Dense carbon-black ink for primary typography, icons, key borders, and dark hero cards (e.g., Net Profit summary).
- **Secondary / Credit (`#5F7C32`):** Olive green reserved exclusively for income, net balance surplus, and file download/export confirmation triggers.
- **Tertiary / Debit (`#B4472E`):** Sunbaked terracotta reserved for fuel, maintenance, tolls, vehicle financing, and cash deductions.
- **Warning / Founder Plan (`#B07C14`):** Warm amber used for low balance warnings, pending sync items, and the lifetime "Plano Fundador" status ribbon.
- **Muted Ink (`#5C574F`):** Secondary meta-labels, timestamps, and contextual captions, maintaining WCAG AAA contrast against cream surfaces.
- **Border Neutral (`#DCD7C9`):** 1px structural hair-lines framing surfaces without artificial drop shadows.

## Typography

Typography is treated as a precision navigational tool. It operates with a strict dual-engine system:
1. **Archivo Narrow:** Used for headlines, body copy, list structures, and uppercase category markers. The condensed proportions preserve critical horizontal screen real estate for route and category descriptors.
2. **Outfit (Tabular Lining Figures `tnum`, `lnum` enabled):** Applied to every single numerical currency value, percentage, mileage counter, and hour readout. The open geometric forms maintain instant legibility at arms-length distance on dashboard phone clips.

All uppercase labels must utilize `label-caps` with strict wide tracking to retain clarity at small scales.

## Layout & Spacing

The layout is built around mobile-first utility with rapid single-finger ergonomics. 

- **Layout Grid:** A fluid 4-column layout on mobile devices (`< 600px`) transitioning to an 8-column layout on tablet dashboards or foldables (`600px - 1024px`).
- **Margins & Gutters:** Base screen edge margin is `1rem` (16px) on mobile phones to maximize data width, widening to `1.5rem` on larger mounted screens. Gutters sit at a tight `0.75rem` (12px).
- **Driver Thumb Zone Rules:** Primary execution triggers (Quick Ride Entry, Quick Expense, Fuel Quick-Log) reside strictly within the bottom 35% of the viewport.
- **Rhythm:** Layout follows a strict 4px/8px modular pacing. Stacks of cards separate by `space-sm` (8px) for related day logs and `space-md` (16px) for distinct shift blocks.

## Elevation & Depth

This design system rejects diffused blur shadows and fuzzy elevations which wash out and look muddy under vehicular sunlight.

Instead, visual separation is achieved through **structural framing and micro-offsets**:
- **Layer 0 (Canvas):** Tone `#F2EFE6` provides the warm physical surface.
- **Layer 1 (Cards & Data Sections):** Tone `#FBF9F4` enclosed by a crisp, single-pixel hairline border (`1px solid #DCD7C9`). Zero blur shadow.
- **Layer 2 (Floating Action Dock & Bottom Sheets):** Crisp tactile offset shadow: `0 3px 0 0 #1B1915`. This creates an unmistakably physical, analog click feel.
- **Hero Stacking:** For critical consolidated readouts (Net Profit / "Lucro Limpo"), an inverted container using `#1B1915` carbon background with `#FBF9F4` and `#5F7C32` text provides instantaneous visual anchoring.

## Shapes

The form language balances structural rigor with modern ergonomical tactile comfort.
- **Base Cards & Modules:** `rounded-lg` (16px) creates a clear, distinct boundary without feeling circular or playful.
- **Interactive Inputs & Action Buttons:** Radii fixed between 12px and 16px to match standard automotive interface paradigms.
- **Compact Metric Chips:** `rounded-sm` (6px) to maintain a stamped, physical paper-tag quality.
- **Floating Modals / Bottom Sheets:** Top corners carry `rounded-xl` (24px) for distinct separation from the chassis.

## Components

### Action Buttons
- **Touch Target Rule:** Minimum height of **52px** across all primary, secondary, and destructive actions. Never smaller than 48px for compact inline actions.
- **Primary Action (Confirm/Log):** Background `#1B1915`, text `#FBF9F4`, border none, font Archivo Bold 16px. Active state: transforms down 2px with instant tactile feedback.
- **Income Action:** Background `#5F7C32`, text `#FBF9F4`. Used strictly for "Registrar Ganho" and report export/downloads.
- **Expense Action:** Outlined `2px solid #B4472E`, background transparent, text `#B4472E`.
- **Ghost/Tertiary:** Background transparent, text `#1B1915`, underlined with `1.5px solid #1B1915`.

### Numeric Metric Cards
- Surface `#FBF9F4` bounded by `1px solid #DCD7C9` with 16px corner radius.
- Upper label rendered in `label-caps` muted ink (`#5C574F`).
- Primary financial figures rendered in `Outfit` tabular figures. Gross values in neutral ink, net income in `#5F7C32`, total expenses in `#B4472E`.

### Data Lists (Ride & Expense Logs)
- Flat, dense presentation with `12px` vertical padding.
- Separated by horizontal hair-lines (`#E6E1D3`).
- Left cluster: Platform badge (Uber, 99, Indrive, Particular, Frete) in compact uppercase + timestamp.
- Right cluster: Monetary value in `Outfit` 16px Semibold, followed by net margin pill beneath it.

### Input Fields & Quick Fuel Fill
- Fixed height: 56px.
- Background `#FBF9F4`, border `1.5px solid #DCD7C9`. Active focus transitions to `2px solid #1B1915`.
- Large numerical inputs (Reais, Litros, KM) automatically switch to tabular `Outfit` 24px with fixed inline prefixes (`R$`, `km`, `L`).

### Category Chips & Segment Filters
- Height: 40px minimum.
- Inactive: `#F2EFE6` background with `#5C574F` text.
- Active: `#1B1915` solid background with `#FBF9F4` high-contrast text.

### Badges & Status Indicators
- **Plano Fundador:** Solid `#B07C14` amber badge with `#1B1915` bold text.
- **Meta Atingida (Daily Goal):** Pill badge with `#5F7C32` background and white text.