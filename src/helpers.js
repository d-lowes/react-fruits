/** Takes an array of items
 *
 * Returns a randomly selected item
 */

function choice(items) {
  const randomIdx = Math.floor(Math.random() * items.length);

  return items[randomIdx];
}

/** Takes an array of items and a search value.
 *
 * Removes the search value from items and returns the array or
 * returns undefined if not found.
 */

function remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    if (item === items[i]) {
      items.splice(i, 1);
      return items;
    }
  }

  return undefined;
}

export { choice, remove };