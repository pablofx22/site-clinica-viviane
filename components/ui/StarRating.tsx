interface StarRatingProps {
  count?: number;
  size?: "sm" | "md";
}

export default function StarRating({ count = 5, size = "sm" }: StarRatingProps) {
  return (
    <div className={size === "md" ? "avaliacoes-stars" : "avaliacao-stars"}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}