import { useState } from "react";
import { Heart, MessageCircle, Share2, Plus, Send } from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";

const posts = [
  {
    id: 1,
    author: "Rajesh Kumar",
    time: "2 hours ago",
    content: "My wheat crop is showing yellow patches on lower leaves. Could this be nitrogen deficiency? Any suggestions for organic treatment?",
    likes: 12,
    comments: 5,
    avatar: "RK",
  },
  {
    id: 2,
    author: "Priya Sharma",
    time: "5 hours ago",
    content: "Successfully harvested my first organic tomato batch this season! 🍅 Yield was 20% higher than last year using vermicompost. Happy to share my approach.",
    likes: 34,
    comments: 18,
    avatar: "PS",
  },
  {
    id: 3,
    author: "Amit Patel",
    time: "1 day ago",
    content: "Tip: Apply neem oil spray early morning before 8 AM for best results against aphids. Evening application also works well. Avoid midday as it can burn leaves.",
    likes: 56,
    comments: 8,
    avatar: "AP",
  },
];

const CommunityPage = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedPosts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6 pb-4 flex items-center justify-between">
        <h1 className="text-lg font-bold text-foreground">Community</h1>
        <motion.button
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-card"
          whileTap={{ scale: 0.9 }}
        >
          <Plus size={20} className="text-primary-foreground" />
        </motion.button>
      </div>

      <div className="px-4 space-y-3">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            className="bg-card rounded-2xl p-4 shadow-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">{post.avatar}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground">{post.author}</p>
                <p className="text-xs text-muted-foreground">{post.time}</p>
              </div>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">{post.content}</p>
            <div className="flex items-center gap-5 mt-3 pt-3 border-t border-border">
              <button
                className="flex items-center gap-1.5"
                onClick={() => toggleLike(post.id)}
              >
                <Heart
                  size={16}
                  className={likedPosts.includes(post.id) ? "text-destructive fill-destructive" : "text-muted-foreground"}
                />
                <span className="text-xs tabular-nums text-muted-foreground">
                  {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                </span>
              </button>
              <button className="flex items-center gap-1.5">
                <MessageCircle size={16} className="text-muted-foreground" />
                <span className="text-xs tabular-nums text-muted-foreground">{post.comments}</span>
              </button>
              <button className="flex items-center gap-1.5 ml-auto">
                <Share2 size={16} className="text-muted-foreground" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default CommunityPage;
