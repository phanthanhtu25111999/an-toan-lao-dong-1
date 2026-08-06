# Thư mục ảnh nội bộ

Đặt ảnh thật của công ty vào các thư mục con dưới đây theo đúng khu vực sử
dụng, sau đó báo lại (hoặc tự cập nhật) đường dẫn tương ứng trong
`src/content/images.ts` — thay URL Unsplash bằng đường dẫn nội bộ, ví dụ:

```ts
hero: "/images/trang-chu/hero.jpg",
```

Tên file trong ảnh có thể tùy bạn đặt, chỉ cần đúng thư mục là tôi (hoặc bạn)
biết ảnh nào dùng ở đâu.

## Cấu trúc thư mục

- `trang-chu/` — ảnh Trang chủ: hero, giới thiệu, vì sao chọn chúng tôi, quy
  trình, CTA cuối trang (tương ứng các key `hero`, `about`, `whyUs`,
  `process`, `teamMeeting`, `ctaBanner` trong `images.ts`)
- `gioi-thieu/` — ảnh minh họa trang Giới thiệu (đội ngũ, văn phòng, hoạt động...)
- `lien-he/` — ảnh banner trang Liên hệ (`contactBanner`)
- `tin-tuc/` — ảnh bìa cho các bài viết Tin tức (`newsCovers`)
- `dich-vu/<ten-dich-vu>/` — ảnh riêng cho từng dịch vụ, đã tạo sẵn 7 thư mục
  đúng theo 7 dịch vụ hiện có:
  - `huan-luyen-atvsld/`
  - `an-toan-hoa-chat/`
  - `chung-chi-y-te-lao-dong/`
  - `dao-tao-van-hanh-thiet-bi-nghiem-ngat/`
  - `tu-van-danh-gia-rui-ro/`
  - `kiem-dinh-an-toan-thiet-bi/`
  - `quan-trac-moi-truong-lao-dong/`

Ảnh khuyến nghị định dạng `.jpg`/`.webp`, chiều rộng tối thiểu ~1600px cho
ảnh banner/hero để hiển thị nét trên màn hình lớn.
