// Đánh giá minh họa — thay bằng phản hồi thực tế của khách hàng khi có.
export type Testimonial = {
  name: string;
  role: string;
  content: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Anh Minh",
    role: "Trưởng phòng An toàn, Công ty TNHH Sản xuất ABC",
    content:
      "Đội ngũ huấn luyện chuyên nghiệp, chương trình sát với thực tế nhà máy. Nhân viên tiếp thu tốt và áp dụng ngay vào công việc.",
  },
  {
    name: "Chị Hương",
    role: "HR Manager, Công ty Cổ phần Cơ khí XYZ",
    content:
      "Quy trình làm việc rõ ràng, hỗ trợ khảo sát và báo giá nhanh chóng. Chứng nhận được cấp đúng hẹn, rất đáng tin cậy.",
  },
  {
    name: "Anh Tuấn",
    role: "Giám đốc sản xuất, Nhà máy Bao bì Miền Nam",
    content:
      "Dịch vụ kiểm định thiết bị được thực hiện đúng kỹ thuật, kết quả rõ ràng. Nhân viên kỹ thuật hỗ trợ nhiệt tình.",
  },
  {
    name: "Chị Lan",
    role: "Phụ trách nhân sự, Khu Công nghiệp Đông Nam",
    content:
      "Chúng tôi đã hợp tác nhiều đợt huấn luyện cho các nhóm lao động khác nhau, đội ngũ luôn sắp xếp linh hoạt theo lịch sản xuất của nhà máy.",
  },
  {
    name: "Anh Khoa",
    role: "Quản lý vận hành, Nhà máy Thực phẩm Phúc An",
    content:
      "Tư vấn đánh giá rủi ro chi tiết, giúp nhà máy chúng tôi kiểm soát tốt hơn các mối nguy trong quá trình sản xuất.",
  },
  {
    name: "Chị Ngọc",
    role: "Phụ trách môi trường, Nhà máy Dệt may Phương Nam",
    content:
      "Kết quả quan trắc môi trường lao động chính xác, báo cáo đầy đủ phục vụ tốt cho hồ sơ khám sức khỏe định kỳ của công ty.",
  },
];
