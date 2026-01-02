import PageSection from '@/components/_core/layout/PageSection';
import ImageTrail from '@/components/ImageTrail';

export default function GalleryPage() {
  const trailImages = [
    "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    "https://images.unsplash.com/photo-1581091870627-3a9c8c5c9b6b",
    "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
    "https://images.unsplash.com/photo-1621504450181-5d356f61d307"
  ];

  return (
    <PageSection title='Gallery' className='min-h-screen'>
      <div className="flex justify-center mb-12">
        <div style={{ width: '1080px', height: '1080px', position: 'relative' }} className="max-w-full overflow-hidden border border-white/5 rounded-3xl">
          <ImageTrail
            items={trailImages}
            variant="7"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <p className="text-white/20 text-4xl font-black uppercase tracking-[1em] -rotate-90 md:rotate-0">Experience Talos</p>
          </div>
        </div>
      </div>
    </PageSection>
  );
}