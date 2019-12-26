export function ellipsisX(rowNum = 1) {
  if (rowNum !== 1) {
    return `
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: ${rowNum};
      -webkit-box-orient: vertical;
    `
  }
  return `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
}

export function size(size) {
  return `
  width: ${size};
  height: ${size};
  `;
}

export function wh(w, h) {
  return `
  width: ${w};
  height: ${h};
  `;
}

