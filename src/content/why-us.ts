import {
  Users,
  Zap,
  ScrollText,
  BadgeCheck,
  Wallet,
  MapPinned,
  type LucideIcon,
} from "lucide-react";

export type WhyUsItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyUsItems: WhyUsItem[] = [
  {
    icon: Users,
    title: "Đội ngũ chuyên gia",
    description: "Giảng viên, chuyên gia giàu kinh nghiệm thực tế trong lĩnh vực an toàn lao động.",
  },
  {
    icon: Zap,
    title: "Hỗ trợ nhanh chóng",
    description: "Phản hồi yêu cầu và lên lịch khảo sát, báo giá trong thời gian ngắn.",
  },
  {
    icon: ScrollText,
    title: "Đào tạo đúng quy định",
    description: "Chương trình huấn luyện bám sát quy định pháp luật hiện hành, cập nhật liên tục.",
  },
  {
    icon: BadgeCheck,
    title: "Chứng chỉ hợp lệ",
    description: "Chứng chỉ, chứng nhận có giá trị pháp lý, được công nhận trên toàn quốc.",
  },
  {
    icon: Wallet,
    title: "Chi phí hợp lý",
    description: "Mức chi phí cạnh tranh, minh bạch, phù hợp với quy mô từng doanh nghiệp.",
  },
  {
    icon: MapPinned,
    title: "Tư vấn tận nơi",
    description: "Khảo sát và tư vấn trực tiếp tại doanh nghiệp trên toàn quốc.",
  },
];
