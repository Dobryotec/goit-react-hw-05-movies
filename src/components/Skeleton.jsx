import ContentLoader from 'react-content-loader';

const Loader = props => (
  <ContentLoader
    speed={2}
    width={1200}
    height={1000}
    viewBox="0 0 1200 1000"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="4" y="9" rx="0" ry="0" width="198" height="327" />
    <rect x="215" y="65" rx="0" ry="0" width="133" height="10" />
    <rect x="215" y="105" rx="0" ry="0" width="134" height="8" />
    <rect x="215" y="145" rx="0" ry="0" width="106" height="6" />
    <rect x="215" y="185" rx="0" ry="0" width="402" height="28" />
    <rect x="215" y="225" rx="0" ry="0" width="82" height="7" />
    <rect x="215" y="265" rx="0" ry="0" width="82" height="5" />
    <rect x="8" y="356" rx="0" ry="0" width="188" height="10" />
    <rect x="8" y="378" rx="0" ry="0" width="105" height="10" />
    <rect x="8" y="396" rx="0" ry="0" width="101" height="10" />
  </ContentLoader>
);

export default Loader;
