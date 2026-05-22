---
name: DeComVo Editorial
colors:
  surface: '#f7fafb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7fafb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f5'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e4'
  on-surface: '#181c1e'
  on-surface-variant: '#3f484c'
  inverse-surface: '#2d3132'
  inverse-on-surface: '#eff1f3'
  outline: '#6f797c'
  outline-variant: '#bec8cc'
  surface-tint: '#04677c'
  primary: '#004c5d'
  on-primary: '#ffffff'
  primary-container: '#00667b'
  on-primary-container: '#97e1fa'
  inverse-primary: '#87d1e9'
  secondary: '#5d5e5f'
  on-secondary: '#ffffff'
  secondary-container: '#e0dfdf'
  on-secondary-container: '#626363'
  tertiary: '#910002'
  on-tertiary: '#ffffff'
  tertiary-container: '#be0003'
  on-tertiary-container: '#ffcac2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b2ebff'
  primary-fixed-dim: '#87d1e9'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#004e5e'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#930002'
  background: '#f7fafb'
  on-background: '#181c1e'
  surface-variant: '#e0e3e4'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 16px
---

# Visual Identity

## Brand & Style
DeComVo Editorial is a sophisticated, information-dense design system tailored for high-quality content delivery and professional editorial environments. The brand personality is authoritative yet approachable, prioritizing clarity and trust. The design style is Corporate / Modern, utilizing a balanced layout and refined typography to create a sense of reliability.

## Colors
The color palette is anchored by a professional deep teal primary and a bold crimson tertiary accent.

- **Primary (#00667b):** A deep, authoritative teal used for primary actions, branding, and key navigational elements.
- **Secondary (#b2b2b2):** A neutral silver-gray used for supporting elements and secondary buttons.
- **Tertiary (#cb0707):** A vibrant crimson red used for high-impact alerts, critical status updates, or breaking news callouts. This replaces the previous warmer tones with a more urgent editorial accent.
- **Neutral:** Slate-tinted grays ensure harmonic backgrounds and high-contrast legibility.

## Typography
The system uses **Manrope** across all roles to maintain a modern, geometric, yet highly legible appearance. Headlines are bold with tight line heights, while body text uses a generous 1.6 line height to support long-form reading. A dedicated mobile-specific XL size ensures headlines remain accessible on smaller screens.

## Layout & Spacing
The system employs a fixed grid model for desktop (1280px max) to ensure content remains centered, transitioning to a fluid model for mobile devices. An 8px base unit governs all padding and margins. Desktop margins are set to 48px to provide breathing room, while mobile margins are 16px.

## Elevation & Depth
Depth is communicated through tonal layers rather than heavy shadows. The UI uses a surface-container hierarchy where lower-level containers are slightly darker or lighter than the base background. Low-contrast outlines (#bec8cc) are preferred for card boundaries.

## Shapes
The system uses a Rounded shape language (0.5rem base) to soften the corporate aesthetic and make the interface feel more contemporary. Standard elements like buttons use 8px corners, while cards use 16px.

## Components
- **Buttons:** Primary buttons use the primary teal with white text.
- **Cards:** Defined by low-contrast outlines and 16px rounded corners.
- **Input Fields:** Use a 1px outline-variant border, shifting to primary teal on focus.
- **Status Indicators:** Error states and critical alerts utilize the new Tertiary Crimson (#cb0707) for high visibility.

** DO NOT USE ANY ROUNED CORNER **

--color-primary:#00667b;--color-secondary:#b2b2b2;--color-tertiary:#cb0707;--color-white:#fbf9ee;
