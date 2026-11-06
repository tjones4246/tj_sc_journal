const DRIVE_IDS = {
  // Day 1 folder
  "day_1/day_1_001.jpg": "18Y1Wx71onXmgSvq-mrT3z5ciz_Ys4C6n",
  "day_1/day_1_002.jpg": "1zjtSqQe_BOu0NQwcVIKHzi8xDAHRa6CN",
  "day_1/day_1_003.jpg": "1rsQ2Vg696M2xqJu26lROJDfUQvoef1Ck",
  "day_1/day_2_004.jpg": "1ZzXCkxOfkP_whkUOwAdfXGmEbAE3Yfv9",

  // Day 2 folder
  "day_2/day_2_001.jpg": "1wIbYvKhiODjIECW6luDDSHxlmDkxorT6",
  "day_2/day_2_002.jpg": "1qTiY7RkdapMXCzwRxKVH4vp7pFdx9D-K",
  "day_2/day_2_003.jpg": "1IZ5mPgBqvEbjPSfw6SWpDPQX0JvWtrPD",
  "day_2/day_2_004.jpg": "1nFNGGH2ltFsF4UrfCXNHvrEthOyehoGm",
  "day_2/day_2_005.jpg": "1aK9A_w-E97pSNj4NLRqv6aaolLYl72HD",
  "day_2/day_2_006.jpg": "1wlbRiTl5nLzW8kM1KFapCn9PuDwjpnf1",
  "day_2/day_2_007.jpg": "1VN_MVETW21b1HyIOsu292y1pHB8xNUtQ",
  "day_2/day_2_008.jpg": "1NEYMYeQ27iwoVqNx3H0biznYC7cxWw57",
  "day_2/day_2_009.jpg": "1KFFQVEECqxCbmW9rDYSizei5aETYH_Vf",
  "day_2/day_2_010.jpg": "1Otz_b1qYJ7ipPImitb9WYGCIzo5Ja_fA",
  "day_2/day_2_011.jpg": "1FCHzMtU3lr63TgvJ7WFYhhh7KzjdIJ3j",
  "day_2/day_2_012.jpg": "1affdzKUG0jySpRKZlrLkUVfjB3dw86Ac",
  "day_2/day_2_013.jpg": "1S0zAl8V-nyVv4V3cMJPbkoPyaHo58vuK",
  "day_2/day_2_014.jpg": "1UvtxXM29d3katnEbvAs742dsEaEaE8tP",
  "day_2/day_2_015.jpg": "1lfKjg-_o0MP4uHCqm4rdEPEj7WnPT0z7",
  "day_2/day_2_016.jpg": "1PJval5DnpN3KSJ5d-eiyjfmqXDdRt8fZ",
  "day_2/day_2_017.jpg": "1K4T3wNa1zxzHxkGVVDS54DdLBwEFerMM",
  "day_2/day_2_018.jpg": "1TBKibB2HXt21DftBVpKz0dLrl1YmCMag",
  "day_2/day_2_019.jpg": "1ngGcAXzWNcfwXbkvSheYm6km6CRhxU6N"
};

// Replace every <img data-drive="..."> with its Google Drive image URL
document.querySelectorAll("img[data-drive]").forEach(function (img) {
  const id = DRIVE_IDS[img.dataset.drive];
  if (id) {
    img.src = "https://lh3.googleusercontent.com/d/" + id;
  } else {
    console.warn("No Drive ID found for: " + img.dataset.drive);
  }
});
