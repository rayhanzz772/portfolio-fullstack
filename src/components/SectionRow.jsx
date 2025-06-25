import { useInView } from 'react-intersection-observer';

const SectionRow = ({ title, description }) => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Ganti sesuai seberapa jauh harus terlihat dulu
    triggerOnce: false,
  });

  const textColor = inView ? 'text-white' : 'text-gray-400';

  return (
    <div
      ref={ref}
      className="font-mori flex w-full h-full pt-5 justify-start gap-8 transition-colors duration-500"
    >
      <div className={`w-2/6 text-4xl ${textColor} transition-colors duration-500`}>
        <h1>{title}</h1>
      </div>

      <div className={`w-4/6 text-2xl ${textColor} transition-colors duration-500`}>
        <h1 className="font-mori">{description}</h1>
      </div>
    </div>
  );
};

export default SectionRow;