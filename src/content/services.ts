import {
  HardHat,
  FlaskConical,
  HeartPulse,
  Forklift,
  ShieldAlert,
  ClipboardCheck,
  Wind,
  type LucideIcon,
} from "lucide-react";

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  summary: string;
  audience: string[];
  process: ServiceStep[];
  benefits: string[];
  faq: ServiceFaqItem[];
  legalNote?: string;
};

export const services: Service[] = [
  {
    slug: "huan-luyen-atvsld",
    icon: HardHat,
    title: "Huấn luyện An toàn Vệ sinh Lao động",
    shortDescription:
      "Huấn luyện an toàn vệ sinh lao động cho các Nhóm 1 đến Nhóm 6 theo quy định hiện hành.",
    summary:
      "Chương trình huấn luyện an toàn vệ sinh lao động (ATVSLĐ) được thiết kế bám sát đặc thù ngành nghề của từng doanh nghiệp, giúp người lao động và người quản lý nhận diện mối nguy, phòng ngừa tai nạn lao động và tuân thủ đầy đủ quy định pháp luật về an toàn lao động.",
    audience: [
      "Nhóm 1: Người quản lý phụ trách công tác an toàn, vệ sinh lao động",
      "Nhóm 2: Người làm công tác an toàn, vệ sinh lao động",
      "Nhóm 3: Người lao động làm công việc có yêu cầu nghiêm ngặt về an toàn, vệ sinh lao động",
      "Nhóm 4: Người lao động không thuộc các nhóm còn lại",
      "Nhóm 5: Người làm công tác y tế tại doanh nghiệp",
      "Nhóm 6: An toàn, vệ sinh viên tại cơ sở sản xuất",
    ],
    process: [
      { title: "Tiếp nhận yêu cầu", description: "Ghi nhận thông tin, số lượng học viên và đặc thù ngành nghề của doanh nghiệp." },
      { title: "Khảo sát", description: "Khảo sát thực tế nhà xưởng, công đoạn sản xuất để xây dựng nội dung sát thực tế." },
      { title: "Lên chương trình", description: "Thiết kế chương trình huấn luyện theo đúng nhóm đối tượng và ngành nghề." },
      { title: "Tổ chức huấn luyện", description: "Giảng dạy lý thuyết kết hợp thực hành tại doanh nghiệp hoặc tại trung tâm." },
      { title: "Kiểm tra, sát hạch", description: "Đánh giá kết quả tiếp thu của học viên sau khoá huấn luyện." },
      { title: "Cấp giấy chứng nhận", description: "Cấp giấy chứng nhận/thẻ an toàn lao động có giá trị theo quy định." },
    ],
    benefits: [
      "Chương trình cập nhật theo quy định pháp luật hiện hành",
      "Giảng viên giàu kinh nghiệm thực tế trong lĩnh vực an toàn lao động",
      "Tổ chức linh hoạt tại doanh nghiệp hoặc tại trung tâm đào tạo",
      "Hồ sơ, chứng nhận hợp lệ, có giá trị sử dụng trên toàn quốc",
      "Hỗ trợ tư vấn xây dựng nội quy, quy trình an toàn đi kèm",
    ],
    faq: [
      {
        question: "Giấy chứng nhận huấn luyện có thời hạn bao lâu?",
        answer:
          "Thời hạn phụ thuộc vào từng nhóm đối tượng theo quy định hiện hành. Vui lòng liên hệ hotline để được tư vấn chính xác theo tình huống cụ thể của doanh nghiệp.",
      },
      {
        question: "Doanh nghiệp có thể tổ chức huấn luyện tại nhà máy không?",
        answer:
          "Có. Chúng tôi tổ chức huấn luyện lưu động tại doanh nghiệp trên toàn quốc, giúp tiết kiệm thời gian di chuyển cho người lao động.",
      },
    ],
    legalNote:
      "Thông tin mang tính tham khảo. Quy định pháp luật có thể thay đổi theo thời điểm — vui lòng liên hệ để được tư vấn cập nhật mới nhất.",
  },
  {
    slug: "an-toan-hoa-chat",
    icon: FlaskConical,
    title: "Huấn luyện An toàn Hóa chất",
    shortDescription: "Huấn luyện an toàn hóa chất theo Nghị định 25/2026.",
    summary:
      "Trang bị kiến thức nhận diện, phân loại, lưu trữ, vận chuyển và ứng phó sự cố hóa chất cho người lao động và cán bộ kỹ thuật, đáp ứng yêu cầu về an toàn hóa chất theo Nghị định 25/2026.",
    audience: [
      "Người quản lý, điều hành trực tiếp sản xuất, kinh doanh hóa chất",
      "Người lao động tiếp xúc trực tiếp với hóa chất nguy hiểm",
      "Cán bộ kỹ thuật, an toàn phụ trách kho chứa hóa chất",
      "Đội ứng phó sự cố hóa chất tại cơ sở",
    ],
    process: [
      { title: "Tiếp nhận yêu cầu", description: "Thu thập thông tin về loại hóa chất, quy mô sử dụng của doanh nghiệp." },
      { title: "Khảo sát", description: "Khảo sát kho chứa, quy trình sử dụng hóa chất thực tế tại cơ sở." },
      { title: "Báo giá", description: "Đề xuất chương trình huấn luyện và báo giá phù hợp." },
      { title: "Thực hiện", description: "Huấn luyện lý thuyết và thực hành xử lý tình huống sự cố hóa chất." },
      { title: "Bàn giao", description: "Cấp giấy chứng nhận huấn luyện an toàn hóa chất." },
      { title: "Hỗ trợ sau dịch vụ", description: "Tư vấn xây dựng biện pháp phòng ngừa, ứng phó sự cố hóa chất." },
    ],
    benefits: [
      "Nội dung huấn luyện cập nhật theo Nghị định 25/2026",
      "Chuyên gia có kinh nghiệm thực tế trong lĩnh vực hóa chất công nghiệp",
      "Kèm hướng dẫn thực hành ứng phó sự cố tràn đổ, cháy nổ hóa chất",
      "Hỗ trợ tư vấn hồ sơ an toàn hóa chất đi kèm",
    ],
    faq: [
      {
        question: "Huấn luyện an toàn hóa chất áp dụng cho đối tượng nào?",
        answer:
          "Áp dụng cho tổ chức, cá nhân sản xuất, kinh doanh, sử dụng, bảo quản hoặc vận chuyển hóa chất theo quy định.",
      },
      {
        question: "Có được huấn luyện ngoài giờ hành chính không?",
        answer: "Có. Chúng tôi sắp xếp lịch huấn luyện linh hoạt kể cả ngoài giờ hành chính hoặc cuối tuần theo nhu cầu doanh nghiệp.",
      },
    ],
    legalNote:
      "Thông tin mang tính tham khảo. Quy định pháp luật có thể thay đổi theo thời điểm — vui lòng liên hệ để được tư vấn cập nhật mới nhất.",
  },
  {
    slug: "chung-chi-y-te-lao-dong",
    icon: HeartPulse,
    title: "Huấn luyện Cấp Chứng chỉ Y tế Lao động",
    shortDescription: "Huấn luyện và cấp chứng chỉ cho người làm công tác y tế lao động tại doanh nghiệp.",
    summary:
      "Đào tạo nghiệp vụ sơ cấp cứu, chăm sóc sức khỏe người lao động và phòng chống bệnh nghề nghiệp cho đội ngũ y tế cơ sở, giúp doanh nghiệp đáp ứng yêu cầu về công tác y tế lao động.",
    audience: [
      "Người phụ trách công tác y tế tại doanh nghiệp, nhà máy",
      "Nhân viên y tế cơ sở chưa có chứng chỉ chuyên môn phù hợp",
      "Người lao động kiêm nhiệm công tác sơ cấp cứu tại xưởng sản xuất",
    ],
    process: [
      { title: "Tiếp nhận yêu cầu", description: "Ghi nhận nhu cầu đào tạo và số lượng học viên." },
      { title: "Khảo sát", description: "Đánh giá điều kiện y tế hiện có tại doanh nghiệp." },
      { title: "Báo giá", description: "Đề xuất chương trình đào tạo phù hợp quy mô doanh nghiệp." },
      { title: "Thực hiện", description: "Đào tạo lý thuyết và thực hành sơ cấp cứu, chăm sóc sức khỏe lao động." },
      { title: "Bàn giao", description: "Cấp chứng chỉ hoàn thành khóa đào tạo." },
      { title: "Hỗ trợ sau dịch vụ", description: "Tư vấn xây dựng tủ thuốc, quy trình sơ cấp cứu tại chỗ." },
    ],
    benefits: [
      "Giảng viên là chuyên gia y tế lao động giàu kinh nghiệm",
      "Thực hành sơ cấp cứu trên tình huống mô phỏng thực tế",
      "Hỗ trợ tư vấn tổ chức khám sức khỏe định kỳ, khám bệnh nghề nghiệp",
      "Chứng chỉ hợp lệ theo quy định",
    ],
    faq: [
      {
        question: "Chứng chỉ y tế lao động có bắt buộc với mọi doanh nghiệp không?",
        answer:
          "Việc bố trí người làm công tác y tế lao động là yêu cầu chung theo quy định an toàn vệ sinh lao động, mức độ cụ thể phụ thuộc quy mô và ngành nghề. Liên hệ để được tư vấn chi tiết cho trường hợp của doanh nghiệp bạn.",
      },
      {
        question: "Có xuất hóa đơn VAT không?",
        answer: "Có. Chúng tôi xuất hóa đơn giá trị gia tăng đầy đủ cho mọi dịch vụ.",
      },
    ],
    legalNote:
      "Thông tin mang tính tham khảo. Quy định pháp luật có thể thay đổi theo thời điểm — vui lòng liên hệ để được tư vấn cập nhật mới nhất.",
  },
  {
    slug: "dao-tao-van-hanh-thiet-bi-nghiem-ngat",
    icon: Forklift,
    title: "Huấn luyện Vận hành Thiết bị có Yêu cầu Nghiêm ngặt",
    shortDescription:
      "Đào tạo vận hành xe nâng, nồi hơi, hàn, điện, thiết bị áp lực, thiết bị nâng an toàn, đúng quy chuẩn.",
    summary:
      "Đào tạo cấp chứng chỉ/chứng nhận vận hành cho các thiết bị có yêu cầu nghiêm ngặt về an toàn lao động như xe nâng, nồi hơi, thiết bị hàn, thiết bị điện, thiết bị áp lực và thiết bị nâng, giúp người vận hành thao tác đúng kỹ thuật và phòng tránh tai nạn.",
    audience: [
      "Người vận hành xe nâng, cần trục, thiết bị nâng hạ",
      "Người vận hành nồi hơi, thiết bị chịu áp lực",
      "Thợ hàn, thợ điện làm việc trong môi trường công nghiệp",
      "Nhân sự kỹ thuật, bảo trì thiết bị tại nhà máy, công trường",
    ],
    process: [
      { title: "Tiếp nhận yêu cầu", description: "Xác định loại thiết bị và số lượng học viên cần đào tạo." },
      { title: "Khảo sát", description: "Khảo sát thiết bị thực tế tại doanh nghiệp để xây dựng bài thực hành phù hợp." },
      { title: "Báo giá", description: "Đề xuất chương trình và báo giá đào tạo." },
      { title: "Thực hiện", description: "Đào tạo lý thuyết kỹ thuật vận hành và thực hành trực tiếp trên thiết bị." },
      { title: "Bàn giao", description: "Sát hạch và cấp chứng chỉ/chứng nhận vận hành." },
      { title: "Hỗ trợ sau dịch vụ", description: "Tư vấn quy trình vận hành an toàn, bảo trì định kỳ thiết bị." },
    ],
    benefits: [
      "Đào tạo thực hành trực tiếp trên thiết bị thực tế",
      "Giảng viên kỹ thuật có chuyên môn sâu theo từng loại thiết bị",
      "Chứng chỉ/chứng nhận có giá trị theo quy định hiện hành",
      "Hỗ trợ tư vấn quy trình vận hành, bảo trì an toàn đi kèm",
    ],
    faq: [
      {
        question: "Những thiết bị nào được đào tạo trong chương trình này?",
        answer:
          "Bao gồm xe nâng, nồi hơi, thiết bị hàn, thiết bị điện, thiết bị áp lực và thiết bị nâng. Liên hệ để được tư vấn chương trình phù hợp với loại thiết bị doanh nghiệp đang sử dụng.",
      },
      {
        question: "Bao lâu có thể tổ chức lớp học?",
        answer: "Thông thường từ 3-7 ngày làm việc kể từ khi thống nhất chương trình, tùy số lượng học viên và loại thiết bị.",
      },
    ],
    legalNote:
      "Thông tin mang tính tham khảo. Quy định pháp luật có thể thay đổi theo thời điểm — vui lòng liên hệ để được tư vấn cập nhật mới nhất.",
  },
  {
    slug: "tu-van-danh-gia-rui-ro",
    icon: ShieldAlert,
    title: "Tư vấn Đánh giá Rủi ro",
    shortDescription:
      "Đánh giá rủi ro, biện pháp phòng ngừa, kế hoạch ứng phó và hồ sơ an toàn cho doanh nghiệp.",
    summary:
      "Đội ngũ chuyên gia khảo sát, nhận diện mối nguy tại từng công đoạn sản xuất, từ đó xây dựng biện pháp phòng ngừa, kế hoạch ứng phó sự cố và hoàn thiện hồ sơ an toàn lao động cho doanh nghiệp.",
    audience: [
      "Doanh nghiệp sản xuất, nhà máy cần đánh giá rủi ro định kỳ",
      "Chủ đầu tư, nhà thầu xây dựng cần hồ sơ an toàn công trình",
      "Doanh nghiệp chuẩn bị đánh giá, kiểm tra của cơ quan quản lý nhà nước",
    ],
    process: [
      { title: "Tiếp nhận yêu cầu", description: "Trao đổi phạm vi, mục tiêu đánh giá rủi ro với doanh nghiệp." },
      { title: "Khảo sát", description: "Khảo sát thực tế nhà xưởng, quy trình sản xuất, thiết bị." },
      { title: "Báo giá", description: "Đề xuất phạm vi công việc và chi phí tư vấn." },
      { title: "Thực hiện", description: "Đánh giá rủi ro, đề xuất biện pháp phòng ngừa và kế hoạch ứng phó." },
      { title: "Bàn giao", description: "Bàn giao báo cáo đánh giá rủi ro và hồ sơ an toàn hoàn chỉnh." },
      { title: "Hỗ trợ sau dịch vụ", description: "Tư vấn cập nhật hồ sơ khi có thay đổi về quy trình, thiết bị." },
    ],
    benefits: [
      "Chuyên gia có kinh nghiệm đánh giá rủi ro đa ngành",
      "Báo cáo chi tiết, dễ áp dụng vào thực tế sản xuất",
      "Hồ sơ an toàn đầy đủ, phục vụ công tác kiểm tra, thanh tra",
      "Tư vấn tận nơi trên toàn quốc",
    ],
    faq: [
      {
        question: "Đánh giá rủi ro có cần thực hiện định kỳ không?",
        answer:
          "Nên thực hiện định kỳ hoặc khi có thay đổi về quy trình, thiết bị, mặt bằng sản xuất để đảm bảo hồ sơ an toàn luôn cập nhật.",
      },
      {
        question: "Có hỗ trợ tư vấn tận nơi không?",
        answer: "Có. Đội ngũ chuyên gia trực tiếp khảo sát và tư vấn tại doanh nghiệp trên toàn quốc.",
      },
    ],
  },
  {
    slug: "kiem-dinh-an-toan-thiet-bi",
    icon: ClipboardCheck,
    title: "Kiểm định An toàn Thiết bị",
    shortDescription: "Kiểm định kỹ thuật an toàn cho máy, thiết bị có yêu cầu nghiêm ngặt trước khi đưa vào sử dụng.",
    summary:
      "Kiểm định kỹ thuật an toàn định kỳ và kiểm định lần đầu cho máy, thiết bị, vật tư có yêu cầu nghiêm ngặt về an toàn lao động, giúp doanh nghiệp vận hành đúng quy định và phòng ngừa sự cố.",
    audience: [
      "Nhà máy, khu công nghiệp sử dụng thiết bị có yêu cầu nghiêm ngặt về an toàn",
      "Chủ đầu tư, nhà thầu cần kiểm định thiết bị thi công",
      "Đơn vị vận hành thiết bị nâng, thiết bị áp lực, thiết bị điện",
    ],
    process: [
      { title: "Tiếp nhận yêu cầu", description: "Ghi nhận loại thiết bị, số lượng cần kiểm định." },
      { title: "Khảo sát", description: "Khảo sát hiện trạng thiết bị tại doanh nghiệp." },
      { title: "Báo giá", description: "Đề xuất phương án và báo giá kiểm định." },
      { title: "Thực hiện", description: "Kiểm định kỹ thuật an toàn theo quy trình, quy chuẩn hiện hành." },
      { title: "Bàn giao", description: "Cấp kết quả kiểm định, tem/dấu kiểm định theo quy định." },
      { title: "Hỗ trợ sau dịch vụ", description: "Nhắc lịch kiểm định định kỳ, tư vấn khắc phục sai lỗi (nếu có)." },
    ],
    benefits: [
      "Kiểm định viên có chứng chỉ hành nghề theo quy định",
      "Trang thiết bị kiểm định hiện đại, kết quả chính xác",
      "Hồ sơ kiểm định hợp lệ, được công nhận rộng rãi",
      "Nhắc lịch kiểm định định kỳ, tránh gián đoạn sản xuất",
    ],
    faq: [
      {
        question: "Những thiết bị nào cần kiểm định an toàn?",
        answer:
          "Các máy, thiết bị, vật tư có yêu cầu nghiêm ngặt về an toàn lao động theo danh mục quy định như thiết bị nâng, thiết bị áp lực, thiết bị điện... Liên hệ để được tư vấn cụ thể theo thiết bị doanh nghiệp đang sử dụng.",
      },
      {
        question: "Kiểm định định kỳ được thực hiện bao lâu một lần?",
        answer: "Chu kỳ kiểm định phụ thuộc từng loại thiết bị theo quy chuẩn kỹ thuật tương ứng. Chúng tôi sẽ tư vấn và nhắc lịch cụ thể cho từng thiết bị.",
      },
    ],
    legalNote:
      "Thông tin mang tính tham khảo. Quy định pháp luật có thể thay đổi theo thời điểm — vui lòng liên hệ để được tư vấn cập nhật mới nhất.",
  },
  {
    slug: "quan-trac-moi-truong-lao-dong",
    icon: Wind,
    title: "Quan trắc Môi trường Lao động",
    shortDescription: "Đo, quan trắc các yếu tố môi trường lao động định kỳ theo quy định.",
    summary:
      "Thực hiện đo đạc, quan trắc các yếu tố có hại trong môi trường lao động như vi khí hậu, tiếng ồn, ánh sáng, bụi, hơi khí độc..., giúp doanh nghiệp đánh giá điều kiện làm việc và có biện pháp cải thiện phù hợp.",
    audience: [
      "Nhà máy, xí nghiệp sản xuất có yếu tố môi trường lao động cần kiểm soát",
      "Doanh nghiệp cần hồ sơ quan trắc phục vụ khám sức khỏe, bệnh nghề nghiệp",
      "Khu công nghiệp, cụm công nghiệp cần đánh giá điều kiện lao động định kỳ",
    ],
    process: [
      { title: "Tiếp nhận yêu cầu", description: "Ghi nhận vị trí, yếu tố cần quan trắc tại doanh nghiệp." },
      { title: "Khảo sát", description: "Khảo sát thực tế các vị trí làm việc cần đo đạc." },
      { title: "Báo giá", description: "Đề xuất phương án và báo giá quan trắc." },
      { title: "Thực hiện", description: "Đo đạc, lấy mẫu và phân tích các yếu tố môi trường lao động." },
      { title: "Bàn giao", description: "Bàn giao báo cáo kết quả quan trắc môi trường lao động." },
      { title: "Hỗ trợ sau dịch vụ", description: "Tư vấn biện pháp cải thiện điều kiện lao động nếu phát hiện yếu tố vượt ngưỡng." },
    ],
    benefits: [
      "Thiết bị đo đạc hiện đại, kết quả chính xác",
      "Đội ngũ kỹ thuật viên quan trắc có chuyên môn",
      "Báo cáo đầy đủ, phục vụ hồ sơ khám sức khỏe định kỳ",
      "Tư vấn cải thiện điều kiện lao động thực tế",
    ],
    faq: [
      {
        question: "Quan trắc môi trường lao động được thực hiện bao lâu một lần?",
        answer: "Theo quy định hiện hành, doanh nghiệp cần thực hiện quan trắc định kỳ hằng năm. Liên hệ để được tư vấn cụ thể theo ngành nghề.",
      },
      {
        question: "Kết quả quan trắc dùng để làm gì?",
        answer: "Kết quả là căn cứ đánh giá điều kiện lao động, phục vụ hồ sơ khám sức khỏe, bệnh nghề nghiệp và cải thiện môi trường làm việc.",
      },
    ],
    legalNote:
      "Thông tin mang tính tham khảo. Quy định pháp luật có thể thay đổi theo thời điểm — vui lòng liên hệ để được tư vấn cập nhật mới nhất.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
