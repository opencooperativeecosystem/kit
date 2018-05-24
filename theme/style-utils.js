export function truncate (width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

export function clearfix () {
  return `
    &:before, &:after {
      content: " ";
      display: table; }
    &:after {
      clear: both; }
  `
}