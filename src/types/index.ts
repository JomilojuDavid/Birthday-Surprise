export interface Message {
  type: 'text' | 'video' | 'audio';
  name: string;

  // TEXT
  message?: string;

  // MEDIA
  videoUrl?: string;
  audioUrl?: string;

  // fallback (for old data if needed)
  media?: string | null;
}