import { siteConfig } from "@/content/site-config";

export function GoogleMap() {
  const query = encodeURIComponent(siteConfig.address);

  return (
    <div className="h-full min-h-[280px] w-full overflow-hidden rounded-2xl border">
      <iframe
        title={`Bản đồ ${siteConfig.name}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        className="h-full w-full min-h-[280px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
