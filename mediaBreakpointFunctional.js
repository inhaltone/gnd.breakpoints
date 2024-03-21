const _map = {
    'xs': 0,
    'sm': 576,
    'md': 768,
    'lg': 992,
    'xl': 1400,
    'xxl': 1600,
    'xxxl': 1920,
};
function getBreakpoint(label) {
    if (!_map[label]) {
        throw new Error();
    }
    return _map[label];
}
/**
 *
 * @param breakpointLabel
 * @return {boolean}
 */
export function mediaBreakpointDown(breakpointLabel = 'lg') {
    const query = `(max-width: ${getBreakpoint(breakpointLabel)}px)`;
    return window.matchMedia(query).matches;
}

/**
 *
 * @param breakpointLabel
 * @return {boolean}
 */
export function mediaBreakpointUp(breakpointLabel = 'lg') {
    const query = `(min-width: ${getBreakpoint(breakpointLabel)}px)`;
    return window.matchMedia(query).matches;
}
