import { GraduationCap, ClipboardCheck, Microscope, HeadphonesIcon, type LucideIcon } from "lucide-react";

// Đội ngũ theo bộ phận chuyên môn — thay bằng thông tin nhân sự thực tế khi có.
export type TeamGroup = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const teamGroups: TeamGroup[] = [
  {
    icon: GraduationCap,
    title: "Giảng viên An toàn Lao động",
    description: "Đội ngũ giảng viên có nghiệp vụ sư phạm và kinh nghiệm thực tế trong huấn luyện an toàn, vệ sinh lao động.",
  },
  {
    icon: ClipboardCheck,
    title: "Kiểm định viên",
    description: "Kiểm định viên có chứng chỉ hành nghề, phụ trách kiểm định kỹ thuật an toàn thiết bị.",
  },
  {
    icon: Microscope,
    title: "Kỹ thuật viên Quan trắc",
    description: "Kỹ thuật viên thực hiện đo đạc, quan trắc môi trường lao động bằng thiết bị chuyên dụng.",
  },
  {
    icon: HeadphonesIcon,
    title: "Tư vấn viên",
    description: "Đội ngũ tư vấn hỗ trợ khách hàng xuyên suốt quá trình khảo sát, báo giá đến bàn giao dịch vụ.",
  },
];
