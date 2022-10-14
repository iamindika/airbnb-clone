export function getImage(name) {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
};

export function getImageAlt(name) {
  return name.slice(0, name.indexOf('.png')).split('-').join(' ');
}