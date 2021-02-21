
import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
`;

export const ImageContainer = styled.section`
  height: 100vh;
  flex: 1;
  position: relative;
  overflow: hidden;
  background-image: url('/images/cover.png');
  background-size: cover;
`;

export const ImageGradient = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(0, #130525 0%, rgba(105, 57, 153, 0) 100%);
`;
