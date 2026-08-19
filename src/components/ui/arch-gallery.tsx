"use client";

import { useState, type CSSProperties } from "react";

type GalleryItem = {
  image: { src: string; alt?: string };
};

type ArchGalleryProps = {
  items?: GalleryItem[];
  cardWidth?: number;
  cardHeight?: number;
  cornerRadius?: number;
  className?: string;
};

const DEFAULT_ITEMS: GalleryItem[] = [
  {
    image: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      alt: "Minimal office workspace",
    },
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
      alt: "Modern concrete building",
    },
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
      alt: "Architectural interior detail",
    },
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      alt: "Bright living room interior",
    },
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80",
      alt: "Curved glass tower",
    },
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
      alt: "Styled interior corner",
    },
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
      alt: "Warm living space",
    },
  },
];

const ROTATE_STEP = 6;
const Y_STEP = 18;
const OVERLAP = 0.58;
const HOVER_SCALE = 1.08;
const HOVER_LIFT = 16;

export function ArchGallery({
  items = DEFAULT_ITEMS,
  cardWidth = 180,
  cardHeight = 240,
  cornerRadius = 18,
  className = "",
}: ArchGalleryProps) {
  const deck = items.length ? items : DEFAULT_ITEMS;
  const total = deck.length;
  const mid = (total - 1) / 2;
  const [hovered, setHovered] = useState<number | null>(null);

  const stageWidth =
    cardWidth + Math.abs(mid) * 2 * cardWidth * OVERLAP + cardWidth * 0.2;
  const stageHeight = cardHeight + Math.abs(mid) * Y_STEP + 48;

  return (
    <div
      className={["flex w-full items-center justify-center py-10", className]
        .filter(Boolean)
        .join(" ")}
      role="group"
      aria-label="Image gallery"
    >
      <div
        className="relative"
        style={{ width: stageWidth, height: stageHeight }}
      >
        {deck.map((entry, index) => {
          const offset = index - mid;
          const rotate = offset * ROTATE_STEP;
          const translateY = Math.abs(offset) * Y_STEP;
          const translateX = offset * cardWidth * OVERLAP;
          const baseZ = total - Math.abs(offset);
          const isHovered = hovered === index;

          const cardStyle: CSSProperties = {
            position: "absolute",
            left: "50%",
            top: "50%",
            width: cardWidth,
            height: cardHeight,
            marginLeft: -cardWidth / 2,
            marginTop: -cardHeight / 2,
            borderRadius: cornerRadius,
            overflow: "hidden",
            transformOrigin: "center center",
            transform: isHovered
              ? `translate(${translateX}px, ${translateY - HOVER_LIFT}px) rotate(0deg) scale(${HOVER_SCALE})`
              : `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(1)`,
            zIndex: isHovered ? total + 1 : baseZ,
            transition:
              "transform 280ms cubic-bezier(0.22, 1, 0.36, 1), z-index 0ms",
            boxShadow:
              "0 12px 28px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)",
            cursor: "pointer",
            backgroundColor: "#f3f4f6",
          };

          return (
            <div
              key={`${entry.image.src}-${index}`}
              style={cardStyle}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(index)}
              onBlur={() => setHovered(null)}
              tabIndex={0}
              aria-label={entry.image.alt || `Photo ${index + 1}`}
            >
              <img
                src={entry.image.src}
                alt={entry.image.alt || ""}
                draggable={false}
                className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
