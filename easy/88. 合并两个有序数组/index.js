/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  // 截取nums1内有内容的数组
  const _num1 = nums1.splice(0, m);
  // 三个指针
  let a = (b = c = 0);
  while (_num1[a] !== undefined || nums2[b] !== undefined) {
    // 当_num1 a指针走到头时, 直接插入nums2元素
    if (_num1[a] === undefined) {
      nums1[c] = nums2[b];
      c++;
      b++;
      continue;
    }
    // 当_num2 b指针走到头时, 直接插入nums1元素
    if (nums2[b] === undefined) {
      nums1[c] = _num1[a];
      c++;
      a++;
      continue;
    }
    // 哪个元素小就插入哪个
    if (_num1[a] > nums2[b]) {
      nums1[c] = nums2[b];
      b++;
      c++;
      continue;
    }
    nums1[c] = _num1[a];
    a++;
    c++;
  }
};
