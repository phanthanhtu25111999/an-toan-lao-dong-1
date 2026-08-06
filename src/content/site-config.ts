// Nguồn dữ liệu duy nhất cho thông tin công ty — mọi nơi khác (Header, Footer,
// trang Liên hệ, JSON-LD...) đều import từ đây để tránh lặp và dễ cập nhật.

export const siteConfig = {
  name: "Công ty TNHH Huấn Luyện An Toàn 1",
  shortName: "Huấn Luyện An Toàn 1",
  legalName: "CÔNG TY TNHH HUẤN LUYỆN AN TOÀN 1",
  description:
    "Đối tác tin cậy trong lĩnh vực huấn luyện an toàn lao động, đào tạo nghề, kiểm định an toàn, quan trắc môi trường lao động và tư vấn an toàn cho doanh nghiệp, nhà máy, khu công nghiệp trên toàn quốc.",
  address: "137/13 Đường số 59, Phường An Hội Tây, TP. Hồ Chí Minh",
  hotline: "0909 970 044",
  hotlineHref: "tel:0909970044",
  contactPerson: "Ms. Liên",
  email: "daotaoantoan1@gmail.com",
  // TODO: thay bằng tên miền thật khi công ty đã đăng ký domain
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://antoanlaodong1.vn",
  socials: {
    facebook: "#",
    zalo: "#",
    youtube: "#",
  },
  workingHours: "Thứ 2 - Thứ 7: 7:30 - 17:30",
} as const;

export type SiteConfig = typeof siteConfig;
