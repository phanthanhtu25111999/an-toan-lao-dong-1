export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { title: "Tiếp nhận yêu cầu", description: "Ghi nhận thông tin và nhu cầu cụ thể của doanh nghiệp qua hotline, email hoặc form liên hệ." },
  { title: "Khảo sát", description: "Khảo sát thực tế nhà xưởng, công đoạn sản xuất hoặc thiết bị liên quan." },
  { title: "Báo giá", description: "Đề xuất phương án thực hiện và báo giá chi tiết, minh bạch." },
  { title: "Thực hiện", description: "Triển khai dịch vụ đúng tiến độ với đội ngũ chuyên môn." },
  { title: "Bàn giao", description: "Bàn giao hồ sơ, chứng nhận hoặc báo cáo kết quả cho doanh nghiệp." },
  { title: "Hỗ trợ sau dịch vụ", description: "Tư vấn, nhắc lịch và hỗ trợ các vấn đề phát sinh sau khi hoàn thành." },
];
