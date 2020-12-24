export default function range (first, end) {
  if (end === undefined) {
    return range(0, first);
  }
  let start = first;
  const arr = new Array(Math.abs(end - first) + 1);
  const mapFunc = end > first ? () => start++ : () => start--;
  return Array.from(arr, mapFunc);
};

