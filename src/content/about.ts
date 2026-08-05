import { Eye, Target, HeartHandshake, ShieldCheck, Users2, TrendingUp, type LucideIcon } from "lucide-react";

export const companyHistory = {
  title: "Lịch sử hình thành",
  paragraphs: [
    "Công ty TNHH Huấn Luyện An Toàn 1 được thành lập với sứ mệnh đồng hành cùng doanh nghiệp trong công tác an toàn, vệ sinh lao động — lĩnh vực ngày càng được các nhà máy, khu công nghiệp và đơn vị sản xuất tại Việt Nam đặc biệt quan tâm.",
    "Từ những ngày đầu, chúng tôi tập trung xây dựng đội ngũ giảng viên, chuyên gia có chuyên môn vững và kinh nghiệm thực tế, đồng thời không ngừng mở rộng phạm vi dịch vụ từ huấn luyện an toàn lao động sang kiểm định thiết bị, quan trắc môi trường lao động và tư vấn an toàn toàn diện.",
    "Đến nay, công ty đã đồng hành cùng nhiều doanh nghiệp, nhà máy, công trình xây dựng trên nhiều lĩnh vực, góp phần xây dựng môi trường làm việc an toàn hơn cho người lao động.",
  ],
};

export const vision = {
  icon: Eye as LucideIcon,
  title: "Tầm nhìn",
  content:
    "Trở thành đơn vị hàng đầu trong lĩnh vực huấn luyện, kiểm định và tư vấn an toàn lao động tại Việt Nam, được doanh nghiệp tin chọn là đối tác đồng hành lâu dài.",
};

export const mission = {
  icon: Target as LucideIcon,
  title: "Sứ mệnh",
  content:
    "Mang đến các giải pháp an toàn lao động toàn diện, thiết thực và tuân thủ đúng quy định pháp luật, giúp doanh nghiệp bảo vệ người lao động và phát triển bền vững.",
};

export const coreValues: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: "Tuân thủ",
    description: "Tuân thủ nghiêm ngặt quy định pháp luật về an toàn lao động trong mọi dịch vụ cung cấp.",
  },
  {
    icon: HeartHandshake,
    title: "Tận tâm",
    description: "Đồng hành và hỗ trợ khách hàng tận tâm trong suốt quá trình hợp tác.",
  },
  {
    icon: Users2,
    title: "Chuyên nghiệp",
    description: "Đội ngũ chuyên môn cao, quy trình làm việc rõ ràng, minh bạch.",
  },
  {
    icon: TrendingUp,
    title: "Không ngừng cải tiến",
    description: "Liên tục cập nhật kiến thức, công nghệ để nâng cao chất lượng dịch vụ.",
  },
];
