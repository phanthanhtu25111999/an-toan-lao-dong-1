// Ảnh minh họa placeholder, lấy từ Unsplash (đã kiểm tra tồn tại).
// Toàn bộ URL được gom một chỗ để sau này chỉ cần đổi giá trị (hoặc trỏ sang
// ảnh nội bộ trong /public/images) khi công ty có ảnh thật, không cần sửa
// từng component.

function unsplash(id: string, width = 1600, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export const images = {
  hero: unsplash("1541888946425-d81bb19240f5", 1920, 75),
  about: unsplash("1521791136064-7986c2920216"),
  whyUs: unsplash("1581093588401-fbb62a02f120"),
  process: unsplash("1581092160562-40aa08e78837"),
  teamMeeting: unsplash("1600880292203-757bb62b4baf"),
  ctaBanner: unsplash("1516937941344-00b4e0337589", 1920, 75),
  contactBanner: unsplash("1504307651254-35680f356dfd"),
  ogDefault: unsplash("1541888946425-d81bb19240f5", 1200, 75),
} as const;

// Ảnh theo từng dịch vụ (khớp slug trong content/services.ts)
export const serviceImages: Record<string, { image: string; gallery: string[] }> = {
  "huan-luyen-atvsld": {
    image: unsplash("1504307651254-35680f356dfd"),
    gallery: [unsplash("1541888946425-d81bb19240f5")],
  },
  "an-toan-hoa-chat": {
    image: unsplash("1581093450021-4a7360e9a6b5"),
    gallery: [unsplash("1581093577421-f561a654a353")],
  },
  "chung-chi-y-te-lao-dong": {
    image: unsplash("1576091160399-112ba8d25d1d"),
    gallery: [unsplash("1579154204601-01588f351e67")],
  },
  "dao-tao-van-hanh-thiet-bi-nghiem-ngat": {
    image: unsplash("1504328345606-18bbc8c9d7d1"),
    gallery: [unsplash("1601058268499-e52658b8bb88"), unsplash("1616401784845-180882ba9ba8")],
  },
  "tu-van-danh-gia-rui-ro": {
    image: unsplash("1517245386807-bb43f82c33c4"),
    gallery: [unsplash("1503387762-592deb58ef4e")],
  },
  "kiem-dinh-an-toan-thiet-bi": {
    image: unsplash("1581092334651-ddf26d9a09d0"),
    gallery: [unsplash("1581092580497-e0d23cbdf1dc"), unsplash("1567789884554-0b844b597180")],
  },
  "quan-trac-moi-truong-lao-dong": {
    image: unsplash("1516937941344-00b4e0337589"),
    gallery: [unsplash("1504917595217-d4dc5ebe6122")],
  },
};

// Ảnh bìa mẫu cho bài viết Tin tức (dùng luân phiên nếu bài không khai báo cover riêng)
export const newsCovers = [
  unsplash("1504307651254-35680f356dfd"),
  unsplash("1541888946425-d81bb19240f5"),
  unsplash("1581093450021-4a7360e9a6b5"),
  unsplash("1504328345606-18bbc8c9d7d1"),
  unsplash("1581092334651-ddf26d9a09d0"),
  unsplash("1516937941344-00b4e0337589"),
  unsplash("1576091160399-112ba8d25d1d"),
  unsplash("1517245386807-bb43f82c33c4"),
];
