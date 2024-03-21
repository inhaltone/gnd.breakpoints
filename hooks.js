export function onMounted(callback) {
    document.addEventListener('DOMContentLoaded', (event) => {
        callback(event);
    });
}

export function onLoaded(callback) {
    window.addEventListener('load', (event) => {
        callback(event);
    });
}

export function onPageMounted(id, hook) {
    document.addEventListener('DOMContentLoaded', () => {
        const containerDiv = document.getElementById(id);
        if (containerDiv === null) return;
        hook({element: containerDiv});
    });
}

export function onWindowResize(callback) {
    window.addEventListener("resize", (event) => {
        callback(event);
    });
}

export function onPageShowCached(callback) {
    window.addEventListener("pageshow", (event) => {
        if (event.persisted) {
            callback(event);
        }
    });
}

export function onPageHideCached(callback) {
    window.addEventListener("pagehide", (event) => {
        if (event.persisted) {
            callback(event);
        }
    });
}

