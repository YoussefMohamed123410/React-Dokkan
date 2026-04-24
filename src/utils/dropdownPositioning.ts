/**
 * Calculates dropdown position and available space
 * Returns position (top/bottom) and available space for menu
 */
export interface DropdownPosition {
  top?: number;
  bottom?: number;
  right: number;
  positionTop: boolean;
  availableHeight: number;
  maxHeight: number;
}

const MIN_PADDING = 8; // Minimum padding from viewport edges
const PREFERRED_MENU_HEIGHT = 300;

// Calculate proportional padding based on viewport size
const getProportionalPadding = (viewportHeight: number): number => {
  // Use 2.5% of viewport height, with minimum of 8px and maximum of 24px
  const proportionalPadding = Math.max(8, Math.min(24, viewportHeight * 0.025));
  return proportionalPadding;
};

export const calculateDropdownPosition = (
  buttonRef: HTMLButtonElement | null,
): DropdownPosition | null => {
  if (!buttonRef) return null;

  const buttonRect = buttonRef.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  // Calculate proportional padding
  const proportionalPadding = getProportionalPadding(viewportHeight);

  // Calculate available space
  const spaceBelow = viewportHeight - buttonRect.bottom - proportionalPadding;
  const spaceAbove = buttonRect.top - proportionalPadding;

  // Determine position
  const positionTop =
    spaceBelow < PREFERRED_MENU_HEIGHT && spaceAbove > spaceBelow;

  // Calculate actual available height
  const availableHeight = positionTop ? spaceAbove : spaceBelow;
  const maxHeight = Math.min(
    availableHeight - proportionalPadding,
    PREFERRED_MENU_HEIGHT,
  );

  // Calculate anchor positions
  const bottom = positionTop ? viewportHeight - buttonRect.top : undefined;
  const top = positionTop ? undefined : buttonRect.bottom;
  const right = viewportWidth - buttonRect.right;

  return {
    top,
    bottom,
    right,
    positionTop,
    availableHeight,
    maxHeight,
  };
};
