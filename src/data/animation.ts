/** Which CD artwork a package uses — `public/images/animation/cd-<letter>.png`. */
export type DiskLetter = 'a' | 'b' | 'c';

export interface AnimationPackage {
  letter: DiskLetter;
  name: string;
  /** Looping showreel on the laptop screen. */
  video: string;
  /** First frame of `video`; also what shows if the video cannot play. */
  poster: string;
  /** Blurb under the shelf. Empty renders nothing — Figma's Package A frame has no copy yet. */
  description: string;
}

/* Mock content, kept deliberately. The videos are placeholder loops generated from
 * each frame's screen artwork. The B/C blurbs are verbatim from Figma (nodes 2-897 /
 * 2-899), where both frames still carry the same placeholder body text; A has no
 * Figma copy at all, so its blurb is written here to the same shape as a stand-in.
 * Swap the files in `public/` and the strings here — nothing else needs to change. */
export const animationPackages: AnimationPackage[] = [
  {
    letter: 'a',
    name: 'Package A',
    video: '/videos/animation/screen-a.mp4',
    poster: '/images/animation/screen-a.webp',
    description:
      'Package A: The Living Portrait (เริ่มต้น) เหมาะสำหรับ: ภาพโปรไฟล์, การ์ดแนะนำตัว, ภาพตั้งหน้าจอ รายละเอียด: ใช้ภาพวาดตัวละคร 1 ภาพ เติมการเคลื่อนไหวเล็กๆ ให้ดูมีชีวิต เช่น กระพริบตา หายใจ ผมไหวเบาๆ เหมาะกับคนที่อยากลองงานอนิเมชั่นชิ้นแรก',
  },
  {
    letter: 'b',
    name: 'Package B',
    video: '/videos/animation/screen-b.mp4',
    poster: '/images/animation/screen-b.webp',
    description:
      'Package B: The Seamless Loop (เริ่มต้น) เหมาะสำหรับ: งานภาพปกเพลง, ภาพพักหน้าจอ, โพสต์โซเชียลชิลๆ รายละเอียด: ใช้ภาพวาดหลัก 1 ภาพ นำมาทำอนิเมชั่นแบบวนลูป (Looping) เช่น ลมพัดผมปลิว ขยับตา แสงสะท้อน นี่คือตัวเบสิกที่ขายออกง่ายสุด',
  },
  {
    letter: 'c',
    name: 'Package C',
    video: '/videos/animation/screen-c.mp4',
    poster: '/images/animation/screen-c.webp',
    description:
      'Package C: The Seamless Loop (เริ่มต้น) เหมาะสำหรับ: งานภาพปกเพลง, ภาพพักหน้าจอ, โพสต์โซเชียลชิลๆ รายละเอียด: ใช้ภาพวาดหลัก 1 ภาพ นำมาทำอนิเมชั่นแบบวนลูป (Looping) เช่น ลมพัดผมปลิว ขยับตา แสงสะท้อน นี่คือตัวเบสิกที่ขายออกง่ายสุด',
  },
];
