import styled from "styled-components";

const StyledImageWrapper = styled.div``;
const StyledImage = styled.img``;

type ImageProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

function Image({ src, alt, width, height }: ImageProps): JSX.Element {
  return (
    <StyledImageWrapper>
      <StyledImage
        width={width}
        height={height}
        src={`assets/${src}`}
        alt={alt}
      />
    </StyledImageWrapper>
  );
}

export default Image;
