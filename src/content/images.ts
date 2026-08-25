// Ảnh minh họa. Ảnh thật của công ty đặt trong /public/images (xem README
// trong thư mục đó); phần còn lại tạm dùng placeholder từ Unsplash cho tới
// khi có ảnh thật thay thế. Gom một chỗ để sau này chỉ cần đổi giá trị ở đây,
// không cần sửa từng component.

function unsplash(id: string, width = 1600, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

// Ảnh thật do công ty cung cấp
const real = {
  lopHuanLuyen: "/images/trang-chu/lop-huan-luyen.jpg",
  doiNgu: "/images/gioi-thieu/doi-ngu.jpg",
  capCuuBanDau: "/images/dich-vu/chung-chi-y-te-lao-dong/cap-cuu-ban-dau.jpg",
  hoiTruongBenhVien: "/images/dich-vu/chung-chi-y-te-lao-dong/hoi-truong-benh-vien.jpg",
  ungPhoSuCoHoaChat: "/images/dich-vu/an-toan-hoa-chat/ung-pho-su-co-hoa-chat.jpg",
};

export const images = {
  logo: "/images/logo/logo.png",
  hero: real.lopHuanLuyen,
  about: real.doiNgu,
  whyUs: unsplash("1581093588401-fbb62a02f120"),
  process: unsplash("1581092160562-40aa08e78837"),
  ctaBanner: real.capCuuBanDau,
  contactBanner: real.hoiTruongBenhVien,
  ogDefault: real.lopHuanLuyen,
} as const;

// Ảnh theo từng dịch vụ (khớp slug trong content/services.ts)
export const serviceImages: Record<string, { image: string; gallery: string[] }> = {
  "huan-luyen-atvsld": {
    image: real.lopHuanLuyen,
    gallery: [real.doiNgu],
  },
  "an-toan-hoa-chat": {
    image: real.ungPhoSuCoHoaChat,
    gallery: [unsplash("1581093450021-4a7360e9a6b5"), unsplash("1581093577421-f561a654a353")],
  },
  "chung-chi-y-te-lao-dong": {
    image: real.capCuuBanDau,
    gallery: [real.hoiTruongBenhVien],
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
  real.lopHuanLuyen,
  real.capCuuBanDau,
  real.doiNgu,
  real.ungPhoSuCoHoaChat,
  real.hoiTruongBenhVien,
  unsplash("1581092334651-ddf26d9a09d0"),
  unsplash("1516937941344-00b4e0337589"),
  unsplash("1517245386807-bb43f82c33c4"),
];
