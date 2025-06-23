import gallery1 from '/gallery1.png'
import gallery2 from '/gallery2.png'
import gallery3 from '/gallery3.png'



const Gallery = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-6">
       <img src={`${gallery1}`} alt="image1" />
       <img src={`${gallery2}`} alt="image2" />
       <img src={`${gallery3}`} alt="image3" />
        
      </div>
    </section>
  );
};

export default Gallery;
