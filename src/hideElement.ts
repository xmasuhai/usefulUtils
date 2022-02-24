const hideElement = (element: HTMLElement,
                     removeFromFlow = false): void => {
  removeFromFlow
    ? (element.style.display = 'none')
    : (element.style.visibility = 'hidden');
};
