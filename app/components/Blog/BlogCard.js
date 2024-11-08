import Link from "next/link";
import { format } from "date-fns";

const BlogCard = ({ item, index }) => {
  return (
    <Link href={`/blog/${item.slug}`}>
      <div className="group cursor-pointer border border-border rounded-lg p-4 hover:border-foreground transition-colors">
        <div className="flex flex-col gap-2">
          <p className="font-bold group-hover:text-foreground">{item.title}</p>
          <p className="text-sm text-muted-foreground">{item.description}</p>
          <div className="flex items-center gap-4">
            <time className="text-xs text-muted-foreground">
              {format(new Date(item.date), "MMMM d, yyyy")}
            </time>
            <div className="flex gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent px-2 py-1 rounded-md text-xs font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
