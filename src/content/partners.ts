// Đối tác / khách hàng tiêu biểu. Khi có file logo thật, đặt vào
// /public/images/doi-tac/ rồi điền đường dẫn vào field `logo` — component
// PartnerLogos sẽ tự hiển thị logo thật thay cho khối chữ placeholder.
export type Partner = {
  name: string;
  logo?: string;
};

export const partners: Partner[] = [
  { name: "Vinpearl" },
  { name: "SM Xanh" },
  { name: "JW Marriott" },
  { name: "Bệnh viện Đa khoa Tâm Anh" },
  { name: "Yakult" },
  { name: "C.P Việt Nam" },
];
