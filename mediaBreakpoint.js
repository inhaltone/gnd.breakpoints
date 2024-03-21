class MediaBreakpoint {
    #label;
    #value;

    static _map = {
        'xs':   new MediaBreakpoint('xs', 0),
        'sm':   new MediaBreakpoint('sm', 576),
        'md':   new MediaBreakpoint('md', 768),
        'lg':   new MediaBreakpoint('lg', 992),
        'xl':   new MediaBreakpoint('xl', 1400),
        'xxl':  new MediaBreakpoint('xxl', 1600),
        'xxxl': new MediaBreakpoint('sm', 1920),
    };

    static from(label) {
        if (!MediaBreakpoint._map[label]) {
            throw new Error(`no value for ${label}`);
        }
        return MediaBreakpoint._map[label];
    }

    constructor(label, value) {
        this.#label = label;
        this.#value = value;
    }

    get label() {
        return this.#label;
    }

    get breakpoint() {
        return this.#value;
    }

    /**
     * @return {boolean}
     */
    matchMaxWidth() {
        const query = `(max-width: ${this.breakpoint}px)`;
        return window.matchMedia(query).matches;
    }

    /**
     * @return {boolean}
     */
    matchMinWidth() {
        const query = `(min-width: ${this.breakpoint}px)`;
        return window.matchMedia(query).matches;
    }
}
