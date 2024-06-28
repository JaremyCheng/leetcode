/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  // 两个指针
  let i = 0;
  let j = 0;
  // 混合后的新数组
  const newNums = [];
  // 两个数组排序生成新数组
  while (nums1[i] !== undefined || nums2[j] !== undefined) {
    if (nums1[i] === undefined || nums2[j] <= nums1[i]) {
      newNums.push(nums2[j]);
      j++;
    } else if (nums2[j] === undefined || nums2[j] > nums1[i]) {
      newNums.push(nums1[i]);
      i++;
    }
  }
  // 判断数组中位数是一个还是两个
  const middle = (len1 + len2) / 2;
  if ((len1 + len2) % 2 > 0) {
    return newNums[Math.floor(middle)];
  }
  return (newNums[middle] + newNums[middle - 1]) / 2;
};
