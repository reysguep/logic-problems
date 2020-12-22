class PancakePile {
  public pancakes: number[] = [];

  constructor(...items: number[]) {
    this.pancakes.push(...items);
  }

  /**
   * Reverts the pile from its start to the specified index.
   * @param index {number} Last index of the pile to be flipped.
   * @return {number[]} The pile after being flipped.
   */
  public flip(index?: number): number[] {
    const lastIndex = this.pancakes.length - 1;

    if (index === undefined) {
      index = lastIndex;
    }

    if (index < 0 || index > lastIndex) {
      throw new Error('Invalid index!');
    }

    const pancakesToFlip = index + 1;

    const pancakes = this.pancakes.splice(0, pancakesToFlip);
    pancakes.reverse();

    this.pancakes.unshift(...pancakes);

    return this.pancakes;
  }

  public sortPile(): number[] {
    // The least ordered index
    let minSortedIndex = this.pancakes.length;

    while (!this.isSorted()) {
      // Index of the greatest unsorted item
      let greatestUnsortedIndex = 0;

      this.pancakes.reduce((accumulator, pancake, index) => {
        if (pancake > accumulator && index < minSortedIndex) {
          greatestUnsortedIndex = index;
          return pancake;
        }

        return accumulator;
      }, Number.NEGATIVE_INFINITY);

      // Flips the pile from de greatest unsorted item, placing it at the top
      this.flip(greatestUnsortedIndex);

      minSortedIndex--;

      // Flips again the pile, placing the top item at its sorted position
      this.flip(minSortedIndex);
    }

    return this.pancakes;
  }

  /**
   * Verifies whether the pile is sorted or not.
   * @returns {boolean} True if the pile is sorted; false otherwise.
   */
  public isSorted(): boolean {
    if (this.pancakes.length <= 1) {
      return true;
    }

    let previous = this.pancakes[0];
    let isSorted = true;

    for (let i = 1; i < this.pancakes.length; i++) {
      const pancake = this.pancakes[i];

      if (pancake < previous) {
        isSorted = false;
        break;
      }

      previous = pancake;
    }

    return isSorted;
  }
}

export default PancakePile;
