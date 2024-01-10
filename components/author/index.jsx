import Image from "@/components/image";
import siteMetadata from "@/data/siteMetadata";

export default function Author() {
  return (
    <div className="group block flex-shrink-0">
      <div className="flex items-center">
        <div>
          <Image
            src="/static/images/avatar.png"
            width={24}
            height={24}
            alt="avatar"
            className="inline-block rounded-full"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">{siteMetadata.author}</p>
        </div>
      </div>
    </div>
  )
}