import { ReactNode, useMemo } from "react";
import styled from "styled-components";

import { Description } from "components/styled";
import { COLORS, CONSTANT_STRING, FONT_WEIGHT } from "constant";

const StyledCard = styled.li`
  position: relative;
  padding: 56px 32px 28px 32px;
  display: flex;
  flex-direction: column;
  margin-bottom: 38px;
  background-color: ${COLORS.white};
  border-radius: 10px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -28px;
  left: 28px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: ${FONT_WEIGHT.fw_800};
  line-height: 25.2px;
  color: ${COLORS.primary};
  margin-bottom: 16px;
`;

const Button = styled.button`
  font-size: 1.8rem;
  font-weight: ${FONT_WEIGHT.fw_700};
  line-height: 28px;
  color: ${COLORS.pink};
  background-color: transparent;
  border: none;
  width: fit-content;
  outline-offset: 8px;
  outline-color: ${COLORS.primary};
`;

type CardProps = {
  title: string;
  description: string;
};

function Card({ title, description }: CardProps): JSX.Element {
  const svgIcon: ReactNode = useMemo(() => {
    if (title === CONSTANT_STRING.animation) {
      return (
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
              <stop stop-color="#FF6F48" offset="0%" />
              <stop stop-color="#F02AA6" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <circle fill="url(#a)" cx="28" cy="28" r="28" />
            <path
              d="M33.97 20.678c.565-.498.893-1.21.906-1.962A2.706 2.706 0 0 0 32.16 16a2.794 2.794 0 0 0-1.66.603 2.825 2.825 0 0 0-.854 1.962 2.69 2.69 0 0 0 4.325 2.113Zm-8.752.453c0 .05-.05.05-.1.1v.05a6.308 6.308 0 0 0-2.919 1.41c-.503.473-.958.995-1.358 1.559-1.006 1.408 1.358 2.766 2.315 1.358 1.257-1.762 2.816-2.264 4.527-1.71a141.96 141.96 0 0 0-2.717 5.181c-1.107 2.163-3.47 3.874-5.786 2.566a1.402 1.402 0 1 0-1.508 2.364 6.826 6.826 0 0 0 8.704-1.66c.05 0 .153.05.2.05 1.5.624 2.907 1.454 4.177 2.466.603.502 1.66 3.065 2.263 4.376a1.392 1.392 0 0 0 2.113.452c.393-.382.476-.982.202-1.456-.705-1.456-1.862-4.427-2.818-5.135a31.566 31.566 0 0 0-2.364-1.762l.1-.1a16.972 16.972 0 0 0-1.006-.605c.856-1.609 1.711-3.168 2.616-4.728 2.11.667 4.415.19 6.087-1.258.517-.46.973-.984 1.358-1.56.956-1.257-.905-2.515-2.012-1.66a.709.709 0 0 0-.153.202 4.36 4.36 0 0 1-2.013 1.66c-.05.05-.1.05-.1.1h-.051a4.146 4.146 0 0 1-3.622-.452l.101-.101h.05a.383.383 0 0 0-.201-.1 9.292 9.292 0 0 0-.956-.554 7.258 7.258 0 0 0-5.134-1.056l.005.003Z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </g>
        </svg>
      );
    } else if (title === CONSTANT_STRING.design) {
      return (
        <svg
          width="56"
          height="56"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
              <stop stop-color="#FF6F48" offset="0%" />
              <stop stop-color="#F02AA6" offset="100%" />
            </linearGradient>
            <path
              d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 16L9 8v8H2l7-8V2h7v14Z"
              id="b"
            />
          </defs>
          <g fill="none" fill-rule="evenodd">
            <circle fill="url(#a)" cx="28" cy="28" r="28" />
            <use fill="#FFF" xlinkHref="#b" transform="translate(19 19)" />
          </g>
        </svg>
      );
    } else if (title === CONSTANT_STRING.photography) {
      return (
        <svg
          width="56"
          height="56"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
              <stop stop-color="#FF6F48" offset="0%" />
              <stop stop-color="#F02AA6" offset="100%" />
            </linearGradient>
            <path
              d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 16L9 8v8H2l7-8V2h7v14Z"
              id="b"
            />
          </defs>
          <g fill="none" fill-rule="evenodd">
            <circle fill="url(#a)" cx="28" cy="28" r="28" />
            <use fill="#FFF" xlinkHref="#b" transform="translate(19 19)" />
          </g>
        </svg>
      );
    } else if (title === CONSTANT_STRING.crypto) {
      return (
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
              <stop stop-color="#FF6F48" offset="0%" />
              <stop stop-color="#F02AA6" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <circle fill="url(#a)" cx="28" cy="28" r="28" />
            <path
              d="M33.97 20.678c.565-.498.893-1.21.906-1.962A2.706 2.706 0 0 0 32.16 16a2.794 2.794 0 0 0-1.66.603 2.825 2.825 0 0 0-.854 1.962 2.69 2.69 0 0 0 4.325 2.113Zm-8.752.453c0 .05-.05.05-.1.1v.05a6.308 6.308 0 0 0-2.919 1.41c-.503.473-.958.995-1.358 1.559-1.006 1.408 1.358 2.766 2.315 1.358 1.257-1.762 2.816-2.264 4.527-1.71a141.96 141.96 0 0 0-2.717 5.181c-1.107 2.163-3.47 3.874-5.786 2.566a1.402 1.402 0 1 0-1.508 2.364 6.826 6.826 0 0 0 8.704-1.66c.05 0 .153.05.2.05 1.5.624 2.907 1.454 4.177 2.466.603.502 1.66 3.065 2.263 4.376a1.392 1.392 0 0 0 2.113.452c.393-.382.476-.982.202-1.456-.705-1.456-1.862-4.427-2.818-5.135a31.566 31.566 0 0 0-2.364-1.762l.1-.1a16.972 16.972 0 0 0-1.006-.605c.856-1.609 1.711-3.168 2.616-4.728 2.11.667 4.415.19 6.087-1.258.517-.46.973-.984 1.358-1.56.956-1.257-.905-2.515-2.012-1.66a.709.709 0 0 0-.153.202 4.36 4.36 0 0 1-2.013 1.66c-.05.05-.1.05-.1.1h-.051a4.146 4.146 0 0 1-3.622-.452l.101-.101h.05a.383.383 0 0 0-.201-.1 9.292 9.292 0 0 0-.956-.554 7.258 7.258 0 0 0-5.134-1.056l.005.003Z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </g>
        </svg>
      );
    } else if (title === CONSTANT_STRING.business) {
      return (
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
              <stop stop-color="#FF6F48" offset="0%" />
              <stop stop-color="#F02AA6" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <circle fill="url(#a)" cx="28" cy="28" r="28" />
            <path
              d="M33.97 20.678c.565-.498.893-1.21.906-1.962A2.706 2.706 0 0 0 32.16 16a2.794 2.794 0 0 0-1.66.603 2.825 2.825 0 0 0-.854 1.962 2.69 2.69 0 0 0 4.325 2.113Zm-8.752.453c0 .05-.05.05-.1.1v.05a6.308 6.308 0 0 0-2.919 1.41c-.503.473-.958.995-1.358 1.559-1.006 1.408 1.358 2.766 2.315 1.358 1.257-1.762 2.816-2.264 4.527-1.71a141.96 141.96 0 0 0-2.717 5.181c-1.107 2.163-3.47 3.874-5.786 2.566a1.402 1.402 0 1 0-1.508 2.364 6.826 6.826 0 0 0 8.704-1.66c.05 0 .153.05.2.05 1.5.624 2.907 1.454 4.177 2.466.603.502 1.66 3.065 2.263 4.376a1.392 1.392 0 0 0 2.113.452c.393-.382.476-.982.202-1.456-.705-1.456-1.862-4.427-2.818-5.135a31.566 31.566 0 0 0-2.364-1.762l.1-.1a16.972 16.972 0 0 0-1.006-.605c.856-1.609 1.711-3.168 2.616-4.728 2.11.667 4.415.19 6.087-1.258.517-.46.973-.984 1.358-1.56.956-1.257-.905-2.515-2.012-1.66a.709.709 0 0 0-.153.202 4.36 4.36 0 0 1-2.013 1.66c-.05.05-.1.05-.1.1h-.051a4.146 4.146 0 0 1-3.622-.452l.101-.101h.05a.383.383 0 0 0-.201-.1 9.292 9.292 0 0 0-.956-.554 7.258 7.258 0 0 0-5.134-1.056l.005.003Z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </g>
        </svg>
      );
    }
  }, [title]);
  return (
    <StyledCard>
      <IconWrapper>{svgIcon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>Get Started</Button>
    </StyledCard>
  );
}

export default Card;
