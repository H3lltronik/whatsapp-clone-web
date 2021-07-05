export const switchTheme = function (theme : string) {
    const html = document.querySelector('html');
    const classesToToggle: [] = [];

    if (html) html.dataset.theme = `${theme}`;
    for (const classToToggle of classesToToggle) {
        document.querySelectorAll(classToToggle).forEach (el => {
            const element: HTMLElement = <HTMLElement>el
            element.dataset.theme = `${theme}`
        });
    }
}