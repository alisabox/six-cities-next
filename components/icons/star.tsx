type Props = {
  className?: string,
  width?: string,
  height?: string,
};

export const StarIcon = ({ className, width = '13', height = '12' }: Props) => {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0
        4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"/>
    </svg>
  );
};
