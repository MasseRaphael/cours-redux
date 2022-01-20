import { Article } from "../typings/api";
import Image from "next/image";
import Link from "next/link";

const ArticleRenderer = ({article}: {article: Article}) => {
return(
    <>
        <div className="flex w-11/12 md:w-5/6 xl:w-5/6 mx-auro flex-col lg:min-h-fit mt-10 lg:pt-8 pb-8 border-t-8 border-white lg:mt-8 lg:flex-row bg-soft">
            <div className="flex-1 order-1 self-center flex">
                <div className="w-full md:w-8/12 lg:w-full mx-auto xl:p-8 text-center">
                    <Image src={process.env.api + article.seo.ogImage.url}
                    width={article.seo.ogImage.width}
                    height={article.seo.ogImage.height}
                    priority
                    className="object-center object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRsINAABXRUJQVlA4WAoAAAAgAAAANgMAOwUASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                    alt={article.seo?.ogImage?.alternativeText}
                    />
                </div>
            </div>
        </div>
    </>
)
}
export default ArticleRenderer