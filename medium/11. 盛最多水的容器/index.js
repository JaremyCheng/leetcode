/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  const len = height.length - 1;
  let left = 0;
  let right = len;
  while (left <= right) {
    const cont = Math.min(height[left], height[right]) * (right - left);
    if (cont > max) {
      max = cont;
    }
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
};
